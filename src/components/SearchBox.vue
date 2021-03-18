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
    const originalCity = LocalStorage.getItem('currentCity')
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
      geoBias: originalCity.location,
      radius: 10000
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
    function changeCity (city) {
      // console.log(city)
      const options = ttSearchBox.getOptions()
      options.placeholder = city.placeHolder
      options.labels.placeholder = city.placeHolder

      options.autocompleteOptions.center = city.location
      options.autocompleteOptions.geoBias = city.location
      options.autocompleteOptions.countrySet = city.country
      options.autocompleteOptions.language = city.language

      options.searchOptions.center = city.location
      options.searchOptions.geoBias = city.location
      options.searchOptions.countrySet = city.country
      options.searchOptions.language = city.language
      options.searchOptions.boundingBox = city.bounds.bounds

      ttSearchBox.updateOptions(options)
      ttSearchBox.setValue('')
    }

    function isFuzzySearchResult (event) {
      return !('matches' in event.data.result)
    }

    function handleResultSelection (event) {
      console.log('Results selection')
      console.log(event)
      // lower the keyboard is needed
      hideKeyboard()

      if (isFuzzySearchResult(event)) {
        // Display selected result on the map
        const result = event.data.result
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
    root.$on('hidePoiPanel', function (x) {
      ttSearchBox.setValue('')
    })
    ttSearchBox.on('tomtom.searchbox.resultfocused', handleResultSelection)
    ttSearchBox.on('tomtom.searchbox.resultselected', handleResultSelection)
    ttSearchBox.on('tomtom.searchbox.resultscleared', this.handleResultsCleared)

    const dom = ttSearchBox.getSearchBoxHTML()
    // We are going to check for focus on the search box
    // so we close the poiManager view
    const inputElement = dom.getElementsByClassName('tt-search-box-input')[0]
    inputElement.addEventListener('focus', function (event) {
      root.$emit('search-got-focus')
    })

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
    root.$off('hidePoiPanel')
  }
}

function hideKeyboard () {
  // this set timeout needed for case when hideKeyborad
  // is called inside of 'onfocus' event handler
  setTimeout(function () {
    // creating temp field
    const field = document.createElement('input')
    field.setAttribute('type', 'text')
    // hiding temp field from peoples eyes
    // -webkit-user-modify is nessesary for Android 4.x
    field.setAttribute('style', 'position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;')
    document.body.appendChild(field)

    // adding onfocus event handler for out temp field
    field.onfocus = function () {
      // this timeout of 200ms is nessasary for Android 2.3.x
      setTimeout(function () {
        field.setAttribute('style', 'display:none;')
        setTimeout(function () {
          document.body.removeChild(field)
          document.body.focus()
        }, 14)
      }, 200)
    }
    // focusing it
    field.focus()
  }, 50)
}
</script>
<style>
