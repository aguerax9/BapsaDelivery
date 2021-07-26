import React, { createContext, useState } from 'react';

import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                register: (email, pwd) => {
                    auth()
                        .createUserWithEmailAndPassword(email, pwd)
                        .catch(error => {console.log(error.code)});
                },
                login: (email, pwd) => {
                    auth()
                        .signInWithEmailAndPassword(email, pwd)
                        .catch(error => {console.log(error.code)});
                },
                logout: () => {
                    auth()
                        .signOut()
                        .catch(err => {console.log(err.code)});
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}