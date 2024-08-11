import Screen from "../components/Screen";
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Button, ScrollView } from "react-native";
import AppTextInput from "../components/AppTextInput";
import React, { useEffect, useState } from "react";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import LoadingScreen from "../screens/LoadingScreen";
import ErrorMessageBar from "../components/ErrorMessageBar";
import { ParamListBase, NavigationProp } from "@react-navigation/native";
import { useAppDispatch } from "../redux/app/hooks";
import authSlice, { authThunkAction } from "../redux/slices/authSlice";

export default function SignupScreen({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), undefined], "Passwords must match")
            .required()
            .label("Password"),
    });

    const handleSignup = (email: string, password: string) => {
        dispatch(authThunkAction.signup({ email, password }))
            .unwrap()
            .then(() => {
                navigation.navigate("SignupSuccess");
            })
            .catch(() => {
                alert("Error in signup. Please contact us.");
            });
    };

    if (loading) {
        return <LoadingScreen />;
    } else {
        return (
            <Screen style={styles.container}>
                <ScrollView style={styles.container} alwaysBounceVertical={true}>
                    <View style={{ display: "flex", alignItems: "center" }}>
                        <View style={styles.logoContainer}>
                            <Image source={require("../../assets/logo.png")} style={styles.logo}></Image>
                        </View>
                        <Text style={styles.login}>Signup</Text>
                        <Formik
                            initialValues={{ email: "", password: "", confirmPassword: "" }}
                            onSubmit={(values) => handleSignup(values.email, values.password)}
                            validationSchema={validationSchema}
                        >
                            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                                <View style={styles.inputContainer}>
                                    <AppTextInput
                                        widthPercentage={100}
                                        textContentType={"emailAddress"}
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
                                        onBlur={() => setFieldTouched("password")}
                                        icon={"lock"}
                                        placeholder={"Password"}
                                        secureTextEntry={true}
                                        autoCapitalize={"none"}
                                        onChangeText={handleChange("password")}
                                    />
                                    {touched.password ? <ErrorMessage error={errors.password} /> : null}
                                    <AppTextInput
                                        widthPercentage={100}
                                        onBlur={() => setFieldTouched("confirmPassword")}
                                        icon={"lock"}
                                        placeholder={"Confirm Password"}
                                        secureTextEntry={true}
                                        autoCapitalize={"none"}
                                        onChangeText={handleChange("confirmPassword")}
                                    />
                                    {touched.confirmPassword ? <ErrorMessage error={errors.confirmPassword} /> : null}
                                    <AppButton color={"white"} word={"Register"} widthPercentage={60} onPress={handleSubmit} wordColor={"#3369FF"} />
                                    <View style={styles.partitionLineContainer}>
                                        <View style={styles.partitionLine} />
                                        <View style={styles.partitionLineTextContainer}>
                                            <Text style={styles.partitionLineText}>or</Text>
                                        </View>
                                        <View style={styles.partitionLine} />
                                    </View>
                                    <AppButton
                                        color={"white"}
                                        word={"Login"}
                                        widthPercentage={60}
                                        wordColor={"#3369FF"}
                                        onPress={() => {
                                            navigation.navigate("Login");
                                        }}
                                    />
                                </View>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#3369FF",
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
        paddingBottom: 40,
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
});
