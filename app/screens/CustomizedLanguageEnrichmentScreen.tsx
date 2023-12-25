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
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";

export default function CustomizedLanguageEnrichmentScreen({route,navigation}){
    const [numberOfItemsNotDividedByFour,setNumberOfItemsNotDividedByFour]=useState<boolean|undefined>(undefined);
    const [numberOfItemsIsZero,setNumberOfItemsIsZero]=useState<boolean|undefined>(undefined);
    const [overWordLimit,setOverWordLimit]=useState<boolean|undefined>(undefined);
    const [overNumberOfitems,setOverNumberOfitems]=useState<boolean|undefined>(undefined);
    const [readyToSubmit,setReadyToSubmit]=useState<boolean|undefined>(undefined);

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

    const handleCheckingInput=(readyToSubmit:boolean)=>{
        if(selectedTheme===""){
            setNumberOfItemsIsZero(true);
            return;
        }else{
            setNumberOfItemsIsZero(false);
        }
        let wordsArray = selectedTheme
            .trim()
            .split(',');
// Counting the number of words
        if((wordsArray.length%4)===0){
            setNumberOfItemsNotDividedByFour(false);
        }else{
            setNumberOfItemsNotDividedByFour(true);
        }
        console.log(wordsArray.length)
        // Over 20 items?
        if(wordsArray.length>20){
            setOverNumberOfitems(true)
        }else{
            setOverNumberOfitems(false)
        }
        // set flag to see if any item exceeds 52 letters
        let isOverFiftyTwoLetters=false;
        wordsArray.map((item)=>{
            if(item.length>38){
                isOverFiftyTwoLetters=true
            }
        })
        setOverWordLimit(isOverFiftyTwoLetters);
       setReadyToSubmit(readyToSubmit);
    }

    const handleChatbotTransition=()=>{
        handleCheckingInput(true);
    }

    useEffect(() => {
        setSelectedTheme("")
    }, []);

    useEffect(() => {
       if(readyToSubmit){
           if(numberOfItemsIsZero===false&&numberOfItemsNotDividedByFour===false&&overWordLimit===false){
               navigation.navigate("Chatbot",{paramKey:"Customized Vocab", subRoute:"Customized Vocab", navigationPosition:"Customized Vocab"});
           }else{
               if(selectedTheme===""){
                   setNumberOfItemsIsZero(true);
               }
               let wordsArray = selectedTheme
                   .trim()
                   .split(',');
// Counting the number of words
               if((wordsArray.length%4)===0){
                   setNumberOfItemsNotDividedByFour(false);
               }else{
                   setNumberOfItemsNotDividedByFour(true);
               }
               // Over 20 items?
               console.log(wordsArray.length)
               if(wordsArray.length>20){
                   setOverNumberOfitems(true)
               }else{
                   setOverNumberOfitems(false)
               }
               // set flag to see if any item exceeds 52 letters
               let isOverThirtyEightLetters=false;
               wordsArray.map((item)=>{
                   if(item.length>38){
                       isOverThirtyEightLetters=true
                   }
               })
               setOverWordLimit(isOverThirtyEightLetters);
           }
       }
    }, [readyToSubmit]);

    return(
        <ScrollView style={styles.container}>
            <>
                <Text style={styles.personalizedInputTitle}>Personalized Input</Text>
                <View style={styles.personalizedInputContainer}>
                    <View style={styles.personalizedInputInputContainer}>
                        <TextInput placeholder={"e.g.beauty, ugly, fantastic, guinea pig"} defaultValue={selectedTheme} onBlur={()=>{handleCheckingInput(false)}}  onChangeText={setSelectedTheme} style={styles.personalizedInput}/>
                    </View>
                </View>
                {numberOfItemsNotDividedByFour&&<ErrorMessage marginLeft={30} marginTop={5} error={"The number of items must be dividable by 4."}/>}
                {numberOfItemsIsZero&&<ErrorMessage marginLeft={30} marginTop={5} error={"You need to enter input."}/>}
                {overWordLimit&&<ErrorMessage marginLeft={30} marginTop={5} error={"You have entered an item that exceeds 38 letters or so."}/>}
                {overNumberOfitems&&<ErrorMessage marginLeft={30} marginTop={5} error={"You cannot enter more than 20 items."}/>}
            </>
            <Text style={styles.questionTypes}>Question Types</Text>
            <View style={styles.questionTypesContainer}>
                <SelectList
                    setSelected={setSelectedQuestionType}
                    onSelect={()=>{handleOnSelect()}}
                    placeholder={selectedQuestionType}
                    data={questionTypesForLanguageEnrichment}
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
            <View style={styles.generateButton}>
                <AppButton word={"Generate"} widthPercentage={30} color={colors.danger} onPress={handleChatbotTransition}/>
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
        width:"100%",
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
        width:"90%",
        marginLeft:20,
    },
    generateButton:{
        display: "flex",
        width:"100%",
        marginTop: 40,
        marginBottom: 40,
        justifyContent: "center",
        alignItems:"center"
    }
})