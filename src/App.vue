<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { LocalStorage } from 'quasar'
import store from './router/store.js'

export default {
  name: 'App',
  mounted () {
    fetch('db-structure.json').then(response => {
      return response.json()
    }).then(data => {
      console.log(data.cities, 'the json obj')
      const citiesDB = data.cities
      LocalStorage.set('citiesDB', citiesDB)
      const currentCity = LocalStorage.getItem('currentCity')
      if (!currentCity) {
        LocalStorage.set('currentCity', citiesDB.cartagena)
      }
      store.actions.handleAuthChanged()
    })
  }
}
</script>
