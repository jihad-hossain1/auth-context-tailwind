import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase.config';
// import App from '../App';


export const AuthContexts = createContext(null)
const auth = getAuth(app);


const AuthPorvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const authInfo = {
        user,
    }

    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthPorvider;