import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
//Added
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {firebaseConfig} from "../firebaseConfig";

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
// Added
export const firebaseDB = getFirestore(firebaseApp);

// Get a list of users from your database
async function getUsers(firebaseDB) {
    const usersCol = collection(firebaseDB, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    return usersList;
  }