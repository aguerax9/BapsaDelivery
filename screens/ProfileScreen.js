import React, { useContext } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

const ProfileScreen = () => {

    const { user, logout } = useContext(AuthContext);

    return(
        <ScrollView contentContainerStyle={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <View style={styles.main_container}>
                <Text>{user.email}</Text>
                <Button title="logout" onPress={() => logout()} />
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

export default ProfileScreen;