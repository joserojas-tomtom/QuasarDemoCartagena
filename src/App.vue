<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
// import { LocalStorage } from 'quasar'
import store from './router/store.js'

export default {
  name: 'App',
  mounted () {
    store.actions.handleAuthChanged()
  }
}
</script>
