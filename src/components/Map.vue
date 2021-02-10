<template>
  <div id='map' ref="myRef"></div>
</template>

<script>
import { LocalStorage } from 'quasar'
export default {
  name: 'Map',
  mounted () {
    const mapRef = this.$refs.myRef

    const tt = window.tt

    function saveCookie () {
      const center = map.getCenter()
      const toSave = { lat: center.lat, lng: center.lng, zoom: map.getZoom() }
      LocalStorage.set('lastlocation', JSON.stringify(toSave))
    }

    const originalCity = LocalStorage.getItem('city')
    const apikey = LocalStorage.getItem('apikey')

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
    // map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl())
    map.on('load', function () {
      saveCookie()
      console.log(originalCity)
      map.setMaxBounds(originalCity.bounds.bounds)
    })
    map.on('dragend', saveCookie)
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
