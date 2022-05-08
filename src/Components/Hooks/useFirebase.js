import { useEffect, useState } from "react"
import app from "../../firebase.init";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider

const useFirebase =()=>{
    const [user,setUser] =useState({});

    useEffect(()=>{
      onAuthStateChanged(auth,user =>{
          setUser(user);
      })
    },[]);

    const signInWithgoogle =()=>{
signInWithPopup(auth,googleProvider)

.then(result =>{
    const user = result.user;
    setUser(user);
    console.log(user);
})

    }

    const handleSignOut =()=>{
        signOut(auth)
        .then(()=>{})
    }

    // return[user,setUser];
    return {user,signInWithgoogle,handleSignOut}
    
}

export default useFirebase;