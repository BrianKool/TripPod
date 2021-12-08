import React from 'react';
import {View, Image, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';



import AppButton from '../Component/AppButton.js';
import AppScreen from '../Component/AppScreen.js';
import AppText from '../Component/AppText.js';
import AppTextInput from '../Component/AppTextInput.js';
import DataManager from '../config/DataManager.js';




    const Member = [
        {
            id:"user1",
            account : "Brian",
            email: "brian@gmail.com",
            password: "brian",
            profile: require('../Asset/User_Brian.jpg'),
        },
        {
            id:"user2",
            account : "Kobe",
            email: "kobe@gmail.com",
            password: "kobe",
            profile: require('../Asset/User_Kobe.jpg'),
        },
    ];
    const validateUser = ({email, password}) => {
        return(
            Member.filter((user) => user.email === email && user.password === password).length>0
        );
    };

    const getUser = ({email}) => {
        return (
            Member.find((user) => user.email === email)
        );
    ;}

    const createCredential = ({email}) => {
        let data = DataManager.getInstance();
        let userID = getUser({email}).id;
        data.setUserID(userID);
        
    }
    
    const schema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(10).label("Password"),
    })



function LoginScreen({navigation}) {

    return (
        <AppScreen>
            <ImageBackground 
                style={styles.wallpaper} 
                source={require('../Asset/Background-2.jpg')}
                blurRadius={0.2}
                >
            <View style={styles.section1}>
                <AppText style={{fontSize: 20, fontWeight: 'bold',}}>TripPod</AppText>
                <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                    <Image style={styles.logo} source={require('../Asset/App_Icon.png')}/> 
                </TouchableOpacity>
            </View>
            <View style={styles.section2}>
                <Formik 
                    initialValues={{email:'', password:''}}
                    onSubmit={(values, {resetForm} )=> {
                        if(validateUser(values)){
                            const curUser = getUser(values);
                            createCredential(values);
                            resetForm();
                            navigation.navigate("Home", {
                                            screen: "Home",
                                            params: {message: "welcome back " + curUser.account + " !!" , thisUser: curUser}});
                        }
                        else{
                            resetForm();    
                            alert("Invalid Login Detail")
                        }
                        }}
                    validationSchema={schema}
                >
                {({handleChange, handleSubmit, errors}) => (
                    <>
                    <AppTextInput 
                        icon='email'
                        placeholder="Email Address" 
                        keyboardType="email-address"
                        textContentType="emailAddress" 
                        onChangeText = {handleChange("email")}
                    />
                    <AppText>{errors.email}</AppText>
                    <AppTextInput 
                        icon='key'
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        onChangeText = {handleChange("password")}
                    />
                    <AppText>{errors.password}</AppText>
                    <AppButton 
                        stylebutton={{flex: 0.1, width:250,}} 
                        style={{fontSize: 25,}} 
                        title='Log In' 
                        onPress={handleSubmit}/>
                    </>
                )}        
                </Formik>
                
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
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section2:{
        flex: 0.7,
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
})

export default LoginScreen;