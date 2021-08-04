import React, { useContext, useState } from 'react';
import { 
    Button, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AuthContext } from '../navigation/AuthProvider';

import DrinkScreen from './DrinkScreen';

const Tab = createMaterialTopTabNavigator();

const MenuTab = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#C0392B',
                inactiveTintColor: '#000000',
                indicatorStyle: {
                    backgroundColor: '#C0392B',
                },
                labelStyle: styles.text_menu_item,
            }}
        >
            <Tab.Screen 
                name="Biere" 
                component={DrinkScreen}
            />
            <Tab.Screen name="Whisky" component={DrinkScreen} />
            <Tab.Screen name="Vodka" component={DrinkScreen} />
            <Tab.Screen name="Soda" component={DrinkScreen} />
        </Tab.Navigator>
    );
}

const SearchScreen = () => {

    const { user, logout } = useContext(AuthContext);

    return(
        <View style={styles.main_container}>
            <MenuTab />
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    menu_section: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30, // to verify
    },
    text_menu_item: {
        fontWeight: 'bold',
    }
});

export default SearchScreen;