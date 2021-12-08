import React,{useState} from 'react';
import {FlatList, StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';


import AppCard from '../Component/AppCard';
import AppScreen from '../Component/AppScreen';
import DataManager from '../config/DataManager'
import AppIcon from '../Component/AppIcon';


const getPlaces = () => {
    let data = DataManager.getInstance();
    let userID = data.getUserID();
    return data.getPlaces(userID);
    
}

const placeList = getPlaces();

const handleDeletet = (place) => {
    const newPlaceList = placeList.filter(place => place.placeid !== place.placeid);
    set(newPlaceList);
}


function FavoritePlaceScreen(props) {

    const placeList = getPlaces();
    const [places, setPlaces] = useState(placeList);

    const handleDeletet = (place) => {
        const newPlaceList = places.filter(item => item.placeid !== place.placeid);
        setPlaces(newPlaceList);
    }

    console.log("the new places is: ");
    console.log(places);


    return (
        <AppScreen style={styles.container}>
            <ImageBackground 
                style={styles.wallpaper} 
                source={require('../Asset/Background-3.jpg')}
                blurRadius={0.2}
            >
            <FlatList 
                data={places}
                keyExtractor = {place => place.placeid.toString()}
                renderItem = {({item}) => 
                        <AppCard
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            category={item.category}
                            swipeToLeft = {() => (
                                <TouchableOpacity onPress={() => [handleDeletet(item), console.log(item.title + " delete")]}>
                                    <View style={{justifyContent:'center'}}>
                                        <AppIcon name='delete'/>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />}
                />
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
})


export default FavoritePlaceScreen;