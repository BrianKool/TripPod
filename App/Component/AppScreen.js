import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants'
// the Constant has every diamension for the screen so we can set style:{margintop: Constants.statusBarHeight}
// which can make component won't cut by different type of phonescreen



function AppScreen({children, style}) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginBottom: Constants.statusBarHeight,
        backgroundColor: 'lightblue',
    },

})

export default AppScreen;