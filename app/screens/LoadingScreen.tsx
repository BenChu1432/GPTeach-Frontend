import React from 'react';
import {Platform, StyleSheet, View} from "react-native";
import Lottie from "lottie-react-native"


export default function LoadingScreen() {
    const comingSoonJSON=require("../assets/animations/animation_lm4mjuyh.json")
    return(
        <View style={styles.container}>
            <Lottie
                autoPlay
                loop
                key={Platform.select({android: "androidKey", default: undefined})}
                source={comingSoonJSON}
                style={styles.animation}
            />
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
    }
})