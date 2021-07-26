import React, { useContext, useEffect, useState } from 'react';

import auth from '@react-native-firebase/auth';

import { NavigationContainer } from '@react-navigation/native';

import AuthNav from './AuthNav';
import AppNav from './AppNav';

import { AuthContext } from './AuthProvider';

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);

    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return(
        <NavigationContainer>
            {user ? <AppNav /> : <AuthNav />}
        </NavigationContainer>
    );
}

export default Routes;