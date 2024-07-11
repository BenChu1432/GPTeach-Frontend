import Screen from "../components/Screen";
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import AppTextInput from "../components/AppTextInput";
import React, { useEffect, useState } from "react";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { signIn } from "../api/FirebaseResources";
import LoadingScreen from "../screens/LoadingScreen";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getUserInfo from "../api/GoogleSignInResources";
import { useAppDispatch } from "../redux/app/hooks";
import appSlice from "../redux/slices/appSlice";
import { auth } from "../config/firebaseConfig";
import authSlice from "../redux/slices/authSlice";

// If you have a defined param list, use it here instead of ParamListBase
interface SentenceStructurePickerScreenProps {
    navigation: NavigationProp<ParamListBase>;
}

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }: SentenceStructurePickerScreenProps) {
    const [userInfo, setUserInfo] = useState(null);
    // promptAsync is to trigger a login page
    // const [request,response,promptAsync]=Google.useAuthRequest(({
    //     scopes: ['https://www.googleapis.com/auth/userinfo.email','/https://www.googleapis.com/auth/userinfo.profile'],
    //     webClientId: "668733472630-uok6daqa6alrtaq58l8nge5bmgepk3sp.apps.googleusercontent.com",
    //     androidClientId:"668733472630-u7h3vtohofgpfgcsa2tog7cehir8jbmd.apps.googleusercontent.com",
    //     iosClientId:"668733472630-2qvodlp7q7tbqhrdhlf5vkagnlmu49mg.apps.googleusercontent.com"
    // }))
    const [emailVerified, setEmailVerified] = useState<boolean | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [loggedInError, setLoggedInError] = useState<boolean | undefined>(undefined);
    const dispatch = useAppDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    });

    // const handleGoogleSignIn=async ()=>{
    //     const user=await AsyncStorage.getItem("@user");
    //     if(!user){
    //         if(response?.type==="success"){
    //             getUserInfo(response.authentication?.accessToken,setUserInfo)
    //         }
    //     }else{
    //         setUserInfo(JSON.parse(user))
    //
    //     }
    // }

    const handleSignin = (email: string, password: string) => {
        signIn(email, password, setEmailVerified, setLoading, setLoggedInError).then(() => {
            dispatch(authSlice.actions.setEmail(email));
        });
    };

    useEffect(() => {
        if (emailVerified === false) {
            alert("You need to verify your email." + "A verification email has been sent to you.");
        }
    }, [emailVerified]);

    useEffect(() => {
        if (loggedInError) {
            alert("Your email address or password is wrong.");
        } else if (loggedInError === false && emailVerified === true) {
            navigation.navigate("Home");
        }
    }, [loggedInError]);

    if (loading) {
        return <LoadingScreen />;
    } else {
        return (
            <Screen style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require("../../assets/logo.png")} style={styles.logo} />
                </View>
                <Text style={styles.login}>Login</Text>
                <Formik initialValues={{ email: "", password: "" }} onSubmit={(values) => handleSignin(values.email, values.password)} validationSchema={validationSchema}>
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <View style={styles.inputContainer}>
                            <AppTextInput
                                widthPercentage={100}
                                onBlur={() => setFieldTouched("email")}
                                icon={"email"}
                                placeholder={"Email"}
                                keyboardType={"email-address"}
                                autoCapitalize={"none"}
                                onChangeText={handleChange("email")}
                            />
                            {touched.email ? <ErrorMessage error={errors.email} /> : null}
                            <AppTextInput
                                widthPercentage={100}
                                textContentType={"emailAddress"}
                                onBlur={() => setFieldTouched("password")}
                                icon={"lock"}
                                placeholder={"Password"}
                                secureTextEntry={true}
                                autoCapitalize={"none"}
                                onChangeText={handleChange("password")}
                            />
                            {touched.password ? <ErrorMessage error={errors.password} /> : null}
                            <AppButton marginTop={20} color={"white"} word={"Go"} widthPercentage={60} onPress={handleSubmit} wordColor={"#3369FF"} />
                            <View style={styles.partitionLineContainer}>
                                <View style={styles.partitionLine} />
                                <View style={styles.partitionLineTextContainer}>
                                    <Text style={styles.partitionLineText}>Or</Text>
                                </View>
                                <View style={styles.partitionLine} />
                            </View>
                            <AppButton
                                color={"white"}
                                word={"Register"}
                                widthPercentage={60}
                                wordColor={"#3369FF"}
                                onPress={() => {
                                    navigation.navigate("Signup");
                                }}
                            />
                            {/*<TouchableOpacity onPress={() => promptAsync()}>*/}
                            {/*    <Image source={require("../../assets/google-signin-button.png")} style={styles.googleSignIn}/>*/}
                            {/*</TouchableOpacity>*/}
                        </View>
                    )}
                </Formik>
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#3369FF",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    partitionLineContainer: {
        width: "45%",
        height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    partitionLineTextContainer: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    partitionLineText: {
        height: "100%",
        width: "100%",
        color: "white",
        padding: 10,
    },
    partitionLine: {
        height: 1,
        width: "90%",
        backgroundColor: "white",
    },
    logoContainer: {
        paddingTop: 50,
        paddingBottom: 10,
        display: "flex",
        borderTopColor: "#3369FF",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        width: "90%",
    },
    logo: {
        width: 200,
        height: 200,
    },
    errorMessage: {
        color: colors.danger,
        marginLeft: 10,
    },
    login: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
    googleSignIn: {
        borderRadius: 50,
        marginTop: 20,
        width: 265,
        height: 65,
    },
});
