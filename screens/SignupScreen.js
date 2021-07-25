import React, { useState } from 'react';
import {
    Button,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomButton_v1 from '../components/CustomButton_v1';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return(
        <View style={styles.main_container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register now</Text>
            </View>
            <KeyboardAvoidingView style={styles.footer} behavior='padding'>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.input_section}>
                    <FontAwesome name="user-o" size={20} />
                    <CustomInput
                        inputValue={email}
                        placeholderText="Your email"
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(input) => setEmail(input)}
                    />
                </View>

                <Text style={[styles.text_footer, {marginTop: 20}]}>Password</Text>
                <View style={styles.input_section}>
                    <Feather name="lock" size={20} />
                    <CustomInput
                        inputValue={pwd}
                        placeholderText="Your password"
                        secureTextEntry={secureTextEntry}
                        autoCapitalize='none'
                        onChangeText={(input) => setPwd(input)}
                    />
                </View>

                <Text style={[styles.text_footer, {marginTop: 20}]}>Confirm password</Text>
                <View style={styles.input_section}>
                    <Feather name="lock" size={20} />
                    <CustomInput
                        inputValue={cpwd}
                        placeholderText="Your password"
                        secureTextEntry={secureTextEntry}
                        autoCapitalize='none'
                        onChangeText={(input) => setCpwd(input)}
                    />
                </View>
                <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)} >
                    <Text style={styles.text_pwd}>Show/Hide password</Text>
                </TouchableOpacity>

                <View style={styles.button_section}>
                    <CustomButton title="Sign up" />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: Platform.OS === 'ios' ? 'flex-start' : 'flex-end',
        paddingTop: Platform.OS === 'ios' ? 50 : 0,
        paddingHorizontal: 20,
        paddingBottom: Platform.OS === 'ios' ? 0 : 30,
    },
    footer: {
        flex: 6,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    text_pwd: {
        color: '#006ee6',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'right',
    },
    input_section: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button_section: {
        marginTop: 50,
    }
});

export default LoginScreen;