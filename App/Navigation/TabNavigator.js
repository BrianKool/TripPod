import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import HomeScreen from '../Screen/HomeScreen';
import AccountScreen from '../Screen/AccountScreen';
import FavoritePlaceScreen from '../Screen/FavoritePlaceScreen';

import AppIcon from '../Component/AppIcon'

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (

    <AppTab.Navigator>
        <AppTab.Screen name="Home" component={HomeScreen}  options={{tabBarIcon: () => <AppIcon name="home-circle"/>}}/>
        <AppTab.Screen name="Account" component={AccountScreen} options={{tabBarIcon: () => <Image style={{height: 80, width: 80}} source={require('../Asset/Account.png')} />}}/>
        <AppTab.Screen name="FavoritePlace" component={FavoritePlaceScreen} options={{tabBarIcon: () => <AppIcon name="star-circle"/>}}/>
    </AppTab.Navigator>
)

export default TabNavigator;