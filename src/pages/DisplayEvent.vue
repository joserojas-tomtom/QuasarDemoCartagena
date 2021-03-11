<template>

<q-layout view="lHh Lpr fFf">
  <q-header >
      <q-toolbar>
        <q-item-label class='text-white text-h6'>
             {{ event.description }}
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
        <q-item-label class='q-mb-sm' v-model='event.category' outlined :label="event.category.label" />
        <q-item-label class='q-mb-sm' outlined  :label="event.phone" dense />
        <q-item-label class='q-mb-sm' outlined  :label="event.price" dense />
        <img :src="event.imageSrc" width='100%' class='q-mb-sm'>
    </q-card-section>
  </q-card>
</q-page>
</q-page-container>

</q-layout>
</template>
<script>
import { LocalStorage } from 'quasar'

export default {
  props: ['event'],
  data () {
    return {
      categories: undefined
    }
  },
  methods: {
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
    this.installBackButtonHandler()
  },
  beforeDestroy () {
    this.removeBackButtonHandler()
  }
}
</script>
