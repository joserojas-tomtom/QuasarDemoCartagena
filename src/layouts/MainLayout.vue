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
        <q-item-label>
          <span class="q-pa-xl text-dark text-weight-medium"> Cartagena</span>
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

export default {
  name: 'MainLayout',
  components: { SearchBox, PoiManager },
  mounted () {
    const root = this.$root
    root.$on('hidePoiPanel', this.hidePoiPanel)
    root.$on('showPoiPanel', this.showPoiPanel)
  },
  beforeDestroy () {
    const root = this.$root
    root.$off('hidePoiPanel')
    root.$off('showPoiPanel')
  },
  methods: {
    hidePoiPanel () {
      this.poiPanel = false
    },
    showPoiPanel () {
      this.poiPanel = true
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      poiPanel: true,
      rightDrawerOpen: false
    }
  }
}

</script>
