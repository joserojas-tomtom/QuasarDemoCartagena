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
      show-if-above
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
    <q-drawer
        side="right"
        v-model="rightDrawerOpen"
        show-if-above
        bordered
        :width="300"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
      <PoiManager/>
      </q-drawer>
    <q-footer class="bg-grey-1">
    </q-footer>
  </q-layout>
</template>

<script>
import SearchBox from 'components/SearchBox.vue'
import PoiManager from 'components/PoiManager.vue'

export default {
  name: 'MainLayout',
  components: { SearchBox, PoiManager },
  data () {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: true
    }
  }
}

</script>
