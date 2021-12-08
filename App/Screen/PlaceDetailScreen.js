import React from 'react';
import {FlatList, StyleSheet, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';


import AppCard from '../Component/AppCard';
import AppScreen from '../Component/AppScreen';
import DataManager from '../config/DataManager'


const getPlaces = (place) => {
    let data = DataManager.getInstance();
    return data.getPlacesByTitle(place);
    
}


function PlaceDetailScreen({navigation, route}) {
    const placeList = getPlaces(route.params)


    return (
        <AppScreen style={styles.container}>
            <ImageBackground 
                style={styles.wallpaper} 
                source={require('../Asset/Background-3.jpg')}
                blurRadius={0.2}
            >
            <View style={styles.uppersection}>
                <View style={{flex: 3,}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image style={styles.logo} source={require('../Asset/App_Icon.png')}/> 
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.secondSection}>
            <FlatList 
                data={placeList}
                keyExtractor = {place => place.placeid.toString()}
                renderItem = {({item}) => 
                        <AppCard
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            category={item.category}
                        />}
                />
            </View>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    wallpaper:{
        flex: 1,
    },
    uppersection:{
        flex: 2,
        flexDirection: 'row',
    },
    secondSection:{
        flex: 8,
    },  
    logo:{
        height: 180,
        width: 180,
        margin: -20,
    },
})


export default PlaceDetailScreen;