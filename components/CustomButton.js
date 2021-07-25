import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { windowWidth, windowHeight } from '../utils/Dimensions';

const CustomButton = ({title, ...params}) => {
    return(
        <TouchableOpacity style={styles.button_container} {...params}>
            <Text style={styles.button_text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button_container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: windowHeight/20,
        borderRadius: 5,
        backgroundColor: '#009387',
        marginVertical: 10,
    },
    button_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CustomButton;