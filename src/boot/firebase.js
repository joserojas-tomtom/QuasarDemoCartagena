// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/database'

// <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>

// TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries -->

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBv5tGlvZa2P_orz1UbgfL3n-CzSZtvgfc',
//   authDomain: 'kidstimer-73245.firebaseapp.com',
//   databaseURL: 'https://kidstimer-73245.firebaseio.com',
//   projectId: 'kidstimer-73245',
//   storageBucket: 'kidstimer-73245.appspot.com',
//   messagingSenderId: '118939634979',
//   appId: '1:118939634979:web:7215e9f857380a869cd096'
// }

const firebaseConfig = {
  apiKey: 'AIzaSyCpuBp72TvTyfSCa2r6CGt9fm2ZwL9S8BQ',
  authDomain: 'tumapa-68cf7.firebaseapp.com',
  databaseURL: 'https://tumapa-68cf7-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'tumapa-68cf7',
  storageBucket: 'tumapa-68cf7.appspot.com',
  messagingSenderId: '287062629723',
  appId: '1:287062629723:web:51674a19771c6908acce7e'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDB = firebase.database()

export { firebaseAuth, firebaseDB }
