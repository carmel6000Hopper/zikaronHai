import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxG-SVvWBmlLE1GsWRkU2_ib_tt3cLPEM",
    authDomain: "zikaronhai.firebaseapp.com",
    databaseURL: "https://zikaronhai.firebaseio.com",
    projectId: "zikaronhai",
    storageBucket: "zikaronhai.appspot.com",
    messagingSenderId: "212977596137"
};

firebase.initializeApp(config);

const storage = firebase.storage();
const fbData = firebase.database();
const dBRefImages = fbData.ref().child('images');

export {
    storage, dBRefImages, fbData,firebase
}
