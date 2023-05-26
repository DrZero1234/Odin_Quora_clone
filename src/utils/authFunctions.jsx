import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../firebase"

export const logIn = async () => {
    await signInWithPopup(auth,new GoogleAuthProvider)
}

export const logOut = () => {
    signOut(auth);
}

export const isUserSignedIn = () => {
    return !auth.currentUser
}