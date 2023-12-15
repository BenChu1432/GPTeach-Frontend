import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet, ViewStyle} from "react-native";

type Props={
    style?: ViewStyle;
    children: React.ReactNode;
}

export default function Screen(props:Props) {
    return (
        <SafeAreaView style={[styles.container, props.style]}>
            {props.children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height: "100%",
        paddingTop: Platform.OS==="android"?StatusBar.currentHeight:0,
    }
})