<template>
<div class="q-ma-md">
  <q-list bordered separator>
    <q-item v-for='(poi, index) in pois' :key='poi.id' class='q-my-xs' >
      <q-item-section>
        <q-item-label overline> {{ poi.name }} </q-item-label>
        <q-item-label caption> {{ poi.address }} </q-item-label>
        <q-separator color="green" />
        <div v-if='carouselvisible' class="q-pa-xs">
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide
              v-for='(url, index) in poi.photosUrl'
              :key='url'
              :value='index'
              :name="index"
              :img-src="url" />
          </q-carousel>
          <q-rating v-if='currentPriceRange > 0'
              v-model="currentPriceRange"
              size="1.3em"
              :max='4'
              color='red-4'
              icon='monetization_on'
            />
          <q-rating  v-if='currentRatingValue > 0'
              v-model="currentRatingValue"
              size="1.3em"
              :max='10'
              color='green-5'
              icon="thumb_up"
            />
        </div>
      </q-item-section>
          <q-item-section side top>
            <q-icon name="delete"
                    color='green'
                    @click='removePoi(index)'/>
          </q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script>
import { LocalStorage } from 'quasar'

async function getPOIDetails (id) {
  const apikey = LocalStorage.getItem('apikey')
  return await window.tt.services.poiDetails({
    key: apikey,
    id: id
  })
}

async function fetchPhoto (apikey, id) {
  const data = await window.tt.services.poiPhotos({
    key: apikey,
    id: id,
    width: 300
  })
  return data
}

export default {
  name: 'PoiManager',
  data () {
    return {
      slide: '0',
      autoplay: true,
      carouselvisible: false,
      currentRatingValue: 0,
      currentPriceRange: 2,
      pois: [
      ]
    }
  },
  methods: {
    processDetails (poi, details) {
      console.log('details')
      console.log(details)
      if (details.photos && details.photos.length > 0) {
        this.carouselvisible = true
        const apikey = LocalStorage.getItem('apikey')
        details.photos.forEach(function (element) {
          const photoURL = LocalStorage.getItem('photo' + element.id)
          if (photoURL) {
            console.log('Found photo url for ' + element.id)
            poi.photosUrl.push(photoURL)
          } else {
            fetchPhoto(apikey, element.id).then(function (url) {
              LocalStorage.set('photo' + element.id, url)
              poi.photosUrl.push(url)
              // console.log('adding ' + url)
            })
          }
        })
      }
      if (details.rating) {
        this.currentRatingValue = details.rating.value
      } else {
        this.currentRatingValue = -1
      }
    },
    removePoi (index) {
      const root = this.$root
      const removed = this.pois[index]
      this.pois.splice(index, 1)
      root.$emit('remove-single-poi', removed)
      if (this.pois.length === 0) {
        root.$emit('hidePoiPanel')
      }
    },
    renderSinglePoi (poi) {
      // console.log('renderSinglePOI')
      const root = this.$root
      // console.log(poi)
      this.pois = []
      const _this = this
      poi.photosUrl = []
      // remove the carrousel
      this.carouselvisible = false
      if (poi.details) {
        const details = LocalStorage.getItem('details' + poi.details.id)
        if (details && details != null) {
          console.log('Found details for ' + poi.details.id)
          this.processDetails(poi, details)
        } else {
          getPOIDetails(poi.details.id).then(function (response) {
            // console.log(response)
            if (response.result) {
              LocalStorage.set('details' + poi.details.id, response.result)
              _this.processDetails(poi, response.result)
            }
          })
        }
      }
      this.pois.push(poi)
      root.$emit('showPoiPanel')
    }
  },
  mounted () {
    const root = this.$root
    root.$on('render-single-poi', this.renderSinglePoi)
  },
  beforeDestroy () {
    const root = this.$root
    root.$off('render-single-poi')
  }
}
</script>
