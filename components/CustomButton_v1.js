import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { windowWidth, windowHeight } from '../utils/Dimensions';

const CustomButton_v1 = ({title, ...params}) => {
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
        // height: windowHeight/20,
        height: Platform.OS === 'ios' ? windowHeight/20 : windowHeight/15,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#009387',
        // backgroundColor: '#009387',
        marginVertical: 10,
    },
    button_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#009387',
    },
});

export default CustomButton_v1;