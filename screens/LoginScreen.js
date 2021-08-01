import React, { useContext, useEffect, useState } from 'react';
import {
    ActivityIndicator,
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

import auth from '@react-native-firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showPwd, setShowPwd] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            setError(false);
            setEmail('');
            setPwd('');
        });
    }, []);

    const login = (email, pwd) => {
        if (email.length != 0 && pwd.length != 0) { // needed for android version
            setLoading(true)
            auth()
                .signInWithEmailAndPassword(email, pwd)
                .catch(error => {
                    console.log(error.message)
                    setLoading(false)
                    setError(true)
                    if (error.code !== "auth/too-many-requests") {
                        setErrorMsg("Votre adresse e-mail ou votre mot de passe n'est pas correct(e).")
                    } else {
                        setErrorMsg("Veuillez réessayer dans quelques instants.")
                    }
                });
        } else {
            setError(true)
            console.log("Veuillez remplir tous les champs.");
            setErrorMsg("Veuillez remplir tous les champs.")
        }
    }

    return(
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
        >
            <ScrollView style={styles.main_container}>
                <View style={styles.header}>
                    <Image 
                        source={require('../images/logo-removebg-preview.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.text_header}>Service de livraison d'alcool à domicile</Text>
                </View>
                <View style={styles.body}>
                    { error? (<Text style={styles.text_error}>{errorMsg}</Text>) : null }
                    <TextInput 
                        style={[styles.text_input, { marginTop: 20 }]}
                        value={email}
                        placeholder="Adresse e-mail"
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(input) => {
                            setEmail(input)
                            setError(false)
                        }}
                    />
                    <TextInput 
                        style={[styles.text_input, { marginTop: 20 }]}
                        value={pwd}
                        placeholder="Mot de passe"
                        secureTextEntry={showPwd ? false : true}
                        autoCapitalize='none'
                        onChangeText={(input) => {
                            setPwd(input)
                            setError(false)
                        }}
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
                        <TouchableOpacity style={styles.btn_login} onPress={() => login(email, pwd)}>
                            { loading ? (<ActivityIndicator size='small' color='#FFFFFF' />) :  <Text style={styles.text_btn_login}>Connexion</Text>}
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
    text_error: {
        textAlign: 'center',
        color: 'red',
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
