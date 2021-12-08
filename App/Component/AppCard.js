import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import Appcolor from '../config/Appcolor';
import AppText from './AppText';


function AppCard({category, title, subtitle, image, swipeToLeft}) {
    return (
        <Swipeable renderRightActions={swipeToLeft}>
            <TouchableHighlight onPress={() => console.log(subtitle + " has been pressed")} underlayColor={"white"}>
                <View style={styles.container}>
                    {isFinite(image)? <Image source={image} style={styles.image}/> :<Image source={{uri: image}} style={styles.image}/>}
                    <AppText style={styles.title}> {title} </AppText>
                    <AppText style={styles.subtitle}> {subtitle} </AppText>  
                    <AppText style={styles.subtitle}> {category} </AppText> 
                </View>
            </TouchableHighlight>
        </Swipeable>        
    );
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:Appcolor.otherColorLite,
        borderRadius:20,
        overflow:"hidden",
        margin: 25,
        paddingBottom: 5,
        borderWidth: 5,
        borderColor: "black",
    }, 
    image:{
        height: 100,
        width: "100%",
    },
    title:{
        fontWeight:"bold",
    },
    subtitle:{
        fontSize:16,
    }
})

export default AppCard;