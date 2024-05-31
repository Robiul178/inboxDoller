import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config'


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const googleProvider = new GoogleAuthProvider();

    const singUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    const gooogleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log('current Logged User', user)
            setUser(user)
        });
        return () => {
            unSubscribe();
        }

    }, [])




    const authInfo = {
        user,
        singUpUser,
        logInuser,
        updateUserProfile,
        logOutUser,
        gooogleLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;