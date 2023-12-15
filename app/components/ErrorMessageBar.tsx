import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import colors from "../config/colors";

type Props={
    error: string|undefined;
}


export default function ErrorMessageBar(props:Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>{props.error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        top: 60,
        position:"absolute",
        height: 35,
        width:"100%",
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
    },
    errorMessage:{
        color: colors.danger,
        marginLeft: 10,
        fontWeight:"bold",
    }
})