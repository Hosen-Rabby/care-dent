import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const useFirebase = () =>{
    const [users, setUsers] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUsers(result.users);
        })
    }

    useEffect(() =>{
       const unSubscribed =  onAuthStateChanged(auth, users =>{
            if(users){
                setUsers(users);
            }
            else {
                setUsers({})
            }
        });
        return () => unSubscribed;
    },[])

    const logOut = () =>{
        signOut(auth)
        .then(() =>{})
    }



    return {
        users, 
        googleSignIn,
        logOut
    }
}


export default useFirebase;
