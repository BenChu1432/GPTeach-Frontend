import {Category} from "../model/Category";
import {FlatList, Platform, StatusBar, StyleSheet, View} from "react-native";
import PickerItem from "../components/PickerItem";
import React, {useEffect} from "react";
import {useAppContext} from "../context/AppContext";

const sentenceStructureCategories:Category[]=[
    {label: "Connectives", value:1, image: "link-variant", backgroundColor: "#fc5c65"},
    {label: "Clause", value:2, image:"format-quote-close", backgroundColor:"#2bcbba"},
    {label: "Other Structures", value:3, image:"dots-horizontal-circle", backgroundColor:"#794bec"},
]

export default function SentenceStructurePickerScreen({navigation}){
    const {
        currentCategory,setCurrentCategory,
    } = useAppContext();

    useEffect(() => {
        setCurrentCategory("Grammar")
    }, []);
    return(
        <View style={styles.container}>
            <View style={styles.categoryContainer}>
                <FlatList data={sentenceStructureCategories}
                          columnWrapperStyle={{  flex: 1,justifyContent: "space-around"}}
                          numColumns={3}
                          keyExtractor={(item)=>{return item.value.toString()}}
                          renderItem={({item})=>
                              <PickerItem item={item} onPress={() => navigation.navigate('Library', { paramKey: item.label, navigationPosition: item.label })} icon={item.image}/>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        height:"100%",
        width:"100%",
        backgroundColor:"white",
    },
    categoryContainer:{
        paddingTop: "5%",
        height: "100%",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    },
    icon:{
        height: 30,
        width: 30,
    },
    chevron:{
        height: 30,
    },
    chevronContainer:{
        flex:1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    modal:{
        paddingTop: Platform.OS==="android"?StatusBar.currentHeight:0,
    }
})