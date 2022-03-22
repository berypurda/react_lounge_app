import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCxyjvdHUCoMRQ908vG5Chz94eUVG2iX_4",
  authDomain: "ganglounge-5e26b.firebaseapp.com",
  projectId: "ganglounge-5e26b",
  storageBucket: "ganglounge-5e26b.appspot.com",
  messagingSenderId: "584982289599",
  appId: "1:584982289599:web:3cadd1877377a11d24ba0a",
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
