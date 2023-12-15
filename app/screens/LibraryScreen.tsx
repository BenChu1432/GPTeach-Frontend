import React, {useEffect, useState} from "react";
import Screen from "../components/Screen";
import NavigationBar from "../components/NavigationBar";
import {

    StyleSheet,
    View,
    ScrollView,
} from "react-native";
import tenses from "../data/library/grammar/tenses"
import reportedSpeech from "../data/library/grammar/reportedSpeech"
import passiveVoice from "../data/library/grammar/passiveVoice";
import moods from "../data/library/grammar/moods";
import adjectivesAdverbs from "../data/library/grammar/adjectives&adverbs";
import prepositions from "../data/library/grammar/prepositions";
import pronouns from "../data/library/grammar/pronouns";
import countableUncountable from "../data/library/grammar/countable&uncountable";
import others from "../data/library/grammar/others";
import connectives from "../data/library/sentenceStructure/connectives";
import clause from "../data/library/sentenceStructure/clause";
import otherStructures from "../data/library/sentenceStructure/others";
import NotesContainer from "../components/NotesContainer";
import {CategoryContent} from "../model/CategoryContent";
import literaryDevices from "../data/library/literaryDevices/literaryDevices";
import {useAppContext} from "../context/AppContext";
import languageEnrichment from "../data/library/languageEnrichment/languageEnrichment";
import register from "../data/library/register/register";

export default function LibraryScreen({route,navigation}){
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const {
        currentCategory,setCurrentCategory
    } = useAppContext();

    useEffect(() => {
        if(route.params.paramKey==="Literary Devices"){
            setCurrentCategory("Literary Devices")
        }else if(route.params.paramKey==="Language Enrichment"){
            setCurrentCategory("Language Enrichment")
            console.log("in")
        }else if(route.params.paramKey==="Register"){
            setCurrentCategory("Register")
        }
    }, []);


    return(
        <View style={styles.container}>
            <ScrollView style={styles.categoryItemListContainer}>
                {route.params.paramKey==="Tenses"&&tenses.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Reported Speech"&&reportedSpeech.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Passive Voice"&&passiveVoice.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Moods"&&moods.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Adjectives & Adverbs"&&adjectivesAdverbs.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Pronouns"&&pronouns.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} id={id} formNotes={notes.list} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Prepositions"&&prepositions.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} id={id} formNotes={notes.list} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Countable & Uncountable"&&countableUncountable.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} id={id} formNotes={notes.list} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Others"&&others.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Connectives"&&connectives.map((notes:CategoryContent, index:number)=>{
                    const id = index;
                    return (
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    );}
                )}
                {route.params.paramKey==="Clause"&&clause.map((notes:CategoryContent, index:number)=>{
                    const id = index;
                    return (
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    );})
                }
                {route.params.paramKey==="Other Structures"&&otherStructures.map((notes:CategoryContent, index:number)=>{
                    const id = index;
                    return (
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    );
                })}
                {route.params.paramKey==="Literary Devices"&&literaryDevices.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Language Enrichment"&&languageEnrichment.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer paramKey={route.params.paramKey} title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
                {route.params.paramKey==="Register"&&register.map((notes:CategoryContent, index:number)=>{
                    const id=index;
                    return(
                        <NotesContainer paramKey={route.params.paramKey} title={notes.name} libraryNotes={notes.content} formNotes={notes.list} id={id} key={index} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
                    )
                })}
            </ScrollView>
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
    categoryItemListContainer:{
        paddingLeft: 30,
        height:"100%",
        width:"100%"
    },
})