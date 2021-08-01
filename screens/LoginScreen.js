import React, { useContext, useState } from 'react';
import {
    Alert,
    Button,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showPwd, setShowPwd] = useState(false);

    const { login } = useContext(AuthContext);

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
            <ScrollView style={styles.main_container}>
                <View style={styles.header}>
                    <Image 
                        source={require('../images/logo-removebg-preview.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.text_header}>Service de livraison d'alcool à domicile</Text>
                </View>
                <View style={styles.body}>
                    <TextInput 
                        style={styles.text_input}
                        placeholder="Adresse e-mail"
                    />
                    <TextInput 
                        style={[styles.text_input, { marginTop: 20 }]}
                        placeholder="Mot de passe"
                        secureTextEntry={showPwd ? false : true}
                        autoCapitalize='none'
                    />
                    <View style={styles.btn_display_pwd}>
                        <TouchableOpacity onPress={() => setShowPwd(!showPwd)}>
                            <Feather 
                                name={showPwd ? "eye" : "eye-off"}
                                size={25} 
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btn_pwd_forgot}>
                        <TouchableOpacity>
                            <Text style={styles.text_pwd_forgot}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.terms_section}>
                        <Text style={styles.text_terms}>
                            En vous connectant, vous acceptez de vous conformer à la {''}
                            <Text 
                                style={styles.btn_text_terms}
                                onPress={() => Alert.alert("Politique de confidentialité")}
                            >
                                Politique de confidentialité
                            </Text>
                            {''} et aux {''}
                            <Text 
                                style={styles.btn_text_terms}
                                onPress={() => Alert.alert("Conditions générales")}
                            >
                                Conditions générales
                            </Text>
                            {''} de {''}
                            <Text style={{ color: '#C0392B' }}>
                                agueragroup
                            </Text>
                            .
                        </Text>
                    </View>
                    <View style={styles.login_section}>
                        <TouchableOpacity style={styles.btn_login}>
                            <Text style={styles.text_btn_login}>Connexion</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.terms_section, { marginBottom: 40 }]}>
                        <Text style={styles.text_terms}>
                            Vous n'avez pas de compte ? {''}
                            <Text 
                                style={styles.btn_text_terms}
                                onPress={() => navigation.push("Sign up")}
                            >
                                Inscrivez-vous
                            </Text>
                            .
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 200,
        height: 100,
    },
    header: {
        flex: 1,
        paddingTop: 40, // to verify
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    text_header: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    body: {
        flex: 3,
        paddingTop: 40, // to verify
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    text_input: {
        borderWidth: 0.5,
        borderColor: '#ABABAB',
        borderRadius: 5,
        height: 40,
        width: '100%',
        paddingHorizontal: 10,
    },
    btn_display_pwd: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10,
    },
    btn_pwd_forgot: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10,
    },
    text_pwd_forgot: {
        color: '#C0392B',
    },
    terms_section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    text_terms: {
        textAlign: 'center',
        color: '#ABABAB',
    },
    btn_text_terms: {
        textDecorationLine: 'underline',
    },
    login_section: {
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_login: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '100%',
        backgroundColor: '#C0392B',
        borderRadius: 5,
    },
    text_btn_login: {
        color: '#FFFFFF',
        fontSize: 20,
    },
});

export default LoginScreen;
