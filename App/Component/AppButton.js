import React from 'react';
import {TouchableOpacity, Text, Alert, StyleSheet, Button} from 'react-native';

import Appcolor from '../config/Appcolor.js';

function AppButton({title, onPress, style, stylebutton}) {

    const clickhandler = () => { alert(alertSent);}

    return (
        <TouchableOpacity style={[styles.button1, stylebutton]} onPress={onPress}>
            <Text style={[styles.text, style]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    button1: {
        margin: 5,
        borderWidth: 2,
        borderRadius:15,
        backgroundColor: Appcolor.button,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Appcolor.text1,
    }
})

export default AppButton;