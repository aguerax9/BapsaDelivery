import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthNav from './AuthNav';

const Routes = () => {
    return(
        <NavigationContainer>
            <AuthNav />
        </NavigationContainer>
    );
}

export default Routes;