import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './App/Screen/WelcomeScreen.js';
import LoginScreen from './App/Screen/LoginScreen.js';
import RegisterScreen from './App/Screen/RegisterScreen.js';
import AccountScreen from './App/Screen/AccountScreen.js';
import AccountSettingScreen from './App/Screen/AccountSettingScreen.js';
import HomeScreen from './App/Screen/HomeScreen.js';
import AuthNavigator from './App/Navigation/AuthNavigator.js';
import FavoritePlaceScreen from './App/Screen/FavoritePlaceScreen.js';
import NewPlaceScreen from './App/Screen/NewPlaceScreen.js';

export default function App() {
  return (
    //<WelcomeScreen/>
    //<LoginScreen/>
    //<RegisterScreen/>
    //<AccountScreen/>
    //<AccountSettingScreen/>
    //<HomeScreen/>
    //<FavoritePlaceScreen/>
    //<NewPlaceScreen/>
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}
