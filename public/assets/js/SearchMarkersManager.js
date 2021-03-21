
function checkDependencyAvailability () {
  if (!window.tt) {
    throw new Error('tt is not available')
  }
  if (!window.SearchMarker) {
    throw new Error('Search Marker is not available')
  }
}

function addEntryPointsMapLayersIfNecessary (map, options) {
  if (options.entryPoints) {
    map.addSource('entry-points-connectors', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      }
    })

    map.addLayer({
      id: 'entry-points-connectors',
      type: 'line',
      source: 'entry-points-connectors',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': '#000',
        'line-width': 0.5,
        'line-dasharray': [10, 10]
      },
      filter: ['in', '$type', 'LineString']
    })
  }
}
/**
 * @class SearchMarkersManager
 * @param {Object} [map] Instance of a Tomtom map.
 * @param {Object} [options] Options to customize the rendered markers.
 * @param {String} [options.markerClassName] Optional - CSS class name to customize marker styles.
 * @param {String} [options.popupClassName] Optional - CSS class name to customize marker styles.
 * @param {Boolean=false} [options.entryPoints] Optional - A flag indicating if entry points should be supported.
 * @param {Function} [options.reverseGeocodeService] Optional - A service used to fetch an address of an entry point.
 *
 * This class draws markers on the map for a group of search results originating from the Tomtom Search service.
 * tt (tomtom object) needs to be available globally to use this Class.
 *
 * Make sure you also include:
 * - search-marker.js (included in our examples)
 * - search-markers.css (included in our examples)
 * - poi-icons.css (shipped with the SDK)
 */

function SearchMarkersManager (map, options) {
  checkDependencyAvailability()

  if (!map || typeof map !== 'object') {
    throw new Error('map is not valid')
  }

  this.map = map
  this._options = options || {}
  this._poiList = undefined
  this.markers = {}
  addEntryPointsMapLayersIfNecessary(map, this._options)
}

/**
 * @method draw
 * @param {Array} [poiList] List of Tomtom Search Service results
 */
SearchMarkersManager.prototype.draw = function (poiList) {
  if (!(poiList && Array.isArray(poiList))) {
    throw new Error('Poi list(poiList) must be an array')
  }
  this._poiList = poiList
  this.clear()

  this._poiList.forEach(function (poi) {
    const markerId = poi.id
    // console.log(poi)
    const number = poi.address.streetNumber || ''
    let address = poi.address.streetName + ' ' + number + ' '
    if (poi.address.municipalitySubdivision) {
      address += poi.address.municipalitySubdivision
    }
    const poiDetails = poi.dataSources && poi.dataSources.poiDetails ? poi.dataSources.poiDetails[0] : undefined
    const poiOpts = {
      id: poi.id,
      name: poi.name || address,
      phone: undefined,
      url: undefined,
      address: address,
      distance: poi.dist,
      classification: undefined,
      category: undefined,
      position: poi.position,
      entryPoints: poi.entryPoints,
      details: poiDetails
    }
    if (poi.poi) {
      poiOpts.name = poi.poi.name || poi.name
      poiOpts.phone = poi.poi.phone || ''
      poiOpts.url = poi.poi.url || ''
      poiOpts.classification = poi.poi.classifications[0].code || undefined
      poiOpts.category = poi.poi.categories[0] || undefined
    }

    const marker = new window.SearchMarker(poiOpts, this._options)
    marker.onClick(function (clickedMarker) {
      clickedMarker.togglePopup()
    })
    marker.addTo(this.map)
    this.markers[markerId] = marker
  }, this)
}

SearchMarkersManager.prototype.getMarkers = function () {
  return this.markers
}

SearchMarkersManager.prototype.getPOI = function (markerId) {
  return this.markers[markerId].getPOIData()
}

SearchMarkersManager.prototype.openPopup = function (markerId, reload) {
  // this ensures, that only one popup is opened at the time
  for (const marker in this.markers) {
    const current = this.markers[marker]
    if (current.getPopup().isOpen()) {
      current.togglePopup()
    }
  }
  if (reload) {
    this.markers[markerId].reloadPopup()
  } else {
    this.markers[markerId].togglePopup()
  }

}

SearchMarkersManager.prototype.jumpToMarker = function (markerId) {
  this.map.jumpTo({ center: this.markers[markerId].getLngLat(), zoom: 16 })
}

SearchMarkersManager.prototype.getMarkersBounds = function () {
  const bounds = new window.tt.LngLatBounds()

  for (const marker in this.markers) {
    bounds.extend(this.markers[marker].getLngLat())
  }

  return bounds
}
SearchMarkersManager.prototype.removeAll = function () {
  for (const markerId in this.markers) {
    const marker = this.markers[markerId]
    marker.remove()
    delete this.markers[markerId]
  }
}

SearchMarkersManager.prototype.remove = function (poi) {
  for (const markerId in this.markers) {
    if (markerId === poi.id) {
      const marker = this.markers[markerId]
      marker.remove()
      delete this.markers[markerId]
      return
    }
  }
}

SearchMarkersManager.prototype.clear = function () {
  for (const markerId in this.markers) {
    const marker = this.markers[markerId]
    marker.remove()
  }

  this.markers = {}
  this._lastClickedMarker = null
}

window.SearchMarkersManager = window.SearchMarkersManager || SearchMarkersManager
