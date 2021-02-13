<template>
  <div ref="myRef">
  </div>
</template>

<script>
import { LocalStorage } from 'quasar'

const originalCity = LocalStorage.getItem('city')
const apikey = LocalStorage.getItem('apikey')

// Options for the fuzzySearch service
const searchOptions = {
  key: apikey,
  language: 'es-419',
  limit: 20,
  idxSet: 'POI',
  center: originalCity.location,
  countrySet: originalCity.country
  // boundingBox: originalCity.bounds.bounds
}
// Options for the autocomplete service
const autocompleteOptions = {
  key: apikey,
  language: 'es-419',
  center: originalCity.location,
  countrySet: originalCity.country
}

const searchBoxOptions = {
  minNumberOfCharacters: 3,
  searchOptions: searchOptions,
  autocompleteOptions: autocompleteOptions,
  placeholder: 'Aja.. que estas buscando?',
  labels: {
    suggestions: {
      brand: 'Marca sugerida',
      category: 'Categoria sugerida',
      placeholder: 'Aja.. que estas buscando?'
    }
  }
}

function centerUpdate (center) {
  autocompleteOptions.center = center
  searchOptions.center = center
}

export default {
  props: ['apikey', 'city'],
  name: 'SearchBox',
  mounted () {
    const root = this.$root
    root.$on('center-update', centerUpdate)
    const ttSearchBox = new window.tt.plugins.SearchBox(window.tt.services, searchBoxOptions)
    const dom = ttSearchBox.getSearchBoxHTML()
    const mapRef = this.$refs.myRef
    mapRef.appendChild(dom)
    return {
      dom
    }
  },
  beforeDestroy () {
    const root = this.$root
    root.$on('center-update')
  }
}
</script>
<style>
