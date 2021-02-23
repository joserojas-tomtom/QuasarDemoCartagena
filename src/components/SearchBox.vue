<template>
  <div ref="myRef">
  </div>
</template>

<script>
import { LocalStorage } from 'quasar'

export default {
  props: ['apikey', 'city'],
  name: 'SearchBox',
  methods: {
    handleResultsCleared () {
    }
  },
  mounted () {
    const root = this.$root
    const originalCity = LocalStorage.getItem('city')
    const apikey = LocalStorage.getItem('apikey')

    // Options for the fuzzySearch service
    const searchOptions = {
      key: apikey,
      language: originalCity.language,
      limit: 20,
      idxSet: 'POI,PAD,Addr',
      center: originalCity.location,
      countrySet: originalCity.country,
      boundingBox: originalCity.bounds.bounds,
      geoBias: originalCity.location
    }
    // Options for the autocomplete service
    const autocompleteOptions = {
      key: apikey,
      language: originalCity.language,
      center: originalCity.location,
      countrySet: originalCity.country,
      geoBias: originalCity.location,
      radius: 10000
    }

    const searchBoxOptions = {
      minNumberOfCharacters: 3,
      searchOptions: searchOptions,
      autocompleteOptions: autocompleteOptions,
      placeholder: originalCity.placeHolder,
      labels: {
        placeholder: originalCity.placeHolder,
        suggestions: {
          brand: 'Marca sugerida',
          category: 'Categoria sugerida'
        }
      }
    }

    const ttSearchBox = new window.tt.plugins.SearchBox(window.tt.services, searchBoxOptions)
    function changeCity (index) {
      const cities = LocalStorage.getItem('citiesDB')
      const city = cities[index]
      // console.log(city)
      const options = ttSearchBox.getOptions()
      options.placeholder = city.placeHolder
      options.labels.placeholder = city.placeHolder
      ttSearchBox.updateOptions(options)
      ttSearchBox.setValue('')
    }

    function isFuzzySearchResult (event) {
      return !('matches' in event.data.result)
    }

    function handleResultSelection (event) {
      console.log('Results selection')
      console.log(event)
      if (isFuzzySearchResult(event)) {
        // Display selected result on the map
        var result = event.data.result
        // console.log(event, result)
        try {
          LocalStorage.set('poi' + result.id, result)
        } catch (e) {
          console.log('error storing poi from searchbox' + e)
        }
        root.$emit('single-poi-found', result.id)
      } else {
        handleFuzzyCallForSegment(event)
      }
    }

    function handleFuzzyCallForSegment (event) {
      const query = ttSearchBox.getValue()
      const segmentType = event.data.result.type
      const apikey = LocalStorage.getItem('apikey')
      const fuzzySearchOption = { ...ttSearchBox.getOptions().searchOptions }
      const commonOptions = Object.assign({}, fuzzySearchOption, {
        key: apikey,
        query: query,
        limit: 15,
        typeahead: true
      })

      // let filter
      if (segmentType === 'category') {
        commonOptions.categorySet = event.data.result.id
        // filter = { categorySet: event.data.result.id }
      }
      if (segmentType === 'brand') {
        commonOptions.brandSet = event.data.result.value
        // filter = { brandSet: event.data.result.value }
      }
      // const options = Object.assign({}, commonOptions, filter)
      console.log(commonOptions)
      window.tt.services.fuzzySearch(commonOptions)
        .then(function (response) {
          if (response.results.length === 0) {
            ttSearchBox.setValue('')
            return
          }
          console.log('poiList')
          console.log(response.results)
          root.$emit('multiple-poi-found', response.results)
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    root.$on('center-update', function (center) {
      console.log('re-centering to ')
      console.log(center)
      const options = { ...ttSearchBox.getOptions() }
      options.searchOptions.center = center
      options.searchOptions.geoBias = center
      options.autocompleteOptions.center = center
      options.autocompleteOptions.geoBias = center
      ttSearchBox.updateOptions(options)
      console.log('New Options', options)
    })
    root.$on('change-city', changeCity)
    root.$on('clear-searchbox', function () {
      ttSearchBox.setValue('')
    })
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
    root.$off('center-update')
    root.$off('change-city')
    root.$off('clear-searchbox')
  }
}
</script>
<style>
