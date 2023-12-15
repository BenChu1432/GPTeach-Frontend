import React from 'react';
import { View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack=createNativeStackNavigator();

const AuthNavigator = () =>(
    <Stack.Navigator>
        <Stack.Screen name={"Welcome"} component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name={"Login"} component={LoginScreen} options={{headerBackTitle: "Welcome"}}/>
        <Stack.Screen name={"Registration"} component={RegisterScreen} options={{headerBackTitle: "Welcome"}}/>
    </Stack.Navigator>
)

export default AuthNavigator;