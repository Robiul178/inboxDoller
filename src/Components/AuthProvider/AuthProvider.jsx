import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config'


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();


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
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;