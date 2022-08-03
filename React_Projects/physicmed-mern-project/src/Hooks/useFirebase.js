import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => signInWithPopup(auth, googleAuthProvider);

    const registerWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const loginWithEmailAndPassword = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const updateNameAndPhoto = (displayName, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
            .then(() => {
                console.log('Profile Updated');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(({ message }) => {
                console.log(message);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (newUser) => {
            if (newUser) setUser(newUser);
            else setUser(false);

            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);

    return {
        user,
        setUser,
        loginWithGoogle,
        logout,
        isLoading,
        setIsLoading,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        updateNameAndPhoto
    };
};

export default useFirebase;
