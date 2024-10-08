import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, AppRegistry, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import GrammarPickerScreen from "./app/screens/GrammarPickerScreen";
import LibraryScreen from "./app/screens/LibraryScreen";
import NavigationBar from "./app/components/NavigationBar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FoundationScreen from "./app/screens/FoundationScreen";
import LoginScreen from "./app/screens/LoginScreen";
import DrawerContent from "./app/components/DrawerContent";
import CustomizedFormScreen from "./app/screens/CustomizedFormScreen";
import SentenceStructurePickerScreen from "./app/screens/SentenceStructurePickerScreen";
import SignupScreen from "./app/screens/SignupScreen";
import SignupSuccessScreen from "./app/screens/SignupSuccessScreen";
import ChatbotScreen from "./app/screens/ChatbotScreen";
import FunctionalitiesSettingScreen from "./app/screens/FunctionalitiesSettingScreen";
import languageEnrichmentInputScreen from "./app/screens/LanguageEnrichmentInputScreen";
import ThemeBasedVsCustomized from "./app/screens/ThemeBasedVsCustomized";
import CustomizedLanguageEnrichmentScreen from "./app/screens/CustomizedLanguageEnrichmentScreen";
import appConfig from "./app.json";
import SubscriptionScreen from "./app/screens/SubscriptionScreen";
import { StripeProvider } from "@stripe/stripe-react-native";
import { Provider, useDispatch } from "react-redux";
import { persistor, store } from "./app/redux/app/store";
import { ToastOptions, ToastProvider, useToast } from "react-native-toast-notifications";
import { MaterialIcons } from "@expo/vector-icons";
import { renderToast } from "./app/components/Toast";
import ToastRef from "react-native-toast-notifications";
import { useAppSelector } from "./app/redux/app/hooks";
import appSlice from "./app/redux/slices/appSlice";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function MainStackNavigator() {
    // Not layout file so have to do it here
    const toastObject = useAppSelector((s) => s.appSlice.toast);
    const toast = useToast();

    useEffect(() => {
        if (toastObject.message) {
            toast.show("", {
                type: toastObject.type,
                data: { message: toastObject.message }, // Pass the message here
            });
        }
    }, [toastObject.message]);

    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={FoundationScreen} options={{ header: () => <NavigationBar /> }} />
            <Stack.Screen name="LiteraryDevices" component={LibraryScreen} initialParams={{ paramKey: "Literary Devices" }} options={{ header: () => <NavigationBar /> }} />
            <Stack.Screen name="SentenceStructure" component={SentenceStructurePickerScreen} options={{ header: () => <NavigationBar /> }} />
            <Stack.Screen
                name="ThemebasedLanguageEnrichment"
                component={LibraryScreen}
                initialParams={{ paramKey: "Language Enrichment" }}
                options={{ header: () => <NavigationBar /> }}
            />
            {/* <Stack.Screen name="Register" component={LoginScreen} initialParams={{ paramKey: "Register" }} options={{ header: () => <NavigationBar /> }} /> */}
            <Stack.Screen name="Grammar" component={GrammarPickerScreen} options={{ header: () => <NavigationBar /> }} />
            <Stack.Screen name="Library" component={LibraryScreen} options={{ header: () => <NavigationBar /> }} />
            <Stack.Screen name="CustomizedForm" component={CustomizedFormScreen} options={{ header: () => <NavigationBar /> }} />
            <Stack.Screen
                name="ThemeBasedVsCustomized"
                component={ThemeBasedVsCustomized}
                initialParams={{ paramKey: "Theme-Based Vs Customized" }}
                options={{ header: () => <NavigationBar /> }}
            />
            <Stack.Screen name="LanguageEnrichmentInput" component={languageEnrichmentInputScreen} options={{ header: () => <NavigationBar /> }} />
            <Stack.Screen name="Chatbot" component={ChatbotScreen} options={{ header: () => <NavigationBar /> }} />
            <Stack.Screen name="Setting" component={FunctionalitiesSettingScreen} options={{ header: () => <NavigationBar /> }} />
            <Stack.Screen name="CustomizedLanguageEnrichmentScreen" component={CustomizedLanguageEnrichmentScreen} options={{ header: () => <NavigationBar /> }} />
        </Stack.Navigator>
    );
}

function AuthenticationNavigator() {
    return (
        <Stack.Navigator initialRouteName={"Main"}>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignupSuccess" component={SignupSuccessScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default function MainApp() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <ToastProvider
                    placement="top"
                    duration={5000}
                    animationType="slide-in"
                    animationDuration={250}
                    normalColor="gray"
                    icon={<MaterialIcons name="info-outline" size={24} color="white" />} // Default icon
                    successIcon={<MaterialIcons name="check-circle" size={24} color="green" />} // Success icon
                    dangerIcon={<MaterialIcons name="error" size={24} color="red" />} // Danger icon
                    warningIcon={<MaterialIcons name="warning" size={24} color="orange" />} // Warning icon
                    textStyle={{ fontSize: 20 }}
                    offset={50} // offset for both top and bottom toasts
                    offsetTop={30}
                    offsetBottom={40}
                    swipeEnabled={true}
                    renderToast={renderToast}
                >
                    <StripeProvider publishableKey={process.env.STRIPE_PUBLISHABLE_KEY!}>
                        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                            <Drawer.Screen name="Home" component={MainStackNavigator} options={{ headerShown: false }} />
                            <Drawer.Screen name="Auth" component={AuthenticationNavigator} options={{ headerShown: false }} />
                            <Drawer.Screen name="Subscription" component={SubscriptionScreen} options={{ header: () => <NavigationBar /> }} />
                        </Drawer.Navigator>
                    </StripeProvider>
                </ToastProvider>
            </NavigationContainer>
        </Provider>
    );
}

const appName = appConfig.expo.name;
AppRegistry.registerComponent(appName, () => MainApp);

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        width: "100%",
    },
});
