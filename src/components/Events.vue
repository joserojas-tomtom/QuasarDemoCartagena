<template>
<div>
  <q-page-sticky position="bottom-right" :offset="[9, 9]">
  <q-fab ref='fab' padding='sm' color="primary" icon="layers" direction="up">
    <q-fab-action ref='fab_service' :color="state.service" @click="onClick('service')" icon="home_repair_service"/>
    <q-fab-action ref='fab_announcement' :color="state.announcement" @click="onClick('announcement')" icon="campaign" />
    <q-fab-action ref='fab_lostfound' :color="state.lostfound" @click="onClick('lostfound')" icon="saved_search" />
    <q-fab-action ref='fab_sell' :color="state.sell" @click="onClick('sell')" icon="shopping_bag" />
  </q-fab>
  </q-page-sticky>
</div>
</template>

<script>
import { LocalStorage } from 'quasar'
import store from '../router/store'

const buttonSelected = 'dark'
const buttonUnselected = 'grey'

export default {
  name: 'Events',
  props: ['city'],
  data () {
    return {
      markers: {
        nota_publica: [],
        venta_promocion: [],
        lost_found: [],
        work_offering: []
      },
      currentEvents: undefined,
      categories: [],
      state: {
        lostfound: buttonSelected,
        service: buttonSelected,
        announcement: buttonSelected,
        sell: buttonSelected
      }
    }
  },
  mounted () {
    console.log('Events. city=', this.city)
    this.categories = LocalStorage.getItem('event-categories')
    // store.actions.fetchCityEvents(this.city, this.handleAllEVents)
    store.actions.registerEventListener(this.city, this.changeListener)
  },
  beforeDestroy () {
    store.actions.removeEventListener(this.city)
  },
  methods: {
    createMarker (event) {
      console.log('creating marker ', event)
      return new window.tt.Marker().setLngLat(event.location)
    },
    buildMarkers (data) {
      const _this = this
      this.categories.forEach(function (cat) {
        console.log('checking cat ' + cat.value)
        const elements = data[cat.value]
        if (elements) {
          const timeframes = Object.keys(elements)
          _this.$emit('removeMarkers', _this.markers[cat.value])
          _this.markers[cat.value] = []
          timeframes.forEach(function (event) {
            _this.markers[cat.value].push(_this.createMarker(elements[event]))
          })
          console.log('adding markers for ' + cat, _this.markers[cat.value])
          _this.$emit('addMarkers', _this.markers[cat.value])
        }
      })
    },
    changeListener (data) {
      console.log('Change Listener', data)
      if (data) {
        this.currentEvents = data
        this.buildMarkers(data)
      }
    },
    handleAllEVents (data) {
      console.log('Handle all event from city ', data)
      if (data) {
        this.currentEvents = data
      }
    },
    close: function () {
      console.log('closing events FAB')
      this.$refs.fab.hide()
    },
    onClick (obj) {
      this.state[obj] = this.state[obj] === buttonSelected ? buttonUnselected : buttonSelected
      console.log('fab action', this.state)
    }
  }
}
</script>
