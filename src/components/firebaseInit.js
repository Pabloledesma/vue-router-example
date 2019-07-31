import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp

//export default firebaseApp.firestore()