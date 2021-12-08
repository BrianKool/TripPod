import React from 'react';
import {StyleSheet, ImageBackground, View, Image, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';

import AppScreen from '../Component/AppScreen';
import AppText from '../Component/AppText';
import AppButton from '../Component/AppButton';



function AccountScreen({navigation, route}) {

    const curUser = {
        id:"user1",
        account : "Brian",
        email: "brian@gmail.com",
        password: "brian",
        profile: require('../Asset/User_Brian.jpg'),
    };
//route.params


    return (
        <AppScreen style={styles.main}>
            <ImageBackground 
                style={styles.wallpaper} 
                source={require('../Asset/Background-1.jpg')}
                blurRadius={0.2}>
            <View style={styles.uppersection}>
                <View style={{flex: 3,}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image style={styles.logo} source={require('../Asset/App_Icon.png')}/> 
                    </TouchableOpacity>                
                </View>
                <View style={{flex: 1, justifyContent:'center',}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Account_Setting", curUser)}>
                    <MaterialCommunityIcons 
                        name='cog-outline'
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
                <AppButton style={styles.buttontext} stylebutton={styles.button} title="Favorite" onPress={() => navigation.navigate("FavoritePlace")}/>
                <AppButton style={styles.buttontext} stylebutton={styles.button} title="Followed"/>
                <AppButton style={styles.buttontext} stylebutton={{width: 300,}} title="Add New Place" onPress={() => navigation.navigate("Add_New_Place")}/>
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
        borderRadius:30,
    },
    button:{
        width: 200,
    },
    buttontext:{
        fontWeight: 'bold',
        fontSize: 30,
    }
})

export default AccountScreen;