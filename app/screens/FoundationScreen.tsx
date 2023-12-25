import Screen from "../components/Screen";
import tenses from "../data/library/grammar/tenses";
import {CategoryContent} from "../model/CategoryContent";
import NotesContainer from "../components/NotesContainer";
import {Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import ThemeCard from "../components/ThemeCard";
import fontSize from "../config/fontSize";

export default function FoundationScreen({route}){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>What to learn/teach</Text>
                    <ThemeCard name={"Grammar"} Entypo={"open-book"} size={160} colors={"#ff5959"} position={-20} navigate={"Grammar"}/>
                    <ThemeCard name={"Sentence Structure"} MaterialCommunityIcons={"format-text-rotation-angle-up"} size={160} colors={"#ffdd5a"} position={-40} navigate={"SentenceStructure"}/>
                    <ThemeCard name={"Language Enrichment"} Ionicons={"language"} size={160} colors={"#64BCFB"} position={-40} navigate={"ThemeBasedVsCustomized"} navigationPosition={"Interface"}/>
                    <ThemeCard name={"Register"} Ionicons={"layers"} size={120} colors={"#26de81"} position={-20} navigate={"Register"}/>
                    <ThemeCard name={"Literary Devices"} FontAwesome5={"feather-alt"} size={120} colors={"#2bcbba"} position={-20} navigate={"LiteraryDevices"}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        backgroundColor: "white",
        alignItems: "center",
        height:"100%",
        width:"100%",
    },
    scrollView:{
        height:"100%",
        width:"100%",

    },
    subContainer:{
        height:"100%",
        justifyContent:"center",
        alignItems: "center",
        width:"100%",
    },
    title:{
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10,
    }
    ,
    categoryContainer:{
        paddingTop: "5%",
        height: "100%",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    },
    categoryItemListContainer:{
        paddingLeft: 30,
        height:"100%",
        width:"100%"
    },
})