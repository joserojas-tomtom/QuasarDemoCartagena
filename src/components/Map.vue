<template>
  <div id='map' ref="myRef"></div>
</template>
<script>
import { LocalStorage } from 'quasar'
export default {
  name: 'Map',
  mounted () {
    const mapRef = this.$refs.myRef
    const root = this.$root
    const originalCity = LocalStorage.getItem('city')
    const apikey = LocalStorage.getItem('apikey')
    const tt = window.tt
    var searchMarkersManager

    function saveCookie () {
      const center = map.getCenter()
      const toSave = { lat: center.lat, lng: center.lng, zoom: map.getZoom() }
      LocalStorage.set('lastlocation', JSON.stringify(toSave))
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

    /* eslint func-call-spacing: [0, { "allowNewlines": false }] */
    function displayPOIInfo (id) {
      tt.services.placeById({
        key: apikey,
        entityId: id
      }).then (function (response) {
        // console.log(response)
        var firstResult = response.results[0]
        if (firstResult) {
          moveMap(firstResult.position)
          // Send the object to the Footer
          root.$emit('render-single-poi', firstResult)
          if (!searchMarkersManager) {
            searchMarkersManager = new window.SearchMarkersManager(map)
          }
          // var searchMarker = new window.SearchMarker(firstResult)
          // searchMarker.addTo(map)
          searchMarkersManager.clear()
          searchMarkersManager.draw([firstResult])
          searchMarkersManager.openPopup(firstResult.id)
        }
      })
    }

    // map.addControl(new tt.FullscreenControl());
    map.addControl(new window.tt.NavigationControl())
    map.on('load', function () {
      saveCookie()
      console.log(originalCity)
      map.setMaxBounds(originalCity.bounds.bounds)
    })
    map.on('dragend', saveCookie)
    map.on('click', function (event) {
      // console.log(event.lngLat)
      const feature = map.queryRenderedFeatures(event.point)[0]
      if (feature && feature.layer.id === 'POI' && feature.properties.id) {
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
