import {View, Text, TouchableOpacity, Modal, StyleSheet, Pressable, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import fontSize from "../config/fontSize";
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import {postOpenai} from "../api/OpenaiResource";
import AppTextInput from "../components/AppTextInput";

export default function LanguageEnrichmentInputScreen({route,navigation}){
    const [selected, setSelected] = useState<string>("");


    const handleSubmitOnPress=()=>{
        if(selected.length===0){
            alert("You need to type sth")
        }else{
            navigation.navigate("Chatbot",{paramKey:selected, subRoute:route.params.paramKey, navigationPosition:route.params.paramKey})
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <AppTextInput placeholder={"Theme "} onChangeText={setSelected} widthPercentage={100}/>
            </View>
            <View>
                <Button title={"Submit"} onPress={handleSubmitOnPress}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        height:"100%",
        width:"100%"
    },
    categoryName:{
        fontSize: 20,
        fontWeight:"500"
    },
    modal: {
        // Add styles to ensure the arrow icon is visible and clickable
        position: "absolute"
    },
    subContainer:{
        padding:10,
        width:"100%",
    },


})