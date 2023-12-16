import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../config/colors";
import {LinearGradient} from "expo-linear-gradient";

type Props={
    color: string;
    word: string;
    wordColor?: string;
    widthPercentage: number;
    onPress:()=>void;
}

function Button(props:Props) {
    return (
        <View style={[styles.bar, {backgroundColor: props.color, width: `${props.widthPercentage}%`}]}>
            <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
            {props.color==="white"?<Text style={[styles.barTitles, {color: props.wordColor}]}>{props.word}</Text>:<Text style={styles.barTitles}>{props.word}</Text>}
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    bar:{
        display: "flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        height:60,
        width:"90%",
        borderRadius: 50,
        margin:5,
    },
    buttonDecorationContainer:{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        width:40,
    },
    buttonDecoration:{
        backgroundColor:"white",
        width:15,
        height:2,
    },
    barTitles:{
        fontSize: 20,
        fontWeight:"bold",
        color: "white",
    },
    touchable:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})
export default Button;