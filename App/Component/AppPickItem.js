import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';



import AppText from './AppText';


function AppPickItem({icon, itemName, pressEvent}) {
    return (
        <TouchableOpacity onPress={pressEvent}>
            <View style={styles.item}>
                <MaterialCommunityIcons name={icon} size={24} />
                <AppText style={styles.text}>{itemName}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
    },
    text:{
        fontSize: 20,
    },
})

export default AppPickItem;