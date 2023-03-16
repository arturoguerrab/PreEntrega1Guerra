
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjxGUZA814r4kpmYG_IwdZOHwga92QhHk",
    authDomain: "db-whimsy.firebaseapp.com",
    projectId: "db-whimsy",
    storageBucket: "db-whimsy.appspot.com",
    messagingSenderId: "83473057950",
    appId: "1:83473057950:web:f00eca282e33f47d9a938f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);