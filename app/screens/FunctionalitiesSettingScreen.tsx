import {Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import questionTypes from "../data/setting/questionTypes";
import {useEffect, useState} from "react";
import Slider from '@react-native-community/slider';
import Counter from "../components/Counter";
import fontSize from "../data/setting/fontSize";
import fontFamily from "../data/setting/fontFamily";
import levelOfVocab from "../data/setting/levelOfVocab";
import {useAppContext} from "../context/AppContext";
import colors from "../config/colors";
import file from "../data/setting/file";
import AppTextInput from "../components/AppTextInput";
import questionTypesForLiteraryDevices from "../data/setting/questionsTypesForLiteraryDevices";
import questionTypesForLanguageEnrichment from "../data/setting/questionTypesForLanguageEnrichment";
import questionTypesForRegister from "../data/setting/questionTypesForRegister";

export default function FunctionalitiesSettingScreen({route}){
    const {
        currentCategory,setCurrentCategory,
        selectedLevelOfVocabulary,setSelectedLevelOfVocabulary,
        selectedQuestionType, setSelectedQuestionType,
        numOfQuestions,setNumOfQuestions,
        selectedFile, setSelectedFile,
        selectedTheme, setSelectedTheme,
        numOfParagraphs,setNumOfParagraphs,
    } = useAppContext();

    // Set default number
    const handleOnSelect=()=>{
        if(currentCategory==="Language Enrichment"){
            if(selectedQuestionType==="Fill-in-the-blank questions"){
                setNumOfQuestions(12);
            }else if(selectedQuestionType==="MC questions"){
                setNumOfQuestions(12);
            }else if(selectedQuestionType==="Underline-and-correct-the-error questions"){
                setNumOfQuestions(8);
            }else if(selectedQuestionType==="Cloze-test paragraphs"){
                setNumOfQuestions(12);
            }else if(selectedQuestionType==="Passage questions"){
                setNumOfQuestions(12);
                setNumOfParagraphs(5);
            }
        }else{
            if(selectedQuestionType==="Fill-in-the-blank questions"){
                setNumOfQuestions(15);
            }else if(selectedQuestionType==="MC questions"){
                setNumOfQuestions(10);
            }else if(selectedQuestionType==="Underline-and-correct-the-error questions"){
                setNumOfQuestions(15);
            }else if(selectedQuestionType==="Unscramble-the-sentence questions"){
                setNumOfQuestions(10);
            }else if(selectedQuestionType==="Cloze-test paragraphs"){
                setNumOfQuestions(5);
            }else if(selectedQuestionType==="Passage questions"){
                setNumOfQuestions(5);
                setNumOfParagraphs(5);
            }
        }
    }
    useEffect(()=>{
        console.log(currentCategory)
    },[])

    return(
        <ScrollView style={styles.container}>
            {currentCategory!=="Language Enrichment"&&currentCategory!=="Customized Language Enrichment"?
                <>
                    <Text style={styles.personalizedInputTitle}>{currentCategory==="Literary Devices"?"Theme/Literature":"Theme"}</Text>
                    <View style={styles.personalizedInputContainer}>
                        <View style={styles.personalizedInputInputContainer}>
                            <TextInput defaultValue={selectedTheme} onChangeText={setSelectedTheme} style={styles.personalizedInput}/>
                        </View>
                    </View>
                </> :null}
            <Text style={styles.questionTypes}>Question Types</Text>
            <View style={styles.questionTypesContainer}>
                <SelectList
                    setSelected={setSelectedQuestionType}
                    onSelect={()=>{handleOnSelect()}}
                    placeholder={selectedQuestionType}
                    data={currentCategory==="Literary Devices"?questionTypesForLiteraryDevices:currentCategory==="Language Enrichment"?questionTypesForLanguageEnrichment:currentCategory==="Register"?questionTypesForRegister:questionTypes}
                    notFoundText={"No such a question type can be found. Feel free to enlighten us."}
                    label={"Selected Question Type"}/>
            </View>
            {selectedQuestionType==="Passage questions"||selectedQuestionType==="Paragraph excerpt questions"?
                <>
                    <Text style={styles.numQuestions}>Number of paragraphs</Text>
                    <View style={styles.numQuestionsContainer}>
                        <View style={styles.numOfQuestionsContainer}>
                            <Text style={styles.numOfQuestions}>{numOfParagraphs}</Text>
                            <Slider
                                style={{width: 300, height: 40}}
                                onValueChange={setNumOfParagraphs}
                                value={numOfParagraphs}
                                minimumValue={selectedQuestionType==="Paragraph excerpt questions"?1:2}
                                step={1}
                                maximumValue={10}
                                minimumTrackTintColor="015A9E"
                                maximumTrackTintColor="#000000"
                            />
                        </View>
                    </View>
                </>
                :null}
            {selectedQuestionType==="Dialogue questions"&&currentCategory!=="Language Enrichment"?<Text style={styles.numQuestions}>Number of blanks</Text>:currentCategory==="Language Enrichment"?<Text style={styles.numQuestions}>Number of Items</Text>:selectedQuestionType==="Passage questions"?<Text style={styles.numQuestions}>Number of Blanks in Each Paragraph</Text>:<Text style={styles.numQuestions}>Number of questions</Text>}
            <View style={styles.numQuestionsContainer}>
                <View style={styles.numOfQuestionsContainer}>
                    <Text style={styles.numOfQuestions}>{numOfQuestions}</Text>
                    <Slider
                        style={{width: 300, height: 40}}
                        onValueChange={setNumOfQuestions}
                        value={numOfQuestions}
                        minimumValue={currentCategory==="Language Enrichment"?4:selectedQuestionType==="Passage questions"?2:selectedQuestionType==="Cloze-test paragraphs"?1:5}
                        step={currentCategory==="Language Enrichment"?4:selectedQuestionType==="Passage questions"?1:selectedQuestionType==="Cloze-test paragraphs"?1:5}
                        maximumValue={currentCategory==="Language Enrichment"?16:selectedQuestionType==="Passage questions"?5:selectedQuestionType==="Cloze-test paragraphs"?10:selectedQuestionType==="Dialogue questions"?15:selectedQuestionType==="Unscramble-the-sentence questions"?15:20}
                        minimumTrackTintColor="015A9E"
                        maximumTrackTintColor="#000000"
                    />
                </View>
            </View>
            <Text style={styles.levelOfVocab}>Level of Difficulty in Vocabulary</Text>
            <View style={styles.levelOfVocabContainer}>
                <SelectList
                    setSelected={setSelectedLevelOfVocabulary}
                    placeholder={selectedLevelOfVocabulary}
                    data={levelOfVocab}
                    notFoundText={"No such a level can be found."}
                    label={"Selected Level"}/>
            </View>
            <Text style={styles.file}>File Format</Text>
            <View style={styles.fileContainer}>
                <SelectList
                    setSelected={setSelectedFile}
                    placeholder={selectedFile}
                    data={file}
                    notFoundText={"No such a level can be found."}
                    label={"Selected Level"}/>
            </View>
        </ScrollView>
)}

const styles = StyleSheet.create({
    container:{
        paddingBottom: 50,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height:"100%",
        width:"100%",
    },
    questionSetting:{
        paddingTop: 30,
        paddingLeft:30,
        fontSize: 18,
        textDecorationLine: 'underline',
        fontWeight:"600",
    },
    questionTypes:{
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:40,
        fontSize: 18,
        fontWeight:"600",
    },
    questionTypesContainer:{
        paddingLeft:20,
        paddingRight:20,
        width:"100%",
    },

    levelOfVocab:{
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:50,
        fontSize: 18,
        fontWeight:"600",
    },
    levelOfVocabContainer:{
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:25,
        width:"50%",
    },
    numQuestions:{
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:40,
        fontSize: 18,
        fontWeight:"600",
    },
    numQuestionsContainer:{
        width:"100%",
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:10,
    },
    numOfQuestionsContainer:{
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
    },
    numOfQuestions:{
        alignItems:"center"
    },
    numOfSentencesContainer:{
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:40,
    },
    numOfSentences:{
        fontSize: 18,
        fontWeight:"600",
        paddingBottom:20,
    },
    fontSize:{
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:40,
        fontSize: 18,
        fontWeight:"600",
    },
    fontSizeContainer:{
        paddingLeft:20,
        paddingRight:20,
        width:"40%",
    },
    fontFamily:{
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:40,
        fontSize: 18,
        fontWeight:"600",
    },
    fontFamilyContainer:{
        paddingLeft:20,
        paddingRight:20,
        width:"60%",
    },
    file:{
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:10,
        fontSize: 18,
        fontWeight:"600",
    },
    fileContainer:{
        paddingLeft:20,
        paddingRight:20,
        width:"60%",
    },
    personalizedInputTitle:{
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:30,
        fontSize: 18,
        fontWeight:"600",
    },
    personalizedInputContainer:{
        paddingLeft:20,
        paddingRight:20,
        width:"60%",
    },
    personalizedInputInputContainer:{
        height:45,
        width:"100%",
        borderColor: "#000000",
        borderRadius:10,
        borderWidth: 0.6,
    },
    personalizedInput:{
        height:45,
        width:"100%",
        marginLeft:20,
    }
})