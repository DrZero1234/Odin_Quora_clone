import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {createUserWithEmailAndPassword,
   getAuth,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCUPBl5Oqq-aY7r66FezDd_q6q0BuaHiHo",
  authDomain: "quora-clone-e3af3.firebaseapp.com",
  projectId: "quora-clone-e3af3",
  storageBucket: "quora-clone-e3af3.appspot.com",
  messagingSenderId: "521604189429",
  appId: "1:521604189429:web:2c3706b9b84598fec349bc",
};

const app = initializeApp(firebaseConfig)

export const firestore = getFirestore(app);
export const auth = getAuth();
