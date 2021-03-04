<template>

<q-layout view="lHh Lpr fFf">
  <q-header >
      <q-toolbar>
        <q-item-label class='text-white text-h6'>
             Crear un nuevo evento
        </q-item-label>
        <q-btn
          class='absolute-right q-ma-xs'
          to='/' replace
          label='Go back'
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
        <q-select class='q-mb-sm' v-model='event.category' outlined :options="options" label="Categoria" />
        <q-input lines='2' class='q-mb-sm' v-model='event.description' outlined label="Descripcion" dense />
        <q-input class='q-mb-sm' outlined v-model="event.price" label="Price" dense />
        <img :src="event.imageSrc" width='100%' class='q-mb-sm'>
    </q-card-section>
    <q-card-actions>
        <q-space />
        <q-btn  icon='camera' color='dark' @click='takePicture'/>
        <q-btn  color="dark" label="Borrar" @click='clearFields'/>
        <q-btn  color="dark" label="Cancelar" to='/' replace />
        <q-btn  color="primary" label="Crear" />

      </q-card-actions>
  </q-card>
</q-page>
</q-page-container>

</q-layout>
</template>
<script>
import { LocalStorage } from 'quasar'

export default {
  props: ['lng', 'lat'],
  data () {
    return {
      event: {
        location: undefined,
        address: undefined,
        description: undefined,
        category: '',
        price: 0,
        imageSrc: null
      },
      options: [
        'Nota publica',
        'Venta o promocion',
        'Algo perdido o encontrado',
        'Oferta de trabajo'
      ]
    }
  },
  methods: {
    onBackKeyDown (e) {
      // e.preventDefault()
      console.log('BAKC BUTTON')
      e.stopImmediatePropagation()
      if (confirm('Seguro de cancelar el evento?')) {
        this.$q.goto('/')
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
    const apikey = LocalStorage.getItem('apikey')
    this.location = new window.tt.LngLat(this.lng, this.lat)
    console.log('Location', this.location, apikey)
    const _this = this
    window.tt.services.reverseGeocode({
      key: apikey,
      position: this.location
    }).then(function (response) {
      console.log(response)
      _this.event.address = response.addresses[0].address.freeformAddress
    })
    this.installBackButtonHandler()
  },
  beforeDestroy () {
    this.removeBackButtonHandler()
  }
}
</script>
