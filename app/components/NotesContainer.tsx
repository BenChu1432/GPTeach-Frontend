import {FlatList, Image, LogBox, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import tenses from "../data/library/grammar/tenses";
import {LinearGradient} from "expo-linear-gradient";
import fontSize from "../config/fontSize";
import {FontAwesome, FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import {useNavigation, useRoute} from '@react-navigation/native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import DoubleClick from 'react-native-double-tap';
import Popover, {PopoverMode, PopoverPlacement} from 'react-native-popover-view';
import PopoverMessage from "./PopoverMessage";

// ParamKey is used to trace the big title, e.g.Language Enrichment

type Props={
    paramKey?:string;
    title:string;
    libraryNotes: any;
    formNotes:any;
    id:number;
    selectedTopic:string|null;
    setSelectedTopic:(selectedTopic:string|null)=>void;

}


export default function NotesContainer(props:Props){
    const navigation=useNavigation();
    const route = useRoute();
    const handleNavigationToCustomizedForm=()=>{
        if(props.paramKey==="Language Enrichment"&&props.title!=="Word Root"){
            navigation.navigate("LanguageEnrichmentInput",{array: props.formNotes, paramKey: props.title, navigationPosition:props.title})
        }else{
            navigation.navigate("CustomizedForm",{array: props.formNotes, paramKey: props.title, navigationPosition:props.title})
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
                {props.title!=="Time expressions"&&props.title!=="Causative"&&props.title!=="Prepositional Phrases"&&props.title!=="Adjectives"&&props.title!=="Units"&&props.title!=="Determiners"&&props.title!=="Collocation"&&props.title!=="Others"&&props.title!=="Concessive Clause"&&props.title!=="Other clauses"&&props.title!=="Other Structure"&&props.title!=="Other"&&props.title!=="Types of Language"&&<TouchableOpacity onPress={()=>{handleNavigationToCustomizedForm()}}>
                    <MaterialIcons name="dashboard-customize" size={24} color="black" style={styles.titleIcon}/>
                </TouchableOpacity>}
            </View>
            <ScrollView style={styles.notesContainer} horizontal>
                {props.libraryNotes.map((content:any, key:number)=>{
                    return (
                            <View style={styles.notes} key={key}>
                                {Platform.OS === 'android' && (
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,0.1)']}
                                        style={styles.gradientShadow}
                                    />
                                )}
                                <Popover
                                    isVisible={props.selectedTopic === content.topic}
                                    placement={PopoverPlacement.TOP}
                                    onRequestClose={() => props.setSelectedTopic(null)}
                                    from={(
                                <DoubleClick
                                    singleTap={() => {
                                        props.setSelectedTopic(content.topic);
                                    }}
                                    doubleTap={() => {
                                        navigation.navigate("Chatbot",{paramKey:content.topic, subRoute:props.title, navigationPosition:props.title});
                                    }}
                                    delay={400}>
                                    {props.id===0&&<Image source={require("../assets/notes/LightBlue-Notes.png")} style={styles.image}/>}
                                    {props.id===1&&<Image source={require("../assets/notes/Red-Notes.png")} style={styles.image}/>}
                                    {props.id===2&&<Image source={require("../assets/notes/Orange-Notes.png")} style={styles.image}/>}
                                    {props.id===3&&<Image source={require("../assets/notes/Green-Notes.png")} style={styles.image}/>}
                                    {props.id===4&&<Image source={require("../assets/notes/DarkBlue-Notes.png")} style={styles.image}/>}
                                    {props.id===5&&<Image source={require("../assets/notes/Yellow-Notes.png")} style={styles.image}/>}
                                    {props.id===6&&<Image source={require("../assets/notes/Purple-Notes.png")} style={styles.image}/>}
                                    {props.id===7&&<Image source={require("../assets/notes/Grey-Notes.png")} style={styles.image}/>}
                                        <Text style={styles.notesName}>{content.topic}</Text>
                                </DoubleClick>)}>
                                    <PopoverMessage message={props.libraryNotes[key].example}/>
                                </Popover>
                            </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 270,
        width: "100%",
        marginBottom:8,
    },
    titleContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    title:{
        marginTop: 10,
        fontSize: 26,
        fontWeight: "bold",
    },
    notesContainer: {
        height:"100%",
        width:"100%",
        display: "flex",
        flexDirection: "row",
    },
    notes:{
        backgroundColor: 'rgba(255,255,255,0.01)',  // Near-transparent white
        width: 130,
        height: 130,
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.45,
        shadowRadius: 4,
        ...Platform.select({
            android: {
                elevation: 5,
                shadowColor: 'transparent',
            },
        }),
    },
    gradientShadow: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 7,
        height: 10,          // Slightly increase height for a broader shadow effect
        colors: ['transparent', 'rgba(0,0,0,0.47)']  // Make gradient color slightly darker
    },
    image: {
        width: 130,
        height: 130,
    },
    notesName:{
        fontSize: 15,
        textAlign: "center",
        fontWeight: "500",
        marginTop: 10,
    },
    titleIcon:{
        padding:10,
    }

})