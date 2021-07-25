import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen'

const AuthStack = createStackNavigator();

const AuthNav = () => {
    return(
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Sign up" component={SignupScreen} />
        </AuthStack.Navigator>
    );
}

export default AuthNav;