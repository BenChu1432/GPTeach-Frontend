import {Platform, StyleSheet, View} from "react-native";
import Lottie from "lottie-react-native"
import React from 'react';

export default function ComingSoonScreen(){
    const comingSoonJSON=require("../../assets/animations/animation_comingSoon.json")
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
        height: 380,
        width: 380,
    }
})