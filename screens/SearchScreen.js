import React, { useContext, useState } from 'react';
import { 
    Button, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

import DrinkScreen from './DrinkScreen';

const SearchScreen = () => {

    const { user, logout } = useContext(AuthContext);

    return(
        <View style={styles.main_container}>
            <DrinkScreen />
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