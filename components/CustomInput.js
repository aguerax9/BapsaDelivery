import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { windowWidth, windowHeight } from '../utils/Dimensions';

const CustomInput = ({inputValue ,placeholderText, ...params}) => {
    return(
        <View style={styles.input_container}>
            <TextInput
                style={styles.input_text}
                value={inputValue}
                placeholder={placeholderText}
                {...params}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input_container: {
        justifyContent: 'center',
        paddingLeft: 5,
        width: '90%',
        height: windowHeight/25,
        borderWidth: 1,
        borderColor: '#A9ACB0',
        borderRadius: 5,
    },
    input_text: {
        fontSize: 18,
    },
});

export default CustomInput;