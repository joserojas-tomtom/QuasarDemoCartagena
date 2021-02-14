<template>
  <div id='map' ref="myRef"></div>
</template>
<script>
import { LocalStorage } from 'quasar'
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

    root.$on('remove-single-poi', this.removePoi)
    root.$on('single-poi-found', displayPOIInfo)

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
      minZoom: 12,
      style: '/assets/cartagenastyle.json'
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
        center: lnglat
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