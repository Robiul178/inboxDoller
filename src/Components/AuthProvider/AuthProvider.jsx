import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config';
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    const singUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logInuser = (email, password) => {
        setLoading(true)
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
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current Logged User', currentUser)
            setUser(currentUser)
            setLoading(false)

            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem('access-token');
            }
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }

    }, [axiosPublic])




    const authInfo = {
        user,
        singUpUser,
        logInuser,
        updateUserProfile,
        logOutUser,
        gooogleLogIn,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;