import { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => (
    <AuthContext.Provider value={useFirebase()}>{children}</AuthContext.Provider>
);

export default AuthProvider;
