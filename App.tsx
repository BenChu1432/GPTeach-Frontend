import React from "react";
import {
    StyleSheet,
    Text
} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from "@react-navigation/native";
import GrammarPickerScreen from "./app/screens/GrammarPickerScreen";
import LibraryScreen from "./app/screens/LibraryScreen";
import NavigationBar from "./app/components/NavigationBar";
import { createDrawerNavigator } from '@react-navigation/drawer';
import FoundationScreen from "./app/screens/FoundationScreen";
import ComingSoonScreen from "./app/screens/ComingSoonScreen";
import LoginScreen from "./app/screens/LoginScreen";
import DrawerContent from "./app/components/DrawerContent";
import CustomizedFormScreen from "./app/screens/CustomizedFormScreen";
import SentenceStructurePickerScreen from "./app/screens/SentenceStructurePickerScreen";
import SignupScreen from "./app/screens/SignupScreen";
import SignupSuccessScreen from "./app/screens/SignupSuccessScreen";
import ChatbotScreen from "./app/screens/ChatbotScreen";
import FunctionalitiesSettingScreen from "./app/screens/FunctionalitiesSettingScreen";
import {AppProvider} from "./app/context/AppContext";
import languageEnrichmentInputScreen from "./app/screens/LanguageEnrichmentInputScreen";
import ThemeBasedVsCustomized from "./app/screens/ThemeBasedVsCustomized";
import CustomizedLanguageEnrichmentScreen from "./app/screens/CustomizedLanguageEnrichmentScreen";

const Stack=createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function  MainStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={FoundationScreen} options={{ header: () => <NavigationBar/> }}/>
            <Stack.Screen name="LiteraryDevices" component={LibraryScreen} initialParams={{ paramKey: "Literary Devices"}} options={{ header: () => <NavigationBar/> }}/>
            <Stack.Screen name="SentenceStructure" component={SentenceStructurePickerScreen} options={{ header: () => <NavigationBar/>}}/>
            <Stack.Screen name="ThemebasedLanguageEnrichment" component={LibraryScreen} initialParams={{ paramKey: "Language Enrichment"}} options={{ header: () => <NavigationBar/> }}/>
            <Stack.Screen name="Register" component={LibraryScreen} initialParams={{ paramKey: "Register"}} options={{ header: () => <NavigationBar/> }}/>
            <Stack.Screen name="Grammar" component={GrammarPickerScreen} options={{ header: () => <NavigationBar/> }} />
            <Stack.Screen name="Library" component={LibraryScreen} options={{ header: () => <NavigationBar />}} />
            <Stack.Screen name="CustomizedForm" component={CustomizedFormScreen} options={{ header: () => <NavigationBar />}} />
            <Stack.Screen name="ThemeBasedVsCustomized" component={ThemeBasedVsCustomized} initialParams={{ paramKey: "Theme-Based Vs Customized"}} options={{ header: () => <NavigationBar />}} />
            <Stack.Screen name="LanguageEnrichmentInput" component={languageEnrichmentInputScreen} options={{ header: () => <NavigationBar />}} />
            <Stack.Screen name="Chatbot" component={ChatbotScreen} options={{ header: () => <NavigationBar />}} />
            <Stack.Screen name="Setting" component={FunctionalitiesSettingScreen} options={{ header: () => <NavigationBar />}}/>
            <Stack.Screen name="CustomizedLanguageEnrichmentScreen" component={CustomizedLanguageEnrichmentScreen} options={{ header: () => <NavigationBar />}}/>
        </Stack.Navigator>
    );
}

function  AuthenticationNavigator() {
    return (
        <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name="Logout" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SignupSuccess" component={SignupSuccessScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}


export default function App() {
    return(
        <AppProvider>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="Home" component={MainStackNavigator} options={{headerShown: false}}/>
                    <Drawer.Screen name="Auth" component={AuthenticationNavigator} options={{headerShown: false}}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </AppProvider>
    )
}


const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        width:'100%',
    },
})