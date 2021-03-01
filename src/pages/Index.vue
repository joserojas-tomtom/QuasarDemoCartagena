<template>
  <q-page class="flex flex-center">
    <Map />
  </q-page>
</template>

<script>
import Map from 'components/Map.vue'
import { LocalStorage } from 'quasar'

// LocalStorage.set('apikey', 'Vn26cA8knt2E8sl0WBEWvAgWGRUf59mm')
// LocalStorage.set('apikey', 'y4OUatPPGQgS71stpTvqD6n2iyteZrYD')
LocalStorage.set('apikey', 'jsRs4JdL9YyeSryAvq0AFDTi2cZWjoeG')

export default {
  name: 'PageIndex',
  components: {
    Map
  }
}
</script>
