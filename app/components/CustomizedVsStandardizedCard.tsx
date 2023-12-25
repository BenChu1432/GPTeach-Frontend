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
    topRotation?:number;
    bottomRotation?:number;
    topMaterialCommunityIcons?:string;
    bottomMaterialCommunityIcons?:string;
    topSize?: number;
    bottomSize?: number;
    colors: string;
    topRight?: number;
    topTop?:number;
    bottomLeft?:number;
    bottomBottom?:number;
    navigate?:string;
    navigationPosition?:string;
    marginTop?:number;
}

export default function CustomizedVsStandardizedCard (props:Props){
    const navigation = useNavigation();
    return (
        // <View style={{height: "100%", width:"100%", display:"flex", flexDirection:"column"}}>
        <TouchableOpacity
            style={[styles.card, {backgroundColor: props.colors,marginTop:props.marginTop}]}
            onPress={()=>{navigation.navigate(props.navigate, {navigationPosition:props.navigationPosition})}}
        >
            <Text style={styles.text}>{props.name}</Text>
            {props.topMaterialCommunityIcons&&<MaterialCommunityIcons name={props.topMaterialCommunityIcons} size={props.topSize} color="white" style={[styles.topIcon,{right:props.topRight, top:props.topTop, transform: [{ rotate: `${props.topRotation?props.topRotation:0}deg`}]}]}/>}
            {props.bottomMaterialCommunityIcons&&<MaterialCommunityIcons name={props.bottomMaterialCommunityIcons} size={props.bottomSize} color="white" style={[styles.bottomIcon,{left:props.bottomLeft,bottom:props.bottomBottom,transform: [{ rotate: `${props.bottomRotation?props.bottomRotation:0}deg`}]}]}/>}
        </TouchableOpacity>
        // </View>

    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        padding: 20,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent:"center",
        height: 221,
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
    topIcon:{
        position:"absolute",
    },
    bottomIcon:{
        position:"absolute",
    }
});