import React, {useEffect} from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform, StatusBar, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Category} from "../model/Category";

type Props={
    message:string;
}

export default function PopoverMessage(props:Props) {
    return (
        <View style={{ margin: 10 }}>
            <Text style={{fontWeight:"600"}}>{props.message}</Text>
        </View>
    );
}