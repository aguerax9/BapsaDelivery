import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const SignupScreen = () => {
    return(
        <SafeAreaView style={styles.main_container}>
            <Text>Sign up</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
});

export default SignupScreen;