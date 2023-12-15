import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import colors from "../config/colors";

type Props={
    error: string|undefined;
}


export default function ErrorMessage(props:Props) {
    return (
        <Text style={styles.errorMessage}>{props.error}</Text>
    );
}

const styles = StyleSheet.create({
    errorMessage:{
        color: colors.danger,
        marginLeft: 10,
    }
})