import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.icon} name = {icon}/>
            <TextInput style={styles.TextInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        flexDirection: 'row',
        borderColor: '#7EA6E0',
        borderWidth: 7,
        borderRadius: 10,
        width: '80%',
        height: 50,
    },
    textInput: {
        fontSize: 10,
        margin: 30,
        //height: Platform.OS == 'android' ? 40 : 20,

    },
    icon:{
        fontSize:35,
    },
})

export default AppTextInput;