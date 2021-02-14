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
  language: originalCity.language,
  limit: 20,
  idxSet: 'POI',
  center: originalCity.location,
  countrySet: originalCity.country
  // boundingBox: originalCity.bounds.bounds
}
// Options for the autocomplete service
const autocompleteOptions = {
  key: apikey,
  language: originalCity.language,
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

function isFuzzySearchResult (event) {
  return !('matches' in event.data.result)
}

export default {
  props: ['apikey', 'city'],
  name: 'SearchBox',
  methods: {
    handleResultsCleared () {
    }
  },
  mounted () {
    const root = this.$root
    function handleResultSelection (event) {
      if (isFuzzySearchResult(event)) {
        // Display selected result on the map
        var result = event.data.result
        console.log(event, result)
        try {
          LocalStorage.set('poi' + result.id, result)
        } catch (e) {
          console.log('error storing poi from searchbox' + e)
        }
        root.$emit('single-poi-found', result.id)
      }
    }
    root.$on('center-update', centerUpdate)
    const ttSearchBox = new window.tt.plugins.SearchBox(window.tt.services, searchBoxOptions)
    ttSearchBox.on('tomtom.searchbox.resultfocused', handleResultSelection)
    ttSearchBox.on('tomtom.searchbox.resultselected', handleResultSelection)
    ttSearchBox.on('tomtom.searchbox.resultscleared', this.handleResultsCleared)
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
