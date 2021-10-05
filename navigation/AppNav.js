import React from 'react';
import { TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator headerMode='none'>
            <HomeStack.Screen name="Accueil" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}

const SearchStackScreen = () => {
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen 
                name="Recherche" 
                component={SearchScreen} 
            />
        </SearchStack.Navigator>
    );
}

const ProfileStackScreen = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profil" component={ProfileScreen} />
        </ProfileStack.Navigator>
    );
}

const AppNav = () => {
    return(
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#C0392B',
            }}
        >
            <Tabs.Screen 
                name="Accueil" 
                component={HomeStackScreen} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" color={color} size={25} />
                    )
                }}
            />
            <Tabs.Screen 
                name="Recherche" 
                component={SearchStackScreen} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" color={color} size={25} />
                    )
                }}
            />
            <Tabs.Screen 
                name="Profil" 
                component={ProfileStackScreen} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" color={color} size={25} />
                    )
                }}
            />
        </Tabs.Navigator>
    );
}

export default AppNav;



