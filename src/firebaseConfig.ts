import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyB53KKWxV4hh4oiTzSzg0m4WrIce33J6vA",
    authDomain: "login-3e869.firebaseapp.com",
    projectId: "login-3e869",
    storageBucket: "login-3e869.appspot.com",
    messagingSenderId: "51765202084",
    appId: "1:51765202084:web:ecd5fe87c313bf0ba06a31",
    measurementId: "G-6380LZGMFT"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

