<template>
  <q-page class="flex flex-center">
    <Map />
  </q-page>
</template>

<script>
import Map from 'components/Map.vue'
import { LocalStorage } from 'quasar'

var CARTAGENA = {
  location: { lat: 10.39972, lng: -75.51444, zoom: 14 },
  country: 'CO',
  bounds: {
    bounds: [[-75.56566019581811, 10.329585886937679], [-75.4488171623405, 10.456136165887884]],
    padding: { top: 10, bottom: 25, left: 15, right: 5 },
    maxZoom: 17
  }
}
// LocalStorage.clear()
LocalStorage.set('city', CARTAGENA)
// LocalStorage.set('apikey', 'Vn26cA8knt2E8sl0WBEWvAgWGRUf59mm')
LocalStorage.set('apikey', 'y4OUatPPGQgS71stpTvqD6n2iyteZrYD')

export default {
  name: 'PageIndex',
  components: {
    Map
  }
}
</script>
