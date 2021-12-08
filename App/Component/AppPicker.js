import React ,{useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './AppText';
import AppPickItem from './AppPickItem';
import AppScreen from './AppScreen';





function AppPicker({data, icon, pickerName, selectedItem, onSelectedItem}) {

    const [visible, setVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback  onPress={() => setVisible(true)}>
                <View style={styles.picker}>
                    <MaterialCommunityIcons name={icon} size={24} />
                    <AppText style={styles.text}>{selectedItem? selectedItem.name:pickerName}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={24}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={visible} animationType="slide">
                <AppScreen>
                    <Button onPress={() => setVisible(false)} title="close"/>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => 
                                <AppPickItem 
                                    pressEvent={() => {
                                        setVisible(false); 
                                        onSelectedItem(item)}}
                                    icon={item.icon}
                                    itemName={item.name}/>
                            }/>                          
                </AppScreen>
            </Modal>
        </>
    );  
}

const styles = StyleSheet.create({
    picker:{
        backgroundColor: 'white',
        margin: 10,
        flexDirection: 'row',
        height: 40,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 2.5,
        alignItems: 'center',
        padding: 5,
    },
    text:{
        paddingLeft: 20,
        paddingRight:220,
    }
})

export default AppPicker;