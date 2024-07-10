import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {};

export default function Tick(props: Props) {
    return (
        // <View style={{height: "100%", width:"100%", display:"flex", flexDirection:"column"}}>
        <View style={styles.circle}>
            <Feather name="check" size={15} color="white" />
        </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        borderRadius: 30,
        backgroundColor: "rgba(56,102,222,1)",
        width: 25,
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
