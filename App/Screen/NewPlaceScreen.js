import React, {useState} from 'react';
import {StyleSheet, ImageBackground, View, Image, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


import AppPicker from '../Component/AppPicker';
import AppScreen from '../Component/AppScreen';
import AppTextInput from '../Component/AppTextInput';
import AppButton from '../Component/AppButton';
import AppText from '../Component/AppText';
import DataManager from '../config/DataManager';
import AppIcon from '../Component/AppIcon';




const category = [
    {
        value: 1,
        name: "place",
        icon: "city" 
    },
    {
        value:2,
        name: "restaurant",
        icon: "silverware-fork-knife"
    }
]

function NewPlaceScreen({navigation}) {

    const[itemPicked, setitemPicked] = useState();
    const[title, setTitle] = useState("");
    const[subTitle, setSubTitle] = useState("");
    const[image, setImage] = useState(null);
    const[titleError, setTitleError] = useState("");
    const[subTitleError, setSubTitleError] = useState("");
    const[imageError, setImageError] = useState(""); 
    const[categoryError, setCategoryError] = useState("");

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();


        if(pickerResult.cancelled === true){
            return;
        }
        setImage({path: pickerResult.uri});
        

        console.log(pickerResult);
      }


    const doErrorCheck = () => {
        setTitleError(title.length > 0 ? "": "Please set a valid city name");
        setSubTitleError(subTitle.length > 0 ? "": "Please set a valid place name");
        setCategoryError(itemPicked? "": "Please set a valid category");
        setImageError(image? "":"Please Pick an image");
        return ((title.length>0) && (subTitle.length>0) && (itemPicked) && (image) ? true:false);
    }

    const addPlace = () => {
        let data = DataManager.getInstance();
        let userID = data.getUserID();

        const places = data.places;
        const placeID = places.length+1;
        
        const newPlace = {
            userid: userID,
            placeid: placeID, 
            title: title, 
            category: itemPicked.name, 
            subtitle: subTitle, 
            description: "haha",
            image: image.path,
        }

        console.log(title, subTitle, itemPicked.name);
        console.log(newPlace);
        data.addPlace(newPlace);
    }

    return (
        <AppScreen>
            <ImageBackground 
                style={styles.wallpaper} 
                source={require('../Asset/Background-2.jpg')}
                blurRadius={0.3}>
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
                <View  style={styles.secondSection}>
                   <AppTextInput
                    icon="map-marker"
                    placeholder="City"
                    value={title}
                    onChangeText={(inputText) => setTitle(inputText)}
                    />

                    {titleError.length>0 ? <AppText style={{margin: 5, color:'red', fontSize: 16,}}>{titleError}</AppText> : <></>}

                    <AppTextInput
                        icon="lead-pencil"
                        placeholder="Place Name"
                        value={subTitle}
                        onChangeText={(inputText) => setSubTitle(inputText)}
                    />

                    {subTitleError.length>0 ? <AppText style={{margin: 5, color:'red', fontSize: 16,}}>{subTitleError}</AppText> : <></>}     

                    <AppPicker 
                        selectedItem={itemPicked}
                        onSelectedItem={item => setitemPicked(item)}
                        data={category} 
                        icon="apps" 
                        pickerName="Option"/> 

                    {categoryError.length>0 ? <AppText style={{margin: 5, color:'red', fontSize: 16,}}>{categoryError}</AppText> : <></>}

                    <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                        <AppIcon name="camera" size={80} />
                        {image && <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/>}
                    </TouchableOpacity>

                    {imageError.length>0 ? <AppText style={{margin: 5, color:'red', fontSize: 16,}}>{imageError}</AppText> : <></>}

                    <AppButton
                        title="Add Place"
                        onPress=
                        

                        {() => {
                            if (doErrorCheck()) {
                                addPlace();
                                navigation.navigate("Home");};}
                           
                            }
                        
                        />
                </View>  
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    wallpaper:{
        flex: 1,
    },
    uppersection:{
        flex: 0.2,
        flexDirection: 'row',
        marginBottom: 100,
    },
    logo:{
        height: 180,
        width: 180,
        margin: -20,
    },
    secondSection:{
        alignItems: 'center',
    },
    imageButton:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
})


export default NewPlaceScreen;