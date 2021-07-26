import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {

    const { logout } = useContext(AuthContext);

    return(
        <View>
            <Text>Welcome</Text>
            <Button title="logout" onPress={() => logout()} />
        </View>
    );
}

export default HomeScreen;