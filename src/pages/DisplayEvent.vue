<template>

<q-layout view="lHh Lpr fFf">
  <q-header >
      <q-toolbar>
        <q-btn
          class='q-ma-xs'
          to='/' replace
          flat
          dense
          round
          icon="keyboard_backspace"
          aria-label="map"
        />
        <q-item-label class='q-ml-md text-white text-h6'>
             {{ event.description }}
        </q-item-label>
        <div class='absolute-right q-mt-sm'>
        <q-btn v-if='event.userId===currentUserId' flat icon='delete' @click='deleteEvent(event)'/>
        <q-btn flat icon='share' @click='share(event)'/>
        </div>
      </q-toolbar>
    </q-header>
<q-page-container>
  <q-page class=' flex-center q-pa-md'>
  <q-card>
    <q-card-section>
      <q-badge color='blue' class='q-mb-sm'>{{event.category.label}}</q-badge>
        <div class="text-overline text-orange-9">Direccion aproximada</div>
        <div class="text-h6 q-mt-sm q-mb-xs">{{event.address}}</div>
        <q-item-label class='q-mb-sm'>{{event.phone}}</q-item-label>
        <q-item-label class='q-mb-sm'>{{event.price}}</q-item-label>
        <img :src="event.imageSrc" width='100%' class='q-mb-sm'>
    </q-card-section>
  </q-card>
</q-page>
</q-page-container>

</q-layout>
</template>
<script>
import { LocalStorage } from 'quasar'
import store from '../router/store'

export default {
  props: ['event'],
  data () {
    return {
      currentUserId: undefined,
      categories: undefined
    }
  },
  methods: {
    deleteEvent (event) {
      console.log('deleting', event)
      if (confirm('Seguro de eliminar el evento?')) {
        store.actions.deleteEvent(event)
      }
    },
    share (event) {
      console.log('Sharing ', event)

      var options = {
        text: event.category.label + '@' + event.address, // not supported on some apps (Facebook, Instagram)
        title: '[TusMapas]' + event.name, // fi. for email
        url: 'geo:0,0?q=' + event.location.lat + ',' + event.location.lng
        // chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
        // appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
        // iPadCoordinates: '0,0,0,0' // IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
      }

      navigator.share(options).then(function () {
        console.log('Good sharing').catch(error => {
          console.log('Error ', error)
        })
      })
    },
    onBackKeyDown (e) {
      // e.preventDefault()
      // console.log('BAKC BUTTON')
      this.$router.replace('/')
      e.stopImmediatePropagation()
    },
    removeBackButtonHandler () {
      document.removeEventListener('backbutton', this.onBackKeyDown, false)
    },
    installBackButtonHandler () {
      document.addEventListener('backbutton', this.onBackKeyDown, false)
    }
  },
  mounted () {
    this.categories = LocalStorage.getItem('event-categories')
    this.currentUserId = store.actions.getUserId()
    console.log('current user', this.currentUserId)
    this.installBackButtonHandler()
  },
  beforeDestroy () {
    this.removeBackButtonHandler()
  }
}
</script>
