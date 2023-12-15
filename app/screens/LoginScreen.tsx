import Screen from "../components/Screen";
import {Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Button} from "react-native";
import AppTextInput from "../components/AppTextInput";
import React, {useEffect, useState} from 'react';
import {Formik, useFormikContext} from 'formik';
import * as Yup from 'yup';
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import {signIn} from "../api/FirebaseResources"
import LoadingScreen from "../screens/LoadingScreen";
import ErrorMessageBar from "../components/ErrorMessageBar";


export default function LoginScreen({navigation}) {
    const [emailVerified,setEmailVerified]=useState<boolean|undefined>(undefined);
    const [loading,setLoading]=useState<boolean>(false);
    const [loggedinError,setLoggedinError]=useState<boolean|undefined>(undefined);

    const validationSchema=Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password")
    })

    const handleSignin=(email:string, password:string)=>{
        signIn(email, password,setEmailVerified,setLoading,setLoggedinError);
    }

    useEffect(() => {
        if(emailVerified===false){
            alert("You need to verify your email." +
                "A verification email has been sent to you.")
        }
    }, [emailVerified]);

    useEffect(() => {
        if(loggedinError){
            alert("Your email address or password is wrong.")
        }else if(loggedinError===false&&emailVerified===true){
            navigation.navigate("Home")
        }
    }, [loggedinError]);

    
    if(loading){
        return (
            <LoadingScreen/>
            );
    }else{
        return (
            <Screen style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
                </View>
                <Text style={styles.login}>Login</Text>
                <Formik initialValues={{email:"", password:""}} onSubmit={values=>handleSignin(values.email,values.password)} validationSchema={validationSchema}>
                    {({handleChange, handleSubmit, errors,setFieldTouched, touched})=>(
                        <View style={styles.inputContainer}>
                            <AppTextInput widthPercentage={100} onBlur={()=>setFieldTouched("email")} icon={"email"} placeholder={"Email"} keyboardType={"email-address"} autoCapitalize={"none"}  onChangeText={handleChange("email")}/>
                            {touched.email?<ErrorMessage error={errors.email}/>:null}
                            <AppTextInput widthPercentage={100} textContentType={"emailAddress"} onBlur={()=>setFieldTouched("password")} icon={"lock"} placeholder={"Password"} secureTextEntry={true} autoCapitalize={"none"}  onChangeText={handleChange("password")}/>
                            {touched.password?<ErrorMessage error={errors.password}/>:null}
                            <AppText word={"LOGIN"} onPress={handleSubmit} color={colors.danger} widthPercentage={90}/>
                            <AppButton color={"white"} word={"Go"} widthPercentage={60} onPress={handleSubmit} wordColor={"#3369FF"}/>
                            <View style={styles.partitionLineContainer}>
                                <View style={styles.partitionLine}/>
                                <View style={styles.partitionLineTextContainer}>
                                    <Text style={styles.partitionLineText}>
                                        Or
                                    </Text>
                                </View>
                                <View style={styles.partitionLine}/>
                            </View>
                            <AppButton color={"white"} word={"Register"} widthPercentage={60} wordColor={"#3369FF"} onPress={()=>{navigation.navigate("Signup")}} />
                        </View>
                    )}
                </Formik>
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        backgroundColor: "#3369FF",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    partitionLineContainer:{
        width:"45%",
        height: 40,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    partitionLineTextContainer:{
        height:40,
        width:40,
        justifyContent:"center",
        alignItems:"center"
    },
    partitionLineText:{
        height:"100%",
        width:"100%",
        color:"white",
        padding: 10,
    },
    partitionLine:{
        height:1,
        width:"90%",
        backgroundColor: "white"
    },
    logoContainer:{
        paddingTop: 50,
        paddingBottom: 40,
        display: "flex",
        borderTopColor: "#3369FF"
    },
    inputContainer:{
        display: "flex",
        alignItems: "center",
        width: "90%",
    },
    logo:{
        width:200,
        height: 200,
    },
    errorMessage:{
        color: colors.danger,
        marginLeft: 10,
    },
    login:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    }
})