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
        <Location class='q-py-xs col-1'/>
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
        <q-item-label class='q-pa-md shadow-2' clickable v-for='(city, index) in cities' :key='city' @click="changeCity(index)">
          <span class="q-pa-lg text-dark text-weight-medium"> {{city}}</span>
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
    <q-footer  class="bg-grey-1" style='width:400px'>
      <PoiManager v-model='poiPanel'/>
    </q-footer>
  </q-layout>
</template>

<script>
import SearchBox from 'components/SearchBox.vue'
import PoiManager from 'components/PoiManager.vue'
import Location from 'components/Location.vue'
import { LocalStorage } from 'quasar'

// LocalStorage.clear()

export default {
  name: 'MainLayout',
  components: { SearchBox, PoiManager, Location },
  mounted () {
    const root = this.$root
    root.$on('hidePoiPanel', this.hidePoiPanel)
    root.$on('showPoiPanel', this.showPoiPanel)
    root.$on('change-city', this.hidePoiPanel)
    root.$on('location-update', function (location) {
      console.log(location)
    })
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
      root.$emit('change-city', index)
      this.leftDrawerOpen = false
      this.poiPanel = false
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      poiPanel: true,
      rightDrawerOpen: false,
      cities: ['AMSTERDAM', 'CARTAGENA', 'VALLEDUPAR', 'FLORENCIA']
    }
  }
}

</script>
