import React, { useContext, useState } from 'react';
import {
    Alert,
    ActivityIndicator,
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

const SignupScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('')
    const [showPwd, setShowPwd] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const register = () => {
        if (email.length != 0 && pwd.length != 0 && confirmPwd.length != 0) {
            if (pwd === confirmPwd) {
                setLoading(true)
                auth()
                .createUserWithEmailAndPassword(email, pwd)
                .catch(error => {
                    console.log(error.message)
                    setLoading(false)
                    setError(true)
                    if (error.code === "auth/invalid-email") {
                        setErrorMsg("Cette adresse e-mail n'est pas valide.")
                    }
                    if (error.code === "auth/email-already-in-use") {
                        setErrorMsg("Cette adresse e-mail existe déjà.")
                    }
                    if (error.code === "auth/weak-password") {
                        setErrorMsg("Le mot de passe est trop vulnérable.")
                    }
                });
            } else {
                setError(true)
                setErrorMsg("Vérifiez le mot de passe.")
            }
        } else {
            setError(true)
            console.log("Veuillez remplir tous les champs.");
            setErrorMsg("Veuillez remplir tous les champs.")
        }
    }

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
            <ScrollView style={styles.main_container}>
                <View style={styles.header}>
                    <Image 
                        source={require('../images/logo-removebg-preview.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.text_header_msg}>Devenez membre BapsaDelivery et accédez à un large catalogue de boissons alcoolisées de première qualité.</Text>
                </View>
                <View style={styles.body}>
                    { error? (<Text style={styles.text_error}>{errorMsg}</Text>) : null }
                    <TextInput 
                        style={[styles.text_input, { marginTop: 20 }]}
                        placeholder="Nom"
                    />
                    <TextInput 
                        style={[styles.text_input, { marginTop: 20 }]}
                        placeholder="Prénom"
                    />
                    <TextInput 
                        style={[styles.text_input, { marginTop: 20 }]}
                        placeholder="Date de naissance"
                    />
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
                    <TextInput 
                        style={[styles.text_input, { marginTop: 20 }]}
                        value={confirmPwd}
                        placeholder="Confirmer le mot de passe"
                        secureTextEntry={showPwd ? false : true}
                        autoCapitalize='none'
                        onChangeText={(input) => {
                            setConfirmPwd(input)
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
                            En vous inscrivant, vous acceptez de vous conformer à la {''}
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
                        <TouchableOpacity style={styles.btn_login} onPress={() => register()}>
                            { loading ? (<ActivityIndicator size='small' color='#FFFFFF' />) :  <Text style={styles.text_btn_login}>S'inscrire</Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.terms_section, { marginBottom: 40 }]}>
                        <Text style={styles.text_terms}>
                            Vous avez déjà un compte ? {''}
                            <Text 
                                style={styles.btn_text_terms}
                                onPress={() => navigation.goBack()}
                            >
                                Connectez-vous
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
        // marginBottom: 20,
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
    text_header_msg: {
        textAlign: 'center',
        color: '#ABABAB',
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
        paddingTop: 30,
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

export default SignupScreen;
