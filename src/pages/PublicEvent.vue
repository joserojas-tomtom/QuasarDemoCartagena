<template>

<q-layout view="lHh Lpr fFf">
  <q-header >
      <q-toolbar>
        <q-item-label class='text-white text-h6'>
             Crear un nuevo evento
        </q-item-label>
        <q-btn
          class='absolute-right q-mr-md'
          to='/' replace
          label='Mapa'
          flat
          dense
          round
          icon="map"
          aria-label="map"
        />
      </q-toolbar>
    </q-header>
<q-page-container>
  <q-page class=' flex-center q-pa-md'>
  <q-card>
    <q-card-section>
        <div class="text-overline text-orange-9">Direccion aproximada</div>
        <div class="text-h6 q-mt-sm q-mb-xs">{{ event.address}}</div>
        <q-select class='q-mb-sm' v-model='event.category' outlined :options="categories" label="Categoria" />
        <q-input lines='2' class='q-mb-sm' v-model='event.description' outlined label="Descripcion" dense />
        <q-input class='q-mb-sm' outlined v-model="event.phone" label="Telefono" dense mask='(+57) ###-#######' />
        <q-input class='q-mb-sm' outlined v-model="event.price"
        mask="$ #,###"
        fill-mask="0"
        reverse-fill-mask
        label="Precio/Valor" dense />
        <img :src="event.imageSrc" width='100%' class='q-mb-sm'>
    </q-card-section>
    <q-card-actions class='q-mr-sm'>
        <q-space />
        <q-btn  icon='camera' color='dark' @click='takePicture'/>
        <q-btn  color="dark" label="Borrar" @click='clearFields'/>
        <q-btn  color="dark" label="Cancelar" to='/' replace />
        <q-btn  :disable='event.description.length === 0 || event.category == null'
        color="primary" label="Crear" @click='sendEvent'/>

      </q-card-actions>
  </q-card>
</q-page>
</q-page-container>

</q-layout>
</template>
<script>
import { LocalStorage, Notify } from 'quasar'
import store from '../router/store'

export default {
  props: ['lng', 'lat'],
  data () {
    return {
      event: {
        location: undefined,
        address: undefined,
        description: '',
        phone: '',
        category: null,
        price: 0,
        imageSrc: null
      },
      categories: undefined,
      sendDisable: true
    }
  },
  methods: {
    handleCreateEvent (error) {
      if (error) {
        Notify.create(error.message)
      } else {
        console.log('no error creating event')
        // go back
        this.$router.back()
      }
    },
    sendEvent () {
      console.log(this.event)
      store.actions.createEvent(this.event, this.handleCreateEvent)
    },
    onBackKeyDown (e) {
      // e.preventDefault()
      console.log('BAKC BUTTON')
      e.stopImmediatePropagation()
      if (confirm('Seguro de cancelar el evento?')) {
        // go back
        this.$router.back()
      }
    },
    removeBackButtonHandler () {
      document.removeEventListener('backbutton', this.onBackKeyDown, false)
    },
    installBackButtonHandler () {
      document.addEventListener('backbutton', this.onBackKeyDown, false)
    },
    takePicture () {
      window.navigator.camera.getPicture(
        data => { // on success
          this.event.imageSrc = 'data:image/jpeg;base64,' + data
          console.log(this.event.imageSrc)
        },
        () => { // on fail
          this.$q.notify('Could not access device camera.')
        },
        {
          // camera options
          quality: 50,
          destinationType: 0,
          correctOrientation: true,
          targetHeight: 300,
          targetWidth: 500
        }
      )
    },
    clearFields () {
      this.event.description = ''
      this.event.category = ''
      this.event.price = 0
      this.event.imageSrc = null
    }
  },
  mounted () {
    this.categories = LocalStorage.getItem('event-categories')
    const apikey = LocalStorage.getItem('apikey')
    this.event.location = new window.tt.LngLat(this.lng, this.lat)
    // console.log('Location', this.event.location, apikey)
    const _this = this
    window.tt.services.reverseGeocode({
      key: apikey,
      position: this.event.location
    }).then(function (response) {
      // console.log(response)
      _this.event.address = response.addresses[0].address.freeformAddress
    })
    const city = LocalStorage.getItem('currentCity')
    this.event.city = city.id
    this.installBackButtonHandler()
  },
  beforeDestroy () {
    this.removeBackButtonHandler()
  }
}
</script>
