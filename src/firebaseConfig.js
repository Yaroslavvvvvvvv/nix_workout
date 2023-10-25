import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCH1LfZnDM2bFYDE7XWMT4_SbC7E599Yxo",
    authDomain: "nix-workout-ae145.firebaseapp.com",
    projectId: "nix-workout-ae145",
    storageBucket: "nix-workout-ae145.appspot.com",
    messagingSenderId: "788144687456",
    appId: "1:788144687456:web:af0fb05df43b5b5f067605",
    measurementId: "G-8WT0SFMT36"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }