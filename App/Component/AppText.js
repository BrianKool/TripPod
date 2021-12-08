import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import Appcolor from '../config/Appcolor.js';

function AppText({children, style}) {
    return (
        <Text style={[styles.textColor, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    textColor: {
        color: Appcolor.text1,
    }
})

export default AppText;