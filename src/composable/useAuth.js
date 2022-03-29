import {ref} from "vue";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";

import { firebaseAuth } from "./useFirebase";
import { async } from "@firebase/util";

const isAuthenticated = ref(false);

const user = ref("");

const useAuth =  () => {
    const googleLogin = async () => {
       const provider = new GoogleAuthProvider();
       const credentials = await signInWithPopup(firebaseAuth, provider); 

       if (credentials.user){
        isAuthenticated.value = true;
        user.value = credentials.user.displayName;
        }
    };
    const login = async (username, password) => {
        const credentials = await signInWithEmailAndPassword(firebaseAuth, 
        username, 
        password
        );
  
    if (credentials.user){
        isAuthenticated.value = true;
        user.value = credentials.user.email;
        }
    };

    const signup = async (username, password) => {
        const credentials = await createUserWithEmailAndPassword (firebaseAuth, 
        username, 
        password
        );
  
    if (credentials.user){
        isAuthenticated.value = true;
        user.value = credentials.user.email;
        }
    };

const logout = async() => {
    await signOut(firebaseAuth);
    isAuthenticated.value = false;
    user.value = "";
};

    //Added 3/27 to support Google Authen
    //const googleProvider = new GoogleAuthProvider();
    //return { isAuthenticated, login, signup, logout, user, googleProvider};
    return { isAuthenticated, login, signup, logout, user, googleLogin};
};

export default useAuth;