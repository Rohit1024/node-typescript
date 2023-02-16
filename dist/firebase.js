// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGkw7hxyFS13YqoYqWcltb_Dzc33iQqKc",
    authDomain: "fir-reproduce-19328.firebaseapp.com",
    databaseURL: "https://fir-reproduce-19328-default-rtdb.firebaseio.com",
    projectId: "fir-reproduce-19328",
    storageBucket: "fir-reproduce-19328.appspot.com",
    messagingSenderId: "372271616914",
    appId: "1:372271616914:web:53b736b2cbd5f09d0ba74b",
    measurementId: "G-W3R7WYM6HR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 8080);
const auth = getAuth(app);
export { app, db, auth };
//# sourceMappingURL=firebase.js.map