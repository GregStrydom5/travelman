const firebase = require('firebase');
const {admin} = require("./admin");

const firebaseConfig = {
  apiKey: "AIzaSyB2OLpkPbiEoUjlunc9anld0QZTsmudK7w",
  authDomain: "travelman-3fe85.firebaseapp.com",
  projectId: "travelman-3fe85",
  storageBucket: "travelman-3fe85.appspot.com",
  messagingSenderId: "92713686117",
  appId: "1:92713686117:web:4154026b959b64163ae28c",
  measurementId: "G-CYP94TTJHE"
};

firebase.initializeApp(firebaseConfig);

module.exports = { firebase }; //export the app