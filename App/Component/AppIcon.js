import React from 'react';
import {View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppIcon({name, ...otherProps}) {
    return (
        <View>
            <MaterialCommunityIcons name={name} size={45}/>
        </View>
    );
}

export default AppIcon;