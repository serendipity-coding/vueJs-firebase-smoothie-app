import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAUQUM-Hdl6Q3tg6ao1sNln5dsuva1W4hM",
    authDomain: "smothie-db.firebaseapp.com",
    databaseURL: "https://smothie-db.firebaseio.com",
    projectId: "smothie-db",
    storageBucket: "smothie-db.appspot.com",
    messagingSenderId: "243726886990",
    appId: "1:243726886990:web:b9722c1b562b99e3d57b1f",
    measurementId: "G-YX11SDMJKY"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firestore database
export default firebaseApp.firestore()
