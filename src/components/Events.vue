<template>
<div>
  <q-page-sticky position="top-right" :offset="[9, 9]">
  <q-fab ref='fab'
  padding='sm'
  color="primary"
  vertical-actions-align="right"
  icon="layers"
  direction="down">
    <q-fab-action
                  label-position='left'
                  label='Servicios'
                  ref='fab_service'
                  :color="state.service"
                  @click="onClick('service')"
                  icon="home_repair_service"/>
    <q-fab-action ref='fab_announcement'

                  label-position='left'
                  label='Anuncio'
                  :color="state.announcement"
                  @click="onClick('announcement')"
                  icon="campaign" />
    <q-fab-action ref='fab_lostfound'

                  label-position='left'
                  label='Perdido/encontrado'
                  :color="state.lostfound" @click="onClick('lostfound')" icon="saved_search" />
    <q-fab-action ref='fab_sell'
                  label-position='left'
                  label='Se Vende'
                  :color="state.sell" @click="onClick('sell')" icon="shopping_bag" />
  </q-fab>
  </q-page-sticky>
</div>
</template>

<script>
import { LocalStorage } from 'quasar'
import store from '../router/store'

const buttonSelected = 'dark'
const buttonUnselected = 'grey'

// extend mapboxGL Marker so we can pass in an onClick handler
class ClickableMarker extends window.tt.Marker {
  // new method onClick, sets _handleClick to a function you pass in
  onClick (handleClick) {
    this._handleClick = handleClick
    return this
  }

  // the existing _onMapClick was there to trigger a popup
  // but we are hijacking it to run a function we define
  _onMapClick (e) {
    const targetElement = e.originalEvent.target
    const element = this._element

    if (this._handleClick && (targetElement === element || element.contains((targetElement)))) {
      this._handleClick()
    }
  }
};

export default {
  name: 'Events',
  props: ['city'],
  data () {
    return {
      icons: {
        service: 'home_repair_service',
        announcement: 'campaign',
        lostfound: 'saved_search',
        sell: 'shopping_bag'
      },
      markers: {
        announcement: [],
        sell: [],
        lostfound: [],
        service: []
      },
      currentEvents: undefined,
      categories: [],
      state: {
        lostfound: buttonSelected,
        service: buttonSelected,
        announcement: buttonSelected,
        sell: buttonSelected
      },
      timerVar: undefined
    }
  },
  mounted () {
    // console.log('Events. city=', this.city)
    this.categories = LocalStorage.getItem('event-categories')
    store.actions.registerEventListener(this.city, this.changeListener)
    this.startCheckTimer()
  },
  beforeDestroy () {
    store.actions.removeEventListener(this.city)
    this.stopCheckTimer()
  },
  methods: {
    startCheckTimer () {
      const _this = this
      this.timerVar = setInterval(function () {
        const eventsCopy = { ...this.currentEvents }
        _this.checkEventsData(eventsCopy)
      }, 5 * 3600) // 5 minutes
    },
    stopCheckTimer () {
      clearTimeout(this.timerVar)
    },
    handleMarkerClick (obj) {
      console.log('Clicking marker', obj)
    },
    createMarker (event) {
      console.log('creating marker ', event)
      const iconElement = document.createElement('i')
      iconElement.className = 'material-icons marker-icon'
      iconElement.innerHTML = this.icons[event.category.value]

      const markerElement = document.createElement('div')
      markerElement.className = 'marker-circle'
      // markerElement.style = 'width: 30px; height: 30px'
      // markerElement.innerHTML = "<img src='home_repair_service' style='width: 30px; height: 30px';>"
      // markerElement.innerHTML = "<i style='width: 30px; height: 30px' class='marker-content material-icons'>home_repair_service</i>"
      markerElement.appendChild(iconElement)
      const _this = this
      const marker = new ClickableMarker({
        element: markerElement
      }).setLngLat(event.location).onClick(function () {
        console.log('you click ', event)
        const options = {
          name: 'displayEvent',
          params: { event: event }
        }
        // go to
        _this.$router.push(options)
      })

      marker.setPopup(new window.tt.Popup({
        className: 'popup-content',
        closeButton: false,
        closeOnClick: false,
        closeOnMove: false
      })
        .setLngLat(event.location)
        .setText(event.description))
      // marker.togglePopup()
      return marker
    },
    buildMarkers (data) {
      const _this = this
      this.categories.forEach(function (cat) {
        // console.log('checking cat ' + cat.value)
        const elements = data[cat.value]
        if (elements) {
          const timeframes = Object.keys(elements)
          _this.$emit('removeMarkers', _this.markers[cat.value])
          _this.markers[cat.value] = []
          timeframes.forEach(function (event) {
            _this.markers[cat.value].push(_this.createMarker(elements[event]))
          })
          if (_this.state[cat.value] === buttonSelected) {
            // console.log('adding markers for ' + cat, _this.markers[cat.value])
            _this.$emit('addMarkers', _this.markers[cat.value])
          }
        }
      })
    },
    checkEventsData (data) {
      const _this = this
      this.currentEvents = {}
      // Let remove the old events from the list
      const timeNowSecs = Math.floor(Date.now() / 1000)
      this.categories.forEach(function (cat) {
        const elements = data[cat.value]
        _this.currentEvents[cat.value] = {}
        if (elements) {
          const ids = Object.keys(elements)
          ids.forEach(function (event) {
            console.log('Checking ', elements[event])
            const eventCreationSecs = elements[event].timestamp / 1000
            const timeToLive = elements[event].timeToLive.value
            if ((eventCreationSecs + timeToLive) >= timeNowSecs) {
              _this.currentEvents[cat.value][event] = elements[event]
            }
          })
        }
      })
      this.buildMarkers(this.currentEvents)
    },
    changeListener (data) {
      // console.log('Change Listener', data)
      if (data) {
        this.checkEventsData(data)
      }
    },
    close: function () {
      // console.log('closing events FAB')
      this.$refs.fab.hide()
    },
    onClick (obj) {
      this.state[obj] = this.state[obj] === buttonSelected ? buttonUnselected : buttonSelected
      // console.log('fab action', this.state)
      if (this.state[obj] === buttonSelected) {
        this.$emit('addMarkers', this.markers[obj])
      } else {
        this.$emit('removeMarkers', this.markers[obj])
      }
    }
  }
}
</script>
<style>
.marker-circle {
            background: #016515;
            border-radius: 50% 50% 50% 50%;
            height: 40px;
            position: absolute;
            width: 40px;
}
.marker-content {
            background: #c30b82;
            border-radius: 50% 50% 50% 0;
            height: 30px;
            left: 50%;
            margin: -15px 0 0 -15px;
            position: absolute;
            top: 50%;
            transform: rotate(-45deg);
            width: 30px;
        }
.marker-icon {
            background-position: center;
            background-size: 40px 40px;
            border-radius: 50%;
            height: 40px;
            position: absolute;
            text-align: center;
            width: 40px;
            color: white;
            font-size: 2em
        }
.popup-content {
            color: white;
            margin: -40px 0 0 0px;
            position: absolute;
}
.mapboxgl-popup-content {
  background: green;
  padding: 0px 5px 5px 5px;
  box-shadow: 3px 3px 2px black;
  font-size: 12px;
  font-weight: bold;
}
.mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
    border-bottom-color: green;
    }
.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip,
.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
    border-top-color: green;
    }
.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
    border-right-color: green;
    }
.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
    border-left-color: green;
    }
</style>
