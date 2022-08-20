import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAmawxUmkb5JB5rE14iY1mvQE-fmsZGp2E",
  authDomain: "netflix-clone-1c58c.firebaseapp.com",
  projectId: "netflix-clone-1c58c",
  storageBucket: "netflix-clone-1c58c.appspot.com",
  messagingSenderId: "119298296359",
  appId: "1:119298296359:web:b19719463400d5b10e5c02"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);