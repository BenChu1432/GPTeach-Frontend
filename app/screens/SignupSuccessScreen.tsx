import React from 'react';
import {Platform, StyleSheet, View,Text} from "react-native";
import Lottie from "lottie-react-native"
import Button from "../components/AppButton";
import AppButton from "../components/AppButton";


export default function SignupSuccessScreen({navigation}) {
    const comingSoonJSON=require("../../assets/animations/animation_success.json")
    return(
        <View style={styles.container}>
            <Lottie
                autoPlay
                loop={false}
                key={Platform.select({android: "androidKey", default: undefined})}
                source={comingSoonJSON}
                style={styles.animation}
            />
            <Text style={styles.message}>You have signed up successfully. {"\n"}
                Please verify your email address!</Text>
            <AppButton color={"#009EF1"} word={"Login"} widthPercentage={60} onPress={()=>{navigation.navigate("Login")}} wordColor={"white"}/>
        </View>
)
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        height:"100%",
        width:"100%",
        backgroundColor:"white"
    },
    animation:{
        display: "flex",
        backgroundColor:"white",
        height: 300,
        width: 300,
    },
    message:{
        fontSize: 23,
        fontWeight:"bold",
        marginTop: 30,
        marginBottom: 30,
        textAlign:"center"
    },
})