import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppScreen from '../Component/AppScreen.js';
import AppText from '../Component/AppText.js';
import AppButton from '../Component/AppButton.js';


function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground 
                style={styles.wallpaper} 
                source={require('../Asset/Background-1.jpg')}
                blurRadius={0.2}
            >
            <View style={styles.section1}>
                <AppText style={{fontSize: 20, fontWeight: 'bold',}}>TripPod</AppText>
                <Image style={styles.logo} source={require('../Asset/App_Icon.png')}/> 
                <AppText style={{fontSize: 20, fontWeight: '300'}}>Travel without Trouble</AppText>
            </View>
            <View style={styles.section2}>
                <AppButton stylebutton={styles.button} style={{fontWeight: 'bold', fontSize: 50,}} title="Sign In" onPress={() => navigation.navigate("Login")}></AppButton>
                <AppButton stylebutton={styles.button} style={{fontWeight: 'bold', fontSize: 50}} title="Sign Up" onPress={() => navigation.navigate("Register")}/>
            </View>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: 'lightblue',
    },
    section1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        height: 180,
        width: 180,
        margin: -20,
    },
    wallpaper:{
        flex: 1,
    },
    button:{
        flex: 0.2,
        width: 250,
        height: 70,
        backgroundColor: 'white',
        borderColor: 'black',
    },
})

export default WelcomeScreen;