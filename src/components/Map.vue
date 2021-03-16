<template>
<div>
  <div id='map' ref="myRef">
  </div>
      <Events v-if='currentCity'
        ref="eventsMenu"
        @addMarkers='addMarkers'
        @removeMarkers='removeMarkers'
        :city='currentCity.id'/>

</div>
</template>
<script>
import { LocalStorage } from 'quasar'
import getDefaultStyle from 'assets/cartagenastyle.js'
import Events from 'components/Events.vue'

var searchMarkersManager
var map
var longClickTimerId
var mapAnimation

export default {
  name: 'Map',
  components: { Events },
  methods: {
    rotateCamera (timestamp) {
      const rotationDegree = timestamp / 100 % 360
      map.rotateTo(rotationDegree, { duration: 0 })
      mapAnimation = requestAnimationFrame(this.rotateCamera)
    },
    addMarkers (array) {
      console.log('adding markers ', array)
      array.forEach(function (marker) {
        marker.addTo(map)
      })
    },
    removeMarkers (array) {
      console.log('removing markers ', array)
      array.forEach(function (marker) {
        marker.remove()
      })
    },
    removePoi (poi) {
      searchMarkersManager.remove (poi)
      cancelAnimationFrame(mapAnimation)
    },
    moveMap (lnglat) {
      const z = map.getZoom()
      map.flyTo({
        center: lnglat,
        zoom: z <= 17 ? 17 : z
        // offset: [0, -20]
      })
    },
    changeCurrentPOI (changedPOI) {
      // console.log('map received changed poi to :', changedPOI)
      const id = changedPOI.id
      searchMarkersManager.openPopup(id, changedPOI.reload)
      const poi = searchMarkersManager.getPOI(id)
      this.moveMap(poi.position)
      map.resize()
    },
    changeStyle () {
      const styleIndex = LocalStorage.getItem('styleIndex')
      map.setStyle(getDefaultStyle(styleIndex))
    }
  },
  beforeDestroy () {
    const root = this.$root
    root.$off('remove-single-poi')
    root.$off('single-poi-found')
    root.$off('multiple-poi-found')
    root.$off('change-city')
    root.$off('show-favorite')
    root.$off('location-update')
    root.$off('poiChanged')
    root.$off('add-personal-poi')
    root.$off('change-style')
  },
  mounted () {
    const _this = this
    const mapRef = this.$refs.myRef
    const root = this.$root
    const originalCity = LocalStorage.getItem('currentCity')
    this.currentCity = originalCity

    const apikey = LocalStorage.getItem('apikey')
    const tt = window.tt

    const myLocationMarker = new tt.Marker()

    root.$on('add-personal-poi', addPersonalPOI)
    root.$on('remove-single-poi', this.removePoi)
    root.$on('single-poi-found', displayPOIInfo)
    root.$on('multiple-poi-found', displayMultiplePOI)
    root.$on('change-city', changeCity)
    root.$on('show-favorite', displayPOIInfo)
    root.$on('poiChanged', this.changeCurrentPOI)
    root.$on('change-style', this.changeStyle)
    root.$on('location-update', function (location) {
      // console.log(location)
      const coords = { lng: location.coords.longitude, lat: location.coords.latitude }
      map.setCenter(coords)
      myLocationMarker.setLngLat(coords).addTo(map)
    })

    function addPersonalPOI (lngLat) {
      tt.services.reverseGeocode({
        key: apikey,
        position: lngLat
      }).then(function (response) {
        // console.log(response)
        const firstAddress = response.addresses[0]
        // add temporary marker
        const poi = {
          id: 'personal' + (new Date().getTime()),
          name: 'Sin nombre',
          position: firstAddress.position,
          address: firstAddress.address
        }
        _displayPOI(poi)
      })
    }

    function changeCity (city) {
      // console.log('changing to ' + city.name)
      // console.log(city)
      map.setMaxBounds(null)
      map.jumpTo({
        center: city.location,
        zoom: city.location.zoom
      })
      saveCookie()
      searchMarkersManager.clear()
      map.setMaxBounds(city.bounds.bounds)
      this.currentCity = city
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

    let styleIndex = LocalStorage.getItem('styleIndex')
    if (styleIndex == null) {
      styleIndex = 0
    }

    map = tt.map({
      key: apikey,
      container: 'map',
      center: savedLocation,
      zoom: savedLocation.zoom,
      maxZoom: 18,
      minZoom: 11,
      style: getDefaultStyle(styleIndex) // 'assets/cartagenastyle.json'
    })

    function moveMap (lnglat) {
      const z = map.getZoom()
      map.flyTo({
        center: lnglat,
        pitch: 60,
        zoom: z <= 17 ? 17 : z,
        around: lnglat
        // offset: [0, -20]
      })
      cancelAnimationFrame(mapAnimation)
      mapAnimation = requestAnimationFrame(_this.rotateCamera)
    }

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

    function displayMultiplePOI (poiList) {
      _this.$refs.eventsMenu.close()
      // save them
      poiList.forEach(function (element) {
        try {
          LocalStorage.set('poi' + element.id, element)
        } catch (e) {
          console.log('error storing poi from searchbox' + e)
        }
      })

      searchMarkersManager.clear()
      searchMarkersManager.draw(poiList)

      const poiDataList = poiList.map(function (element) {
        return searchMarkersManager.getPOI(element.id)
      })
      // searchMarkersManager.openMultiplePopup(poiList)
      root.$emit('render-multiple-poi', poiDataList)
      fitToViewport(poiList)
      searchMarkersManager.openPopup(poiList[0].id)
    }

    function getBounds (data) {
      var btmRight
      var topLeft
      if (data.viewport) {
        btmRight = [data.viewport.btmRightPoint.lng, data.viewport.btmRightPoint.lat]
        topLeft = [data.viewport.topLeftPoint.lng, data.viewport.topLeftPoint.lat]
      }
      return [btmRight, topLeft]
    }

    function fitToViewport (markerData) {
      if (!markerData || (markerData instanceof Array && !markerData.length)) {
        return
      }
      var bounds = new tt.LngLatBounds()
      if (markerData instanceof Array) {
        markerData.forEach(function (marker) {
          bounds.extend(getBounds(marker))
        })
      } else {
        bounds.extend(getBounds(markerData))
      }
      map.fitBounds(bounds, { padding: 100, linear: true })
    }

    /* eslint func-call-spacing: [0, { "allowNewlines": false }] */
    function displayPOIInfo (id) {
      map.resize()
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

    function cancelLongClickTimer () {
      if (longClickTimerId) {
        clearTimeout(longClickTimerId)
      }
      // console.log('Timer Cancelled')
    }

    // map.addControl(new tt.FullscreenControl());
    map.addControl(new window.tt.NavigationControl())
    map.on('load', function () {
      searchMarkersManager = new window.SearchMarkersManager(map)

      saveCookie()
      // console.log(originalCity)
      map.setMaxBounds(originalCity.bounds.bounds)
    })
    map.on('dragend', saveCookie)

    map.on('touchstart', function (event) {
      // const _this = this
      cancelLongClickTimer()
      longClickTimerId = setTimeout(function () {
        root.$emit('long-click-map', event.lngLat)
      }, 1000, event.lngLat)
    })

    map.on('touchend', function (event) { cancelLongClickTimer() })
    map.on('touchmove', function (event) { cancelLongClickTimer() })

    map.on('dblclick', function (event) {
      console.log('dbl click')
    })
    map.on('click', function (event) {
      // console.log(event.lngLat)
      cancelAnimationFrame(mapAnimation)
      root.$emit('clear-searchbox')
      const feature = map.queryRenderedFeatures(event.point)[0]
      console.log('clicking map ', feature)
      if (feature && feature.layer.id === 'POI' && feature.properties.id) {
        _this.$refs.eventsMenu.close()
        displayPOIInfo(feature.properties.id)
        // event.stopImmediatePropagation()
      }
    })

    return {
      mapRef
    }
  },
  data () {
    return {
      currentCity: undefined
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
