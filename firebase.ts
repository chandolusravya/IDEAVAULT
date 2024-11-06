
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMtG5gtiZ_FqFcLXTf_Cti8foSnuMV7to",
  authDomain: "ideavault-notion.firebaseapp.com",
  projectId: "ideavault-notion",
  storageBucket: "ideavault-notion.firebasestorage.app",
  messagingSenderId: "445079236662",
  appId: "1:445079236662:web:b02e44c20897968a51a897"
};

// we are checking no app is initialized, initialize usinf firebase else get the app that is already initialized.
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
//connection to database instance

const db=getFirestore(app);

export {db} ;