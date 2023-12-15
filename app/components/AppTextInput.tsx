import React from 'react';
import {DimensionValue, Platform, StyleSheet, TextInput, View, ViewStyle} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from "../config/colors";
import fontSize from "../config/fontSize";
import defaultStyle from "../config/style";

type Props={
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    icon?: string;
    placeholder: string;
    keyboardType?: "default" | "numeric" | "email-address" | "phone-pad"; // Add other keyboard types as needed
    textContentType?:  "none" | "name" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress";
    secureTextEntry?: boolean;
    onChangeText?:(text:string)=>void;
    onBlur?:()=>void;
    color?:string;
    widthPercentage?: DimensionValue;
}

export default function AppTextInput(props:Props) {
    const widthStyle: ViewStyle = {
        // @ts-ignore
        width: `${props.widthPercentage}%`,
    };


    return (
        <View style={[styles.container, widthStyle]}>
            {props.icon&&<MaterialCommunityIcons name={props.icon} style={styles.icon} size={30} color={props.color}/>}
            <TextInput
                onBlur={props.onBlur}
                onChangeText={props.onChangeText}
                       placeholder={props.placeholder}
                       style={defaultStyle.text}
                       autoCapitalize={props.autoCapitalize}
                       autoCorrect={props.autoCorrect}
                       keyboardType={props.keyboardType}
                       textContentType={props.textContentType}
                       secureTextEntry={props.secureTextEntry}
                       placeholderTextColor={"rgba(0, 0, 0, 0.5)"}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        borderRadius: 25,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon:{
        height: 30,
        width: 30,
    }
})