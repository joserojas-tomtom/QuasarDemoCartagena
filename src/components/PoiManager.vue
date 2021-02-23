<template>
  <div v-if='visible' style='height: 300px'>
    <q-carousel
      v-model='poiId'
      swipeable
      navigation
      padding
      height="300px"
      class="rounded-borders q-pb-xl bg-light-blue-1">
      <q-carousel-slide
        v-for='(poi, index) in pois'
        :key='poi.id'
        :name='poi.id'
        class=" q-pa-none q-ma-none">
          <q-item style='heigh:300px'>
          <q-item-section side top>
            <q-icon name="cancel" size='1.5em'
                        color='grey-5'
                        @click='removePoi(index)'
                        class='q-mb-lg'/>
            <q-icon name="share" size='1.5em'
                        color='darkgrey'
                        class='q-mb-lg'/>
            <q-icon name="favorite" size='1.5em'
                        :color='poi.favoriteColor'
                        @click='toggleFavorite(index)'
                        class='q-mb-lg'/>
          </q-item-section>
          <q-item-section top>
            <q-item-label overline>
              {{ poi.name }}
            </q-item-label>
            <q-item-label class='q-my-xs' caption>
                <q-badge>{{ poi.category }}</q-badge>
                {{ poi.address }}
            </q-item-label>
            <q-separator color='yellow'/>
            <!--
            <q-scroll-area
              class='bg-cyan'
              height='300px'
              :bar-style="{  width: '0px', opacity: 0 }"> -->
               <div>
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
            <q-input rounded
              standout bottom-slots
              v-model="poi.personalNotes"
              ref='personalNotesInput'
              @blur="updatePersonalNotes(index)"
              clearable
              counter maxlength="100" :dense="true">
              <template v-slot:before>
                <q-icon name="comment" />
              </template>
              <!-- <template v-slot:append>
                <q-btn round dense flat icon="add" />
              </template> -->
            </q-input>
            <q-item-label>
            <q-rating v-if='poi.currentPriceRange >= 0'
                  v-model="poi.currentPriceRange"
                  size="1.3em"
                  :max='4'
                  color='red-4'
                  icon='monetization_on'
                />
            <q-rating v-if='poi.currentRatingValue >= 0'
                  v-model="poi.currentRatingValue"
                  size="1.3em"
                  :max='5'
                  color="yellow"
                  icon="star_border"
                  icon-selected="star"
                  icon-half="star_half"
                />
            </q-item-label>
              <q-carousel
                v-if='poi.hasPhotos'
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
              <q-img v-else src='no-image.png' contain height="250px"/>

              </div>
              <div v-for='(line, index) in poi.reviews' :key='index'>
            <q-item-label
                          >
                          <span class='text-dark text-weight-medium'> {{ line.date }} :</span>
                          <span class='text-grey-8'> {{ line.text }} </span>
            </q-item-label>
              </div>
              <q-separator class='q-my-xs' color="yellow" />
            <!-- </q-scroll-area> -->
          </q-item-section>
          </q-item>

      </q-carousel-slide>

      </q-carousel>

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
      poiId: '',
      autoplay: 2000,
      pois: [
      ]
    }
  },
  methods: {
    onLoad (index, done) {
      done()
    },
    updatePersonalNotes (index) {
      const value = this.$refs.personalNotesInput[0].value
      const poi = this.pois[index]
      poi.personalNotes = value
      // console.log('setting ' + value + 'for ' + poi.id)
      try {
        LocalStorage.set('notes' + poi.id, value)
      } catch (e) {
        console.log(e)
      }
    },
    fetchPersonalNotes (id) {
      const notes = LocalStorage.getItem('notes' + id)
      // console.log('notes from ' + id)
      // console.log(notes)
      return notes || ''
    },
    processDetails (poi, details) {
      // console.log('details')
      // console.log(details)
      if (details && details.photos && details.photos.length > 0) {
        poi.hasPhotos = true
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
      // console.log('photos? ' + this.hasPhotos)

      if (details.rating) {
        poi.currentRatingValue = details.rating.value / 2
      }
      if (details.priceRange) {
        poi.currentPriceRange = details.priceRange.value
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
    toggleFavorite (index) {
      const poi = this.pois[index]
      const favorites = LocalStorage.getItem('favorites') || []
      if (poi.isFavorite) {
        poi.isFavorite = false
        poi.favoriteColor = 'darkGrey'
        const newFavorites = []
        favorites.forEach(function (element) {
          if (element.id !== poi.id) {
            newFavorites.push(element)
          }
        })
        LocalStorage.set('favorites', newFavorites)
        if (poi.id.startsWith('personal')) {
          LocalStorage.remove('poi' + poi.id)
        }
      } else {
        poi.isFavorite = true
        poi.favoriteColor = 'red'
        const city = LocalStorage.getItem('currentCity')
        favorites.push({
          id: poi.id,
          name: poi.name,
          cityIndex: city
        })
        if (poi.id.startsWith('personal')) {
          console.log('saving a personal ')
          console.log(poi)
          LocalStorage.set('poi' + poi.id, poi)
        }
        LocalStorage.set('favorites', favorites)
      }
      this.$root.$emit('favorites-updated', poi.id)
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
    renderMultiplePoi (poiList) {
      console.log('renderMultiplePOI')
      const root = this.$root

      this.pois = []
      const _this = this

      poiList.forEach(function (poi) {
        poi.currentRatingValue = -1
        poi.currentPriceRange = -1
        poi.hasPhotos = false

        // Check if favorite
        const favorites = LocalStorage.getItem('favorites')
        poi.favoriteColor = 'darkgrey'
        poi.isFavorite = false
        if (favorites) {
          favorites.forEach(function (element) {
            if (element.id === poi.id) {
              poi.isFavorite = true
              poi.favoriteColor = 'red'
            }
          })
        }

        if (poi.details) {
          const details = LocalStorage.getItem('details' + poi.details.id)
          if (details && details != null) {
          // console.log('Found details for ' + poi.details.id)
            _this.processDetails(poi, details)
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
        poi.personalNotes = _this.fetchPersonalNotes(poi.id)
        _this.pois.push(poi)
      })
      this.poiId = poiList[0].id
      root.$emit('showPoiPanel')
      this.visible = true
    },
    renderSinglePoi (poi) {
      console.log('renderSinglePOI')
      const root = this.$root
      console.log(poi)
      this.pois = []
      const _this = this
      // poi.photosUrl = ['https://localhost:8080/assets/no-image.png']
      // remove the carrousel
      poi.currentRatingValue = -1
      poi.currentPriceRange = -1
      poi.hasPhotos = false

      // Check if favorite
      const favorites = LocalStorage.getItem('favorites')
      poi.favoriteColor = 'darkgrey'
      poi.isFavorite = false
      if (favorites) {
        favorites.forEach(function (element) {
          if (element.id === poi.id) {
            poi.isFavorite = true
            poi.favoriteColor = 'red'
          }
        })
      }

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
      poi.personalNotes = this.fetchPersonalNotes(poi.id)
      this.poiId = poi.id
      this.pois.push(poi)
      root.$emit('showPoiPanel')
      this.visible = true
    }
  },
  mounted () {
    const root = this.$root
    root.$on('render-single-poi', this.renderSinglePoi)
    root.$on('render-multiple-poi', this.renderMultiplePoi)
    root.$on('change-city', function () {
      // console.log('***')
      this.visible = false
    })
  },
  beforeDestroy () {
    const root = this.$root
    root.$off('render-single-poi')
    root.$off('render-multiple-poi')
    root.$off('change-city')
  }
}
</script>
