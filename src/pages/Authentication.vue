<template>

<q-layout view="lHh Lpr fFf">
  <q-header >
      <q-toolbar>
        <q-btn
          class='absolute-right q-ma-md'
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
    <q-card v-if='alreadySignedIn'>
      <q-item-label class='text-h5'>Ya estas registrado!</q-item-label>
    </q-card>
    <q-card v-else>
      <login-register class='q-pa-md'/>
    </q-card>
  </q-page>
</q-page-container>

</q-layout>
</template>
<script>
import { Notify } from 'quasar'
import store from '../router/store'

export default {

  data () {
    return {
      alreadySignedIn: false
    }
  },
  components: {
    'login-register': require('components/LoginRegister.vue').default
  },
  mounted () {

  },
  methods: {
    signinGoogle () {
      const _this = this
      store.actions.signinGoogle(function (msg) {
        Notify.create(msg)
        _this.$router.replace('/')
      })
    }
  }
}
</script>
