<template>
  <q-layout view="lHh Lpr fFf">
    <q-header >
      <q-toolbar>
        <div class='row'>
        <q-btn
          class='col-1 q-mr-sm'
          flat
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <Location class='col-1 q-mr-sm' />
        <SearchBox class='col-9 q-mb-sm'/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-btn v-if='user==null'
          to='/auth'
          icon='account_circle'
          flat
          class='q-my-md'
          label='Registrate'/>
        <q-btn v-else
          icon='account_circle'
          flat
          class='q-my-md'
          @click='logoutUser'
          :label="`Logout (${user.name})`"/>

        <q-item-label
          header
          class="text-grey-8 text-weight-medium bg-green-2">
        TEMA DE COLORES
        </q-item-label>
        <div class="q-pa-md">
          <div class="q-gutter-x-md">
            <q-btn :color="`mapcolor-${n}`"
              v-for="n in 5"
              @click='changeMapTheme(n)'
              :key="n" />
          </div>
        </div>
        <q-item-label
          header
          class="text-grey-8 text-weight-medium bg-green-2"
        > MUNICIPIOS Y REGIONES
        </q-item-label>
        <q-item-label class='q-pa-md shadow-2' clickable v-for='(city) in Object.keys(cities)' :key='city' @click="changeCity(cities[city])">
          <span class="q-pa-lg text-dark text-weight-normal"> {{cities[city].name}}</span>
        </q-item-label>
        <q-item-label
          header
          class= 'text-grey-8 text-weight-medium bg-green-2'>FAVORITOS
        </q-item-label>
        <div v-for='(favorite, index) in favorites' :key='favorite.id'>
        <q-item-label v-show='favorite.city === currentCity.id' class='q-pa-md shadow-2' clickable >
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
    <q-footer >
    </q-footer>
    <transition appear enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
    <q-page-sticky  v-if='personalmarker'  class='q-pa-sm'  position="right" :offset='[0,0]'>
      <q-btn class='q-ma-xs' rounded icon="cancel" color="primary" @click='personalmarker=false'/>
      <q-btn class='q-ma-xs' fab icon="account_circle" color="primary" @click='createPersonalMarker()'/>
      <q-btn class='q-ma-xs' fab icon="announcement" color="primary" @click="createPublicMarker" />
    </q-page-sticky>
    </transition>

  </q-layout>
</template>

<script>
import store from '../router/store'
import SearchBox from 'components/SearchBox.vue'
import Location from 'components/Location.vue'
import { LocalStorage, Notify } from 'quasar'

// LocalStorage.clear()

export default {
  name: 'MainLayout',
  components: { SearchBox, Location },
  mounted () {
    const root = this.$root
    root.$on('long-click-map', this.showPersonalPoiMenu)
    root.$on('favorites-updated', this.updateFavorites)
    root.$on('location-update', function (location) {
      console.log(location)
    })
    this.favorites = LocalStorage.getItem('favorites') || []
    // console.log(this.favorites)
    this.currentCity = LocalStorage.getItem('currentCity')
    this.cities = LocalStorage.getItem('citiesDB')
    this.installBackButtonHandler()
    this.user = store.actions.getCurrentUser()
    // console.log('got user ', this.user)
  },
  beforeDestroy () {
    const root = this.$root
    root.$off('favorites-updates')
    root.$off('location-update')
    root.$off('long-click-map')
    this.removeBackButtonHandler()
  },
  methods: {
    changeMapTheme (index) {
      LocalStorage.set('styleIndex', (index - 1))
      this.leftDrawerOpen = false
      this.$root.$emit('change-style')
    },
    createPublicMarker () {
      // add a form
      const options = {
        name: 'event',
        params: { lng: this.temporaryLocation.lng, lat: this.temporaryLocation.lat }
      }
      if (this.user) {
        this.$router.push(options)
      } else {
        Notify.create("Tienes que registrarte 'mano!")
      }
    },
    createPersonalMarker () {
      const root = this.$root
      root.$emit('add-personal-poi', this.temporaryLocation)
      this.personalmarker = false
    },
    showPersonalPoiMenu (lngLat) {
      this.personalmarker = true
      this.temporaryLocation = lngLat
    },
    logoutUser () {
      // loging out
      const _this = this
      store.actions.logoutUser(function () {
        // success
        _this.user = null
        _this.leftDrawerOpen = false
        console.log('logout sucessful')
      })
    },
    onBackKeyDown (e) {
      // e.preventDefault()
      // console.log('BAKC BUTTON  , poiPanel is ' + this.poiPanel)
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
    updateFavorites (id) {
      this.favorites = LocalStorage.getItem('favorites') || []
    },
    removeFavorite (index) {
      this.favorites.splice(index, 1)
      LocalStorage.set('favorites', this.favorites)
    },
    updateFavoriteName (index) {
      // console.log('index: ' + index)
      // console.log(this.$refs)
      const value = this.$refs.favoriteName[index].value
      const poi = this.favorites[index]
      poi.name = value
      // console.log('setting ' + value + 'for ' + poi.id)
      try {
        const oldPOI = LocalStorage.getItem('poi' + poi.id)
        // console.log('Old POI')
        // console.log(oldPOI)

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
    changeCity (city) {
      console.log('in main layout : click city ', city)
      LocalStorage.set('currentCity', city)
      const root = this.$root
      root.$emit('change-city', city)
      this.leftDrawerOpen = false
      this.poiPanel = false
      this.currentCity = city
    }
  },
  data () {
    return {
    //   'assets/cartagenastyle.json',
    // 'assets/terracotastyle.json',
    // 'assets/pinkstyle.json',
    // 'assets/lightgreen.json',
    // 'assets/pastelstyle.json'
      mapcolortheme: [
        'mapcolor-1',
        'mapcolor-2',
        'mapcolor-3',
        'mapcolor-4',
        'mapcolor-5'],
      temporaryLocation: undefined,
      personalmarker: false,
      user: null,
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      cities: [],
      currentCity: 0,
      favorites: []
    }
  }
}

</script>
<style scoped>

.bg-mapcolor-1 {
  background: #faf3dd;
}
.bg-mapcolor-2 {
  background: #D27370;
}
.bg-mapcolor-3 {
  background: #FFD5FF;
}
.bg-mapcolor-4 {
  background: #7EA172;
}
.bg-mapcolor-5 {
  background: #C2D3CD;
}
</style>
