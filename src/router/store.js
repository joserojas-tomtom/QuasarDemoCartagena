// import { firebaseAuth, firebaseDB } from 'boot/firebase'

import { firebaseAuth, firebaseDB } from 'src/boot/firebase'
import { LocalStorage } from 'quasar'

const state = {
  user: null
}

const mutations = {

}

const actions = {
  checkForEmailLink (ref, successCB, errorCB) {
    // Confirm the link is a sign-in with email link.
    console.log('checking if email signin')
    if (firebaseAuth.isSignInWithEmailLink(ref)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      const email = LocalStorage.getItem('emailForSignIn')
      if (!email) {
        return
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        // email = window.prompt('Please provide your email for confirmation')
      }
      // The client SDK will parse the code from the link for you.
      firebaseAuth.signInWithEmailLink(email, window.location.href)
        .then((result) => {
          console.log('SIgn in SUccesful')
          // Clear email from storage.
          LocalStorage.remove('emailForSignIn')
          state.user = {
            name: LocalStorage.getItem('nameForSignIn'),
            email: email
          }
          const userId = firebaseAuth.currentUser.uid
          firebaseDB.ref('users/' + userId).set(state.user)
          successCB(state.user)
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          errorCB(error)
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        })
    }
  },
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
  loginWithEmail (email, name, successCB, errorCB) {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: 'https://localhost:8781/#/auth',
      // This must be true.
      handleCodeInApp: true,
      android: {
        packageName: 'com.loodico.tumapa',
        installApp: true
      },
      dynamicLinkDomain: 'tumapa.page.link'
    }
    firebaseAuth.sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        LocalStorage.set('emailForSignIn', email)
        LocalStorage.set('nameForSignIn', name)
        if (successCB) {
          successCB()
        }
        // ...
      })
      .catch((error) => {
        if (errorCB) {
          errorCB(error)
        }
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
        const errorCode = error.code
        const errorMessage = error.message
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
        const errorCode = error.code
        const errorMessage = error.message
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
    if (firebaseAuth.currentUser) {
      return firebaseAuth.currentUser.uid
    }
    return null
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
