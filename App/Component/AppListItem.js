import React from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';

function AppListItem({image, itemname, description, swipeToLeft}) {
    return (
                <View style={styles.main}>
                    <Image source={image}/>
                    <Text>{itemname}</Text>
                    <Text>{description}</Text>
                </View>
    );
}

const styles= StyleSheet.create({
    main:{
        flex: 1,
    },
})
export default AppListItem;