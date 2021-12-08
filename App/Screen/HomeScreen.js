import React from 'react';
import {StyleSheet, ImageBackground, View, Image, TouchableOpacity, Alert} from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';


import AppScreen from '../Component/AppScreen';
import AppText from '../Component/AppText';
import AppButton from '../Component/AppButton';
import AppTextInput from '../Component/AppTextInput';





function HomeScreen({navigation, route}) {

    const schema = Yup.object().shape(
        {
            searchContent: Yup.string().min(4).max(8).label("SearchContent"),
        }
    )

    Alert.alert(route.params.message)

    const curUser = route.params.thisUser;
    console.log("this is home page")
    console.log(curUser)

    return (
        <AppScreen>
            <ImageBackground 
                style={styles.wallpaper} 
                source={require('../Asset/Background-3.jpg')}
                blurRadius={0.2}
            >
            <View style={styles.section1}>
                <View style={{flex: 2,}}>
                        <Image style={styles.logo} source={require('../Asset/App_Icon.png')}/> 
                </View>
                <View style={{flex: 1, justifyContent:'center',}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Account", curUser)}>
                        <Image style={styles.logo} source={require('../Asset/Account.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.section2}>
                <Formik
                    initialValues={{searchContent:'',}}
                    onSubmit={values => console.log(values)}
                    validationSchema={schema}>
                {({handleChange, handleSubmit}) => (
                    <>
                    <AppTextInput 
                        placeholder="Search by City,
                                        Restaurant, palcce..." 
                        onChangeText={handleChange("searchContent")}
                    />
                    <TouchableOpacity onPress={handleSubmit}>
                        <MaterialCommunityIcons 
                            name='magnify' 
                            size={50}
                            color='black'
                        />
                    </TouchableOpacity>
                    </>
                )}                
                </Formik>
            </View>
            <View style={styles.section3}>
                <AppText style={{fontSize: 50,}}>Favorite</AppText>
                <View style={styles.buttoncontainer}>
                    <AppButton stylebutton={styles.button} style={styles.buttontext} title="Sydney" onPress={() => navigation.navigate("Place_Detail", "Sydney")}/>
                    <AppButton stylebutton={styles.button} style={styles.buttontext} title="Tokyo" onPress={() => navigation.navigate("Place_Detail", "Tokyo")}/>
                </View>
                <View style={styles.buttoncontainer}>
                    <AppButton stylebutton={styles.button} style={styles.buttontext} title="Cairns" onPress={() => navigation.navigate("Place_Detail", "Cairns")}/>
                    <AppButton stylebutton={styles.button} style={styles.buttontext} title="Melbourne" onPress={() => navigation.navigate("Place_Detail", "Melbourn")}/>
                </View>   
            </View>
            <View style={styles.section4}>
                <AppText style={{fontSize: 50,}}>Suggestion</AppText>
                <View style={styles.buttoncontainer}>
                    <AppButton stylebutton={styles.button} style={styles.buttontext} title="Byron Bay" onPress={() => navigation.navigate("Place_Detail", "Byron Bay")}/>
                    <AppButton stylebutton={styles.button} style={styles.buttontext} title="New Castle" onPress={() => navigation.navigate("Place_Detail", "New Castle")}/>
                </View>
                <View style={styles.buttoncontainer}>
                    <AppButton stylebutton={styles.button} style={styles.buttontext} title="Peru" onPress={() => navigation.navigate("Place_Detail", "Peru")}/>
                    <AppButton stylebutton={styles.button} style={styles.buttontext} title="Taipei" onPress={() => navigation.navigate("Place_Detail", "Taipei")}/>
                </View>
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
        flex: 1.3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    section2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    section3:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2.5,
        flexDirection: 'column',
    },
    section4:{
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    buttoncontainer:{
        flex: 1, 
        flexDirection: 'row', 
        opacity: 0.5,
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
        width: 150,
        height: 70,
        backgroundColor: 'white',
        borderColor: 'black',
    },
    buttontext:{
        fontSize: 20,
    },
})

export default HomeScreen;