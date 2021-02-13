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
        >
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-drawer v-if='$q.platform.is.desktop'
        side="right"
        v-model='poiPanel'
        bordered
        :width="500"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
      <PoiManager/>
      </q-drawer>
    <q-footer  v-if='poiPanel && $q.platform.is.mobile' class="bg-grey-1">
      <PoiManager/>
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
    hidePoPanel () {
      this.poPanel = false
    },
    showPoiPanel () {
      this.poiPanel = true
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      poiPanel: false
    }
  }
}

</script>
