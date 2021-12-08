import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'


import WelcomeScreen from '../Screen/WelcomeScreen';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
import AccountSettingScreen from '../Screen/AccountSettingScreen';
import TabNavigator from './TabNavigator';
import PlaceDetailScreen from '../Screen/PlaceDetailScreen';
import NewPlaceScreen from '../Screen/NewPlaceScreen';




const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <AppStack.Screen name="Account_Setting" component={AccountSettingScreen} options={{headerShown: false}}/>
        <AppStack.Screen name="Home" component={TabNavigator} options={{headerShown: false}}/>
        <AppStack.Screen name="Place_Detail" component={PlaceDetailScreen} options={{headerShown: false}}/>
        <AppStack.Screen name="Add_New_Place" component={NewPlaceScreen} options={{headerShown: false}}/>
    </AppStack.Navigator>
)

export default AuthNavigator;