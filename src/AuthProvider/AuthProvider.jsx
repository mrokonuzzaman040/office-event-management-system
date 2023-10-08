import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../credential/Firebase/firebase.config'

export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //user state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    //user logout
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    //update profile
    const upDateProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    const authInfo = {
        user,
        createUser,
        upDateProfile,
        loginUser,
        logoutUser,
        loading,
    }


    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;