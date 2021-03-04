<template>
  <q-layout view="lHh Lpr fFf">
    <q-header >
      <q-toolbar>
        <q-btn
          flat
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <Location class='q-pr-sm vertical-middle' />
        <SearchBox class='vertical-middle q-mb-sm'/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-btn v-if='!user'
          to='/auth' replace
          icon='account_circle'
          flat
          label='Login'/>
        <q-btn v-else
          icon='account_circle'
          flat
          @click='logoutUser()'
          :label="`Logout (${this.user.name})`"/>

        <q-item-label
          header
          class="text-grey-8 text-weight-medium bg-green-2"
        > MUNICIPIOS Y REGIONES
        </q-item-label>
        <q-item-label class='q-pa-md shadow-2' clickable v-for='(city, index) in cities' :key='city' @click="changeCity(index)">
          <span class="q-pa-lg text-dark text-weight-normal"> {{city}}</span>
        </q-item-label>
        <q-item-label
          header
          class= 'text-grey-8 text-weight-medium bg-green-2'>FAVORITOS
        </q-item-label>
        <div v-for='(favorite, index) in favorites' :key='favorite.id'>
        <q-item-label v-show='favorite.cityIndex === currentCity' class='q-pa-md shadow-2' clickable >
          <!-- <q-item-section header
            @click="showFavorite(index)"
            class="q-pa-lg text-dark text-weight-normal">{{favorite.name}}
            </q-item-section> -->
            <q-input rounded
              ref='favoriteName'
              @blur="updateFavoriteName(index)"
              standout bottom-slots
              v-model="favorite.name"
              counter maxlength="100" :dense="true">
          </q-input>
            <q-item-section side>
              <q-item-label>
                 <q-icon class='q-pa-sm' name="location_on" size='1.5em'
                    @click="showFavorite(index)"
                    color='grey'
                    />
                <q-icon class='q-pa-sm' name="directions_run" size='1.5em'
                          color='grey'
                          />
                <q-icon class='q-pa-sm' name="directions_car" size='1.5em'
                          color='grey'
                          />
                <q-icon class='q-pa-sm' name="delete" size='1.5em'
                          color='grey'
                          @click='removeFavorite(index)'
                          />
              </q-item-label>
            </q-item-section>
        </q-item-label>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-drawer
        side="right"
        v-model='rightDrawerOpen'
        bordered
        :width="400"
        :breakpoint="400"
        content-class="bg-grey-3"
      >
      </q-drawer>
    <q-footer v-show='poiPanel' class="bg-grey-1" >
      <PoiManager v-model='poiPanel' style='width:100%'/>
    </q-footer>
    <transition appear enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
    <q-page-sticky  v-if='personalmarker'  class='q-pa-sm'  position="right" :offset='[0,0]'>
      <q-btn class='q-ma-xs' rounded icon="cancel" color="primary" @click='personalmarker=false'/>
      <q-btn class='q-ma-xs' fab icon="account_circle" color="primary" @click='createPersonalMarker()'/>
      <q-btn class='q-ma-xs' fab icon="announcement" color="primary" :to="{ name: 'event' , params: { lng: temporaryLocation.lng, lat: temporaryLocation.lat}}" replace/>
    </q-page-sticky>
    </transition>

  </q-layout>
</template>

<script>
import store from '../router/store'
import SearchBox from 'components/SearchBox.vue'
import PoiManager from 'components/PoiManager.vue'
import Location from 'components/Location.vue'
import { LocalStorage } from 'quasar'

// LocalStorage.clear()

export default {
  name: 'MainLayout',
  components: { SearchBox, PoiManager, Location },
  mounted () {
    const root = this.$root
    root.$on('long-click-map', this.showPersonalPoiMenu)
    root.$on('hidePoiPanel', this.hidePoiPanel)
    root.$on('showPoiPanel', this.showPoiPanel)
    root.$on('change-city', this.hidePoiPanel)
    root.$on('favorites-updated', this.updateFavorites)
    root.$on('location-update', function (location) {
      console.log(location)
    })
    this.favorites = LocalStorage.getItem('favorites') || []
    // console.log(this.favorites)
    this.currentCity = LocalStorage.getItem('currentCity')
    this.installBackButtonHandler()
    this.user = store.actions.getCurrentUser()
  },
  beforeDestroy () {
    const root = this.$root
    root.$off('hidePoiPanel')
    root.$off('showPoiPanel')
    root.$off('change-city')
    root.$off('favorites-updates')
    root.$off('location-update')
    root.$off('long-click-map')
    this.removeBackButtonHandler()
  },
  methods: {
    createPublicMarker () {
      // add a form
    },
    createPersonalMarker () {
      this.hidePoiPanel()
      const root = this.$root
      root.$emit('add-personal-poi', this.temporaryLocation)
      this.personalmarker = false
    },
    showPersonalPoiMenu (lngLat) {
      this.personalmarker = true
      this.temporaryLocation = lngLat
      this.hidePoiPanel()
    },
    logoutUser () {
      // loging out
      const _this = this
      store.actions.logoutUser(function () {
        // success
        _this.user = null
      })
    },
    onBackKeyDown (e) {
      // e.preventDefault()
      console.log('BAKC BUTTON  , poiPanel is ' + this.poiPanel)
      if (!this.poiPanel) {
        if (confirm('Seguro de terminar la aplicacion?')) {
          navigator.app.exitApp()
        }
      } else {
        this.poiPanel = false
        e.stopImmediatePropagation()
      }
    },
    removeBackButtonHandler () {
      document.removeEventListener('backbutton', this.onBackKeyDown, false)
    },
    installBackButtonHandler () {
      document.addEventListener('backbutton', this.onBackKeyDown, false)
    },
    hidePoiPanel () {
      this.poiPanel = false
    },
    showPoiPanel () {
      this.poiPanel = true
      this.favorites = LocalStorage.getItem('favorites') || []
      // console.log(this.favorites)
    },
    updateFavorites (id) {
      this.favorites = LocalStorage.getItem('favorites') || []
    },
    removeFavorite (index) {
      this.favorites.splice(index, 1)
      LocalStorage.set('favorites', this.favorites)
    },
    updateFavoriteName (index) {
      console.log('index: ' + index)
      console.log(this.$refs)
      const value = this.$refs.favoriteName[index].value
      const poi = this.favorites[index]
      poi.name = value
      console.log('setting ' + value + 'for ' + poi.id)
      try {
        const oldPOI = LocalStorage.getItem('poi' + poi.id)
        console.log('Old POI')
        console.log(oldPOI)

        if (oldPOI.poi) {
          oldPOI.poi.name = value
        } else {
          oldPOI.name = value
        }
        LocalStorage.set('poi' + poi.id, oldPOI)
        LocalStorage.set('favorites', this.favorites)
      } catch (e) {
        console.log(e)
      }
    },
    showFavorite (index) {
      // console.log('Clicked favorito ' + index)
      this.leftDrawerOpen = false
      const root = this.$root
      root.$emit('show-favorite', this.favorites[index].id)
    },
    changeCity (index) {
      // console.log('click city ' + index)
      LocalStorage.set('currentCity', index)
      const root = this.$root
      root.$emit('change-city', index)
      this.leftDrawerOpen = false
      this.poiPanel = false
      this.currentCity = index
    }
  },
  data () {
    return {
      temporaryLocation: undefined,
      personalmarker: false,
      user: {},
      leftDrawerOpen: false,
      poiPanel: true,
      rightDrawerOpen: false,
      cities: ['AMSTERDAM', 'CARTAGENA', 'VALLEDUPAR', 'FLORENCIA', 'TEL AVIV'],
      currentCity: 0,
      favorites: []
    }
  }
}

</script>
