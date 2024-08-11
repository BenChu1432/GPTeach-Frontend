import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

type Props = {
    error: string | undefined;
    marginLeft?: number;
    marginTop?: number;
};

export default function ErrorMessage(props: Props) {
    return <Text style={[styles.errorMessage, { marginLeft: props.marginLeft ? props.marginLeft : 10, marginTop: props.marginTop ? props.marginTop : 0 }]}>{props.error}</Text>;
}

const styles = StyleSheet.create({
    errorMessage: {
        color: colors.white,
    },
});
