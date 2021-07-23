import React from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.main_container}>
            <Text>Sign in</Text>
            <Icon name="user" size={25} />
            <Button title="Sign up" onPress={() => navigation.navigate("Sign up")} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
});

export default LoginScreen;