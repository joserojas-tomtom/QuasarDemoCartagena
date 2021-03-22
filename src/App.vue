<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { LocalStorage, Notify } from 'quasar'
import store from './router/store.js'

export default {
  name: 'App',
  mounted () {
    const _this = this
    const getDefaultCity = async () => {
      try {
        const response = await fetch('db-structure.json')
        const data = await response.json()
        const citiesDB = data.cities
        LocalStorage.set('citiesDB', citiesDB)
        const currentCity = LocalStorage.getItem('currentCity')
        if (!currentCity) {
          LocalStorage.set('currentCity', citiesDB.cartagena)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getDefaultCity()
    store.actions.handleAuthChanged()
    store.actions.checkForEmailLink(window.location.href,
      function (user) {
        Notify.create('Signed as ' + user.name)
        store.actions.handleAuthChanged(function () {
          console.log('back from signin email')
          _this.$root.$emit('signin')
        })
      },
      function (error) {
        Notify.create(error.message)
      })
  }
}
</script>
