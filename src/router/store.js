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
      successCB()
      this.handleAuthChanged()
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
        this.handleAuthChanged()
        successCB(state.user)
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
        successCB(state.user)
        console.log('registered in ', state.user)
        this.handleAuthChanged()
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
        errorCB(error)
        // ..
      })
  },
  handleAuthChanged () {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        const userId = firebaseAuth.currentUser.uid
        firebaseDB.ref('users/' + userId).once('value', snapshot => {
          const details = snapshot.val()
          state.user = { ...details }
          // console.log(details)
        })
      } else {
        state.user = null
      }
    })
  },
  getCurrentUser () {
    return state.user
  },
  createEvent (event) {
    event.userId = firebaseAuth.currentUser.uid
    event.timestamp = Date.now()
    console.log('Creating Event', event)
    firebaseDB.ref('events/' + event.city + '/' + event.category.value + '/' + event.timestamp).set(event).catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
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
