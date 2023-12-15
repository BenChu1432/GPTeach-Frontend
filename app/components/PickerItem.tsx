import React, {useEffect} from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform, StatusBar, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Category} from "../model/Category";

type Props={
    icon: string;
    item: Category;
    onPress:(item:Category)=>void;
}

export default function PickerItem(props:Props) {
    return (
        <TouchableOpacity onPress={()=>{props.onPress(props.item)}} style={styles.container}>
            <View style={[styles.imageContainer,{backgroundColor: props.item.backgroundColor}]} >
                <MaterialCommunityIcons name={props.item.image} size={40} color={"white"}/>
            </View>
            <Text style={styles.text}>{props.item.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        display: "flex",
        alignItems: "center",
        height:200,
        width: 160,
    },
    text:{
        textAlign: "center",
        padding: 10,
        fontSize: 20,
        fontWeight: "500",
    },
    imageContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        height:90,
        width: 90,
    }
})