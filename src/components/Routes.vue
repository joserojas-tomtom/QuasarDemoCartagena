<template>
<div>
  <q-page-sticky position="top-right" :offset="[60, 9]">
  <q-fab ref='fab' padding='sm' color="secondary" icon="alt_route" direction="down">
    <q-fab-action external-label
                  label-position='left'
                  ref='fab_eliminar'
                  color="secondary"
                  @click="cancelRoute"
                  icon="delete_forever"/>
    <q-fab-action ref='fab_recalculate'
                  external-label
                  label-position='left'
                  color="secondary"
                  @click="recalculateRoute"
                  icon="refresh" />
  </q-fab>
  </q-page-sticky>
</div>
</template>

<script>
import { LocalStorage, Notify } from 'quasar'
let apikey

export default {
  name: 'Routes',
  props: [],
  data () {
    return {
      origin: undefined
    }
  },
  mounted () {
    this.$root.$on('location-update', this.updateOrigin)
    apikey = LocalStorage.getItem('apikey')
  },
  beforeDestroy () {
    this.$root.$off('location-update')
  },
  methods: {
    createRoute (destination, type, language) {
      const _this = this
      console.log('ROUTE REQUESTED')
      console.log(this.origin)
      console.log(destination)
      if (!this.origin) {
        Notify.create('Haz click en el icono GPS para obtener tu posicion')
      } else {
        window.tt.services.calculateRoute({
          key: apikey,
          locations: [this.origin, destination],
          travelMode: type,
          instructionsType: 'text',
          language: language
        }).then(function (response) {
          console.log(' ROUTE ')
          console.log(response)
          const json = response.toGeoJson()
          const routeGroup = {}
          routeGroup.outlinelayer = {
            id: 'routeOutline',
            type: 'line',
            source: {
              type: 'geojson',
              data: json
            },
            paint: {
              'line-color': 'black',
              'line-width': 12
            }
          }
          routeGroup.linelayer = {
            id: 'routeline',
            type: 'line',
            source: {
              type: 'geojson',
              data: json
            },
            paint: {
              'line-color': 'yellow',
              'line-width': 8
            }
          }
          if (type === 'pedestrian') {
            // 'line-dasharray': [2, 1],
            routeGroup.linelayer.paint['line-dasharray'] = [2, 1]
          }
          const instructions = response.routes[0].guidance.instructions
          const mappedInstructions = instructions.map(element => {
            return {
              location: { lng: element.point.longitude, lat: element.point.latitude },
              message: element.message
            }
          })
          const popups = []
          mappedInstructions.forEach(function (inst) {
            const pop = new window.tt.Popup({
              closeButton: false,
              closeOnClick: false,
              className: 'route-popup'
            })
            pop.setLngLat(inst.location).setText(inst.message)
            popups.push(pop)
          })
          routeGroup.popups = popups
          _this.$emit('routeCreated', routeGroup)
        })
      }
    },
    updateOrigin (location) {
      this.origin = { lng: location.coords.longitude, lat: location.coords.latitude }
    },
    cancelRoute () {
      this.$emit('routeCancelled')
    },
    recalculateRoute () {},
    createMarker (event) {
      console.log('creating marker ', event)
      const iconElement = document.createElement('i')
      iconElement.className = 'material-icons marker-icon'
      iconElement.innerHTML = this.icons[event.category.value]

      const markerElement = document.createElement('div')
      markerElement.className = 'marker-circle'
      markerElement.appendChild(iconElement)

      const marker = new window.tt.Marker({
        element: markerElement
      }).setLngLat(event.location)

      marker.setPopup(new window.tt.Popup({
        className: 'popup-content',
        closeButton: false,
        closeOnClick: false,
        closeOnMove: false
      })
        .setLngLat(event.location)
        .setText(event.description))
      return marker
    },
    close: function () {
      // console.log('closing events FAB')
      this.$refs.fab.hide()
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
.route-popup .mapboxgl-popup-content {
  background: white;
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
