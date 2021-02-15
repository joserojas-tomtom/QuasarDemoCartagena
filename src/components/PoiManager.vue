<template>
  <div v-if='visible' style='height: 300px'>
  <q-scroll-area ref="scrollArea"
      style="height: inherit; max-width: 450px;"
      :bar-style="{  width: '0px', opacity: 0 }">
    <q-item v-for='(poi, index) in pois' :key='poi.id' class='q-my-xs' id='scrollcontent'>
      <q-item-section side top>
        <q-icon name="cancel" size='1.5em'
                    color='grey-5'
                    @click='removePoi(index)'
                    class='q-mb-lg'/>
        <q-icon name="share" size='1.5em'
                    color='darkgrey'
                    class='q-my-xs'/>
        <q-icon name="favorite" size='1.5em'
                    color='darkgrey'
                    class='q-my-xs'/>
       <q-icon name="camera" size='1.5em'
                    color='darkgrey'
                    class='q-my-xs'/>
      </q-item-section>
      <q-item-section>
        <q-item-label overline> {{ poi.name }} </q-item-label>
        <q-item-label class='q-my-xs' caption> {{ poi.address }} </q-item-label>
        <q-separator color='yellow'/>
        <q-item-label class='q-pb-xs' caption> {{ poi.description }} </q-item-label>
        <q-item-label caption v-if='poi.phone' class='q-pb-xs' @click='call(poi.phone)'>
          <q-icon name="phone" size='1.5em'
                    color='darkgrey'
                    class='q-mb-xs'/>
          <span> {{ poi.phone }}</span>
        </q-item-label>
        <q-item-label caption v-if='poi.url' class='q-pb-xs' @click='web(poi.url)'>
          <q-icon name="computer" size='1.5em'
                    color='darkgrey'
                    class='q-mb-xs'/>
          <span> {{ poi.url }}</span>
        </q-item-label>
        <q-item-label>
        <q-rating v-if='currentPriceRange >= 0'
              v-model="currentPriceRange"
              size="1.3em"
              :max='4'
              color='red-4'
              icon='monetization_on'
            />
          <q-rating v-if='currentRatingValue >= 0'
              v-model="currentRatingValue"
              size="1.3em"
              :max='5'
              color="yellow"
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
            />
        </q-item-label>
        <div class="q-pa-xs">
          <q-carousel
            animated
            v-model="slide"
            infinite
            :autoplay="autoplay"
            arrows
            width="400px"
            height="250px"
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
        </div>
        <div v-for='(line, index) in poi.reviews' :key='index'>
        <q-item-label
                      >
                      <span class='text-dark text-weight-medium'> {{ line.date }} :</span>
                      <span class='text-grey-8'> {{ line.text }} </span>
        </q-item-label>
        </div>
        <q-separator class='q-my-xs' color="yellow" />

      </q-item-section>
    </q-item>
  </q-scroll-area>
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
    width: 500,
    height: 300
  })
  return data
}

export default {
  name: 'PoiManager',
  data () {
    return {
      visible: false,
      slide: '0',
      autoplay: 2000,
      currentRatingValue: -1,
      currentPriceRange: -1,
      pois: [
      ]
    }
  },
  methods: {
    onLoad (index, done) {
      done()
    },
    processDetails (poi, details) {
      console.log('details')
      console.log(details)
      if (details.photos && details.photos.length > 0) {
        poi.photosUrl = []
        const apikey = LocalStorage.getItem('apikey')
        details.photos.forEach(function (element) {
          const photoURL = LocalStorage.getItem('photo' + element.id)
          if (photoURL) {
            // console.log('Found photo url for ' + element.id + '==' + photoURL)
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
        this.currentRatingValue = details.rating.value / 2
      }
      if (details.priceRange) {
        this.currentPriceRange = details.priceRange.value
      }
      if (details.reviews) {
        poi.reviews = details.reviews
      }
      if (details.description) {
        poi.description = details.description
      }
      if (details.socialMedia) {
        poi.socialMedia = details.socialMedia
      }
    },
    call (number) {
      window.open('tel:' + number)
    },
    web (url) {
      if (!url.startsWith('http')) {
        url = 'http://' + url
      }
      window.open(url)
    },
    removeAllPoi () {
      const root = this.$root
      this.pois.forEach(function (element) {
        root.$emit('remove-single-poi', element)
      })
      this.pois = []
      root.$emit('hidePoiPanel')
      this.visible = false
    },
    removePoi (index) {
      const root = this.$root
      const removed = this.pois[index]
      this.pois.splice(index, 1)
      root.$emit('remove-single-poi', removed)
      if (this.pois.length === 0) {
        root.$emit('hidePoiPanel')
        this.visible = false
      }
    },
    renderSinglePoi (poi) {
      if (this.visible) {
        this.$refs.scrollArea.setScrollPosition(0)
      }
      console.log('renderSinglePOI')
      const root = this.$root
      // console.log(poi)
      this.pois = []
      const _this = this
      poi.photosUrl = ['/assets/no-image.png']
      // remove the carrousel
      this.currentRatingValue = -1
      this.currentPriceRange = -1
      if (poi.details) {
        const details = LocalStorage.getItem('details' + poi.details.id)
        if (details && details != null) {
          // console.log('Found details for ' + poi.details.id)
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
      this.visible = true
    }
  },
  mounted () {
    const root = this.$root
    root.$on('render-single-poi', this.renderSinglePoi)
    root.$on('change-city', function () {
      console.log('***')
      this.visible = false
    })
  },
  beforeDestroy () {
    const root = this.$root
    root.$off('render-single-poi')
    root.$off('change-city')
  }
}
</script>
