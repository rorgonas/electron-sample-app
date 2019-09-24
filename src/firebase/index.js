import firebase from "firebase";
// import env from '../firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjt9XdPGFpdMYCpp-DV42qD82u6DdjFIA",
    authDomain: "electron-sample-app.firebaseapp.com",
    databaseURL: "https://electron-sample-app.firebaseio.com",
    projectId: "electron-sample-app",
    storageBucket: "",
    messagingSenderId: "791745761628",
    appId: "1:791745761628:web:fe0a844d0954e22b98b199"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
