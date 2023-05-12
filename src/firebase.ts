import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVYVlJGd3VqRG110uJTBy-EqaDqTyMiLo",
  authDomain: "react-2f644.firebaseapp.com",
  projectId: "react-2f644",
  storageBucket: "react-2f644.appspot.com",
  messagingSenderId: "87920434028",
  appId: "1:87920434028:web:f166470c09342a6bad7149"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

