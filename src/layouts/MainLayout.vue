<template>
  <q-layout view="lHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <SearchBox class="q-py-xs col-10"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        > MUNICIPIOS Y REGIONES
        </q-item-label>
        <q-item-label class='q-pa-md shadow-2' clickable v-for='(city, index) in cities' :key='city.name' @click="changeCity(index)">
          <span class="q-pa-lg text-dark text-weight-medium"> {{city.name}}</span>
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-drawer
        side="right"
        v-model='rightDrawerOpen'
        bordered
        :width="400"
        :breakpoint="400"
        content-class="bg-grey-3"
      >
      </q-drawer>
    <q-footer  class="bg-grey-1" style='width:350px'>
      <PoiManager v-model='poiPanel'/>
    </q-footer>
  </q-layout>
</template>

<script>
import SearchBox from 'components/SearchBox.vue'
import PoiManager from 'components/PoiManager.vue'
import { LocalStorage } from 'quasar'

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
  location: { lng: -75.60762012493467, lat: 1.617655490715336 },
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
  location: { lng: -73.26109732659464, lat: 10.465201008865336 },
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

var index = LocalStorage.getItem('currentCity')
if (!index) {
  index = 0
}
// LocalStorage.clear()

export default {
  name: 'MainLayout',
  components: { SearchBox, PoiManager },
  mounted () {
    LocalStorage.set('city', this.cities[index])
    const root = this.$root
    root.$on('hidePoiPanel', this.hidePoiPanel)
    root.$on('showPoiPanel', this.showPoiPanel)
    root.$on('change-city', this.hidePoiPanel)
  },
  beforeDestroy () {
    const root = this.$root
    root.$off('hidePoiPanel')
    root.$off('showPoiPanel')
    root.$off('change-city')
  },
  methods: {
    hidePoiPanel () {
      this.poiPanel = false
    },
    showPoiPanel () {
      this.poiPanel = true
    },
    changeCity (index) {
      console.log('click city ' + index)
      LocalStorage.set('currentCity', index)
      const root = this.$root
      root.$emit('change-city', this.cities[index])
      this.leftDrawerOpen = false
      this.poiPanel = false
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      poiPanel: true,
      rightDrawerOpen: false,
      cities: [AMSTERDAM, CARTAGENA, VALLEDUPAR, FLORENCIA]
    }
  }
}

</script>
