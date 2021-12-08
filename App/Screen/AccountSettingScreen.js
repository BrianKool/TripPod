import React from 'react';
import {StyleSheet, ImageBackground, View, Image, Switch, TouchableOpacity, Touchable} from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';

import AppScreen from '../Component/AppScreen';
import AppText from '../Component/AppText';
import AppButton from '../Component/AppButton';



function AccountSettingScreen({navigation, route}) {

    const curUser = route.params;

    return (
        <AppScreen style={styles.main}>
            <ImageBackground 
                style={styles.wallpaper} 
                source={require('../Asset/Background-2.jpg')}
                blurRadius={0.2}>
            <View style={styles.uppersection}>
                <View style={{flex: 3,}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image style={styles.logo} source={require('../Asset/App_Icon.png')}/> 
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, justifyContent:'center',}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                    <MaterialCommunityIcons 
                        name='keyboard-return'
                        size={68}
                        color='black'/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.middlesection}>
                <Image style={styles.logoProfile} source={curUser.profile}/> 
                <AppText style={{fontWeight: 'bold', fontSize: 25,}}>{curUser.account}</AppText>
            </View>
            <View style={styles.bottomsection}>
                <AppButton style={{fontWeight: 'bold', width: 250, fontSize:20,}} stylebutton={{ height: '25%',}} title="Change Profile Picture"/>
                <AppButton style={{fontWeight: 'bold', width: 250, fontSize:20,}} stylebutton={{ height: '25%',}} title="Edit Name"/>
                <View style={styles.switch}>
                    <AppText style={{flex: 1, fontSize: 20,}}>Public Account</AppText>
                    <Switch style={{flex: 1,}}></Switch>
                </View>
                    <TouchableOpacity style={{paddingLeft: 250, paddingTop: 15,}} onPress={() => navigation.navigate("Welcome")}>
                <MaterialCommunityIcons 
                        name='logout'
                        size={48}
                        color='black'/>
                </TouchableOpacity>
                
            </View>
            </ImageBackground>
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection: 'column',
    },
    wallpaper:{
        flex: 1,
    },
    uppersection:{
        flex: 1,
        flexDirection: 'row',
    },
    middlesection:{
        flex: 2.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomsection:{
        flex: 2.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        height: 180,
        width: 180,
        margin: -20,
    },
    logoProfile:{
        height: 180,
        width: 180,
        borderRadius: 30,
    },
    switch:{
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60, 
        marginRight: 55,

    },
})

export default AccountSettingScreen;