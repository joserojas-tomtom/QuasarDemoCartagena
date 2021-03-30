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
    const citiesDB = {} // data.citiesDB
    citiesDB.cartagena = data.cities.cartagena
    citiesDB.barranquilla = data.cities.barranquilla
    citiesDB.santamarta = data.cities.santamarta
    citiesDB.valledupar = data.cities.valledupar
    citiesDB.monteria = data.cities.monteria
    citiesDB.medellin = data.cities.medellin
    citiesDB.cali = data.cities.cali
    citiesDB.bogota = data.cities.bogota
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
