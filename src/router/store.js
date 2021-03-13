// import { firebaseAuth, firebaseDB } from 'boot/firebase'

import { firebaseAuth, firebaseDB } from 'src/boot/firebase'

const state = {
  user: null
}

const mutations = {

}

const actions = {
  logoutUser (successCB, errorCB) {
    firebaseAuth.signOut().then(() => {
      state.user = null
      // successCB()
      this.handleAuthChanged(successCB)
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      if (errorCB) {
        errorCB(error)
      }
      console.log(error)
    })
  },
  loginUser (payload, successCB, errorCB) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        // Signed in
        console.log('loging in ', state.user)
        this.handleAuthChanged(function () {
          successCB(state.user)
        })
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
        errorCB(error)
        // ..
      })
  },
  registerUser (payload, successCB, errorCB) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        // Signed in
        const userId = firebaseAuth.currentUser.uid
        firebaseDB.ref('users/' + userId).set({
          name: payload.name,
          email: payload.email
        })
        // ...

        console.log('registered in ', state.user)
        this.handleAuthChanged(function () {
          successCB(state.user)
        })
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
        errorCB(error)
        // ..
      })
  },
  handleAuthChanged (callback) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        const userId = firebaseAuth.currentUser.uid
        firebaseDB.ref('users/' + userId).once('value', snapshot => {
          const details = snapshot.val()
          state.user = { ...details }
          if (callback) {
            callback()
          }
          // console.log(details)
        })
      } else {
        state.user = null
      }
    })
  },
  fetchCityEvents (city, callback) {
    firebaseDB.ref('events/' + city).once('value', snapshot => {
      const cityEvents = snapshot.val()
      callback(cityEvents)
    }, (error) => { console.log(error) })
  },
  registerEventListener (city, listener) {
    firebaseDB.ref('events/' + city).on('value', snapshot => {
      const data = snapshot.val()
      listener(data)
    })
  },
  removeEventListener (city) {
    firebaseDB.ref('events/' + city).off()
  },
  getCurrentUser () {
    return state.user
  },
  getUserId () {
    return firebaseAuth.currentUser.uid
  },
  deleteEvent (event, callback) {
    firebaseDB.ref('events/' + event.city + '/' + event.category.value + '/' + event.timestamp).remove(function (error) {
      console.log('Response from firebase deleting ', error)
      callback(error)
    })
  },
  createEvent (event, callback) {
    event.userId = firebaseAuth.currentUser.uid
    event.timestamp = Date.now()
    console.log('Creating Event', event)
    firebaseDB.ref('events/' + event.city + '/' + event.category.value + '/' + event.timestamp)
      .set(event, (error) => {
        if (error) {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
        }
        callback(error)
      }
      )
  }
}

const getters = {

}

export default {
  name: 'store',
  state,
  mutations,
  actions,
  getters
}
