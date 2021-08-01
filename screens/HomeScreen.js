import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {

    const { user, logout } = useContext(AuthContext);

    return(
        <View>
            <Text>Welcome {user.email}</Text>
            <Button title="logout" onPress={() => logout()} />
        </View>
    );
}

export default HomeScreen;