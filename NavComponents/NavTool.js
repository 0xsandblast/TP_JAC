import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import {HomeScreen, Details} from "../Components/Screens";
import HomeScreen from '../screens/homeScreen'
import Details from '../screens/details'

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator initialRouteName='HomeScreen'>
    <Screen name="HomeScreen" component={HomeScreen} />
    <Screen name="Details" component={Details} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);