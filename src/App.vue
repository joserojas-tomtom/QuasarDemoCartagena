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
    // function fetchLocalResource (url) {
    //   const req = new XMLHttpRequest()
    //   req.onload = function () {
    //     const text = req.responseText
    //     // Do something with text...
    //   }
    //   req.open('GET', url)
    //   req.send()
    // }
    function fetchLocal (url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.onload = function () {
          resolve(new Response(xhr.responseText, { status: xhr.status }))
        }
        xhr.onerror = function () {
          reject(new TypeError('Local request failed'))
        }
        xhr.open('GET', url)
        xhr.send(null)
      })
    }
    const getDefaultCity = async () => {
      try {
        const response = await fetchLocal('db-structure.json')
        const data = await response.json()
        console.log('FROM reading locally', data)
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
