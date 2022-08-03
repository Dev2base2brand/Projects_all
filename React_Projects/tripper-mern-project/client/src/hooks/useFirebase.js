import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const login = () => signInWithPopup(auth, provider);

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
            if (newUser) {
                setUser(newUser);
            } else {
                setUser(false);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);

    return { user, setUser, login, logout, isLoading, setIsLoading };
};

export default useFirebase;
