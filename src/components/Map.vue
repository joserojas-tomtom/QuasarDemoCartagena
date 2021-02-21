<template>
  <div id='map' ref="myRef"></div>
</template>
<script>
import { LocalStorage } from 'quasar'
import getDefaultStyle from 'assets/cartagenastyle.js'

var searchMarkersManager

export default {
  name: 'Map',
  methods: {
    removePoi (poi) {
      searchMarkersManager.remove (poi)
    }
  },
  mounted () {
    const mapRef = this.$refs.myRef
    const root = this.$root
    const originalCity = LocalStorage.getItem('city')
    const apikey = LocalStorage.getItem('apikey')
    const tt = window.tt
    const myLocationMarker = new tt.Marker()

    root.$on('remove-single-poi', this.removePoi)
    root.$on('single-poi-found', displayPOIInfo)
    root.$on('change-city', changeCity)
    root.$on('show-favorite', displayPOIInfo)
    root.$on('location-update', function (location) {
      // console.log(location)
      const coords = { lng: location.coords.longitude, lat: location.coords.latitude }
      map.setCenter(coords)
      myLocationMarker.setLngLat(coords).addTo(map)
    })

    function changeCity (index) {
      const cities = LocalStorage.getItem('citiesDB')
      const city = cities[index]
      // console.log('changing to ' + city.name)
      map.setMaxBounds(null)
      map.jumpTo({
        center: city.location,
        zoom: city.location.zoom
      })
      saveCookie()
      searchMarkersManager.clear()
      map.setMaxBounds(city.bounds.bounds)
    }

    function saveCookie () {
      const center = map.getCenter()
      const toSave = { lat: center.lat, lng: center.lng, zoom: map.getZoom() }
      LocalStorage.set('lastlocation', JSON.stringify(toSave))
      root.$emit('center-update', map.getCenter())
    }

    // Get the saved location from the cookie
    var savedLocation = LocalStorage.getItem('lastlocation')
    if (savedLocation) {
      // console.log('='+savedLocation)
      savedLocation = JSON.parse(savedLocation)
      if (!savedLocation.zoom) {
        savedLocation.zoom = 14
      }
      if (!savedLocation.bounds) {
        savedLocation.bounds = originalCity.bounds
      }
    } else {
      savedLocation = originalCity.location
    }

    var map = tt.map({
      key: apikey,
      container: 'map',
      center: savedLocation,
      zoom: savedLocation.zoom,
      maxZoom: 18,
      minZoom: 11,
      style: getDefaultStyle() // 'assets/cartagenastyle.json'
    })

    function _displayPOI (poi) {
      moveMap(poi.position)
      // console.log(poi)
      // var searchMarker = new window.SearchMarker(firstResult)
      // searchMarker.addTo(map)
      searchMarkersManager.clear()
      searchMarkersManager.draw([poi])
      searchMarkersManager.openPopup(poi.id)
      root.$emit('render-single-poi', searchMarkersManager.getPOI(poi.id))
      // console.log(firstResult)
    }

    /* eslint func-call-spacing: [0, { "allowNewlines": false }] */
    function displayPOIInfo (id) {
      const savedpoi = LocalStorage.getItem('poi' + id)
      if (savedpoi) {
        // console.log('Found poi : ' + id)
        _displayPOI(savedpoi)
        return
      }
      tt.services.placeById({
        key: apikey,
        entityId: id
      }).then (function (response) {
        // console.log(response)
        var firstResult = response.results[0]
        if (firstResult) {
          try {
            LocalStorage.set('poi' + id, firstResult)
          } catch (e) {
            // console.log('error storing ' + e)
          }
          _displayPOI(firstResult)
        }
      })
    }

    // map.addControl(new tt.FullscreenControl());
    map.addControl(new window.tt.NavigationControl())
    map.on('load', function () {
      if (!searchMarkersManager) {
        searchMarkersManager = new window.SearchMarkersManager(map)
      }

      saveCookie()
      // console.log(originalCity)
      map.setMaxBounds(originalCity.bounds.bounds)
    })
    map.on('dragend', saveCookie)
    map.on('click', function (event) {
      // console.log(event.lngLat)
      const feature = map.queryRenderedFeatures(event.point)[0]
      if (feature && feature.layer.id === 'POI' && feature.properties.id) {
        // console.log(feature.properties)
        displayPOIInfo(feature.properties.id)
      }
    })

    function moveMap (lnglat) {
      map.flyTo({
        center: lnglat,
        zoom: 17,
        offset: [0, -20]
      })
    }

    return {
      mapRef
    }
  }
}
</script>
<style>
#map {
  height: 100vh;
  width: 100vw;
}
</style>
