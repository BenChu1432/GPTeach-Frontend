import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';


type Props={
    name:string;
    MaterialCommunityIcons?:string;
    FontAwesome5?:string;
    Entypo?:string;
    Ionicons?:string;
    size: number;
    colors: string;
    position: number;
    navigate?:string;
}

export default function ThemeCard (props:Props){
    const navigation = useNavigation();
    return (
        // <View style={{height: "100%", width:"100%", display:"flex", flexDirection:"column"}}>
        <TouchableOpacity
            style={[styles.card, {backgroundColor: props.colors}]}
            onPress={()=>{navigation.navigate(props.navigate, {navigationPosition:props.navigate});console.log("props.navigate:"+props.navigate)}}
        >
            <Text style={styles.text}>{props.name}</Text>
            {Entypo&&<Entypo name={props.Entypo} size={props.size} color="white" style={[styles.icon,{right:props.position}]}/>}
            {MaterialCommunityIcons&&<MaterialCommunityIcons name={props.MaterialCommunityIcons} size={props.size} color="white" style={[styles.icon,{right:props.position}]}/>}
            {Ionicons&&<Ionicons name={props.Ionicons} size={props.size} color="white" style={[styles.icon,{right:props.position}]}/>}
            {FontAwesome5&&<FontAwesome5 name={props.FontAwesome5} size={props.size} color="white" style={[styles.icon,{right:props.position}]}/>}
        </TouchableOpacity>
        // </View>

    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        padding: 20,
        marginBottom: 30,
        alignItems: 'flex-start',
        justifyContent:"center",
        height: 152,
        width: 357,
        alignSelf: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight:"bold",
        color:"white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },
    icon:{
        position:"absolute",
    }

});

