

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBfPYSmK2YIBrOvSzHwDsNSSniNxM1Eegs",
    authDomain: "pongalevent-fb950.firebaseapp.com",
    projectId: "pongalevent-fb950",
    storageBucket: "pongalevent-fb950.appspot.com",
    messagingSenderId: "882631707072",
    appId: "1:882631707072:web:c975b43c91f7828521a025",
    measurementId: "G-XY34PCH5Q3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
