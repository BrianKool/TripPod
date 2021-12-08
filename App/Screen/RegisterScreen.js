import React from 'react';
import {View, Image, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';


import AppButton from '../Component/AppButton.js';
import AppScreen from '../Component/AppScreen.js';
import AppText from '../Component/AppText.js';
import AppTextInput from '../Component/AppTextInput.js';
import { string } from 'yup/lib/locale';


function RegisterScreen({navigation}) {

    const schema = Yup.object().shape(
        {
            account: Yup.string().required().label("Account"),
            email: Yup.string().required().email().label("Email"),
            password: Yup.string().required().min(4).max(10).label("Password"),
        }
    )

    return (
        <AppScreen>
            <ImageBackground 
                style={styles.wallpaper} 
                source={require('../Asset/Background-3.jpg')}
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
                    initialValues={{account:'', email:'', password:''}}
                    onSubmit={values => {
                                console.log(values);
                                navigation.navigate("Home")}}
                    validationSchema={schema}
                >
                    {({handleChange, handleSubmit, errors}) => (
                        <>
                        <AppTextInput 
                            icon='account'
                            placeholder="Account Name"
                            onChangeText={handleChange("account")} 
                        />
                        <AppText>{errors.account}</AppText>
                        <AppTextInput 
                            icon='email'
                            placeholder="Email Address" 
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            onChangeText={handleChange("email")}
                        />
                        <AppText>{errors.email}</AppText>
                        <AppTextInput 
                            icon='key'
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            onChangeText={handleChange("password")}
                        />
                        <AppText>{errors.password}</AppText>
                        <AppButton stylebutton={{width:250}} title='Register' onPress={handleSubmit}/>
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

export default RegisterScreen;