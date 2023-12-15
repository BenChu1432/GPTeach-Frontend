import React from 'react';
import {Platform, StyleSheet, Text} from "react-native";
import fontSize from "../config/fontSize";

type Props={
    text: string;
}

export default function AppText(props:Props) {
    return (
        <Text style={styles.container}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: fontSize.large,
        fontFamily: Platform.OS==="android"?"Roboto":"Avenir",
    },
})