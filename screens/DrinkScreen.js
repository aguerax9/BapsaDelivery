import React, { useContext } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';
import bieres from '../helpers/DrinkData';

import DrinkItem from '../components/DrinkItem';

const DrinkScreen = () => {

    const { user, logout } = useContext(AuthContext);

    return(
        <View style={styles.main_container}>
            <FlatList 
                data={bieres}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <DrinkItem film={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        //justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingHorizontal: 5,
    },
});

export default DrinkScreen;