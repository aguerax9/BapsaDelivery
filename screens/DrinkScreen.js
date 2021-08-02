import React, { useContext } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

const DrinkScreen = () => {

    const { user, logout } = useContext(AuthContext);

    return(
        <ScrollView contentContainerStyle={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <View style={styles.main_container}>
                <Text>All drinks</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DrinkScreen;