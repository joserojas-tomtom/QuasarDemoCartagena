import { LocalStorage } from 'quasar'

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
