<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { LocalStorage } from 'quasar'
import store from './router/store.js'

var CARTAGENA = {
  name: 'Cartagena de Indias',
  location: { lat: 10.39972, lng: -75.51444, zoom: 14 },
  country: 'CO',
  language: 'es-419',
  placeHolder: 'Puya el burro ...',
  bounds: {
    bounds: [[-75.56566019581811, 10.329585886937679], [-75.4488171623405, 10.456136165887884]],
    padding: { top: 10, bottom: 25, left: 15, right: 5 },
    maxZoom: 17
  }
}

var FLORENCIA = {
  name: 'Florencia, Caqueta',
  location: { lng: -75.60762012493467, lat: 1.617655490715336, zoom: 14 },
  country: 'CO',
  language: 'es-419',
  placeHolder: 'Puya el burro ...',
  bounds: {
    bounds: [{ lng: -75.67201351594706, lat: 1.5625012158267566 },
      { lng: -75.53519402052457, lat: 1.673203149334796 }],
    padding: { top: 10, bottom: 25, left: 15, right: 5 },
    maxZoom: 17
  }
}

var VALLEDUPAR = {
  name: 'Valledupar',
  location: { lng: -73.26109732659464, lat: 10.465201008865336, zoom: 14 },
  country: 'CO',
  language: 'es-419',
  placeHolder: 'Puya el burro ...',
  bounds: {
    bounds: [{ lng: -73.31796317951263, lat: 10.417346117976763 },
      { lng: -73.19591339093603, lat: 10.514284772966533 }],
    padding: { top: 10, bottom: 25, left: 15, right: 5 },
    maxZoom: 17
  }
}

var AMSTERDAM = {
  name: 'Groot Amsterdam',
  location: { lng: 4.897198517895987, lat: 52.37203860827887, zoom: 14 },
  country: 'NL',
  language: 'NL-nl',
  placeHolder: 'kom op! zoek iets...',
  bounds: {
    bounds: [{ lng: 4.705895255004606, lat: 52.27224414103529 },
      { lng: 5.095699329292728, lat: 52.462838395097464 }],
    padding: { top: 10, bottom: 25, left: 15, right: 5 },
    maxZoom: 17
  }
}

const cities = [AMSTERDAM, CARTAGENA, VALLEDUPAR, FLORENCIA]

var index = LocalStorage.getItem('currentCity')
if (!index) {
  index = 0
}

export default {
  name: 'App',
  mounted () {
    LocalStorage.set('city', cities[index])
    LocalStorage.set('citiesDB', cities)
    store.actions.handleAuthChanged()
  }
}
</script>
