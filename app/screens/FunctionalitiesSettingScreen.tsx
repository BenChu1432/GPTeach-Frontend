import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import questionTypes from "../data/setting/questionTypes";
import { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import Counter from "../components/Counter";
import fontSize from "../data/setting/fontSize";
import fontFamily from "../data/setting/fontFamily";
import levelsOfVocab from "../data/setting/levelOfVocab";
import { useAppContext } from "../context/AppContext";
import colors from "../config/colors";
import file from "../data/setting/file";
import AppTextInput from "../components/AppTextInput";
import questionTypesForLiteraryDevices from "../data/setting/questionsTypesForLiteraryDevices";
import questionTypesForLanguageEnrichment from "../data/setting/questionTypesForLanguageEnrichment";
import questionTypesForRegister from "../data/setting/questionTypesForRegister";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import appSlice from "../redux/slices/appSlice";

export default function FunctionalitiesSettingScreen() {
    const dispatch = useAppDispatch();
    const {
        nameShownOnNavigationBar: currentCategory,
        questionType,
        theme,
        levelOfVocabulary,
        numOfQuestions,
        numOfParagraphs,
        title,
        fileType,
    } = useAppSelector((s) => s.appSlice);

    // Set default number
    const handleOnSelect = () => {
        if (currentCategory === "Language Enrichment") {
            if (questionType === "Fill-in-the-blank questions") {
                dispatch(appSlice.actions.setNumOfQuestions(12));
            } else if (questionType === "MC questions") {
                dispatch(appSlice.actions.setNumOfQuestions(12));
            } else if (questionType === "Underline-and-correct-the-error questions") {
                dispatch(appSlice.actions.setNumOfQuestions(8));
            } else if (questionType === "Cloze-test paragraphs") {
                dispatch(appSlice.actions.setNumOfQuestions(12));
            } else if (questionType === "Passage questions") {
                dispatch(appSlice.actions.setNumOfQuestions(12));
                dispatch(appSlice.actions.setNumOfParagraphs(5));
            }
        } else {
            if (questionType === "Fill-in-the-blank questions") {
                dispatch(appSlice.actions.setNumOfQuestions(15));
            } else if (questionType === "MC questions") {
                dispatch(appSlice.actions.setNumOfQuestions(10));
            } else if (questionType === "Underline-and-correct-the-error questions") {
                dispatch(appSlice.actions.setNumOfQuestions(15));
            } else if (questionType === "Unscramble-the-sentence questions") {
                dispatch(appSlice.actions.setNumOfQuestions(10));
            } else if (questionType === "Cloze-test paragraphs") {
                dispatch(appSlice.actions.setNumOfQuestions(5));
            } else if (questionType === "Passage questions") {
                dispatch(appSlice.actions.setNumOfQuestions(5));
                dispatch(appSlice.actions.setNumOfParagraphs(5));
            }
        }
    };

    const themeOnChange = (text: string) => {
        dispatch(appSlice.actions.setTheme(text));
    };

    const questionTypeOnChange = (text: string) => {
        dispatch(appSlice.actions.setQuestionType(text));
    };

    const numOfParagraphsOnChange = (number: number) => {
        dispatch(appSlice.actions.setNumOfParagraphs(number));
    };

    const numOfQuestionsOnChange = (number: number) => {
        dispatch(appSlice.actions.setNumOfQuestions(number));
    };

    const levelOfVocabOnChange = (text: string) => {
        dispatch(appSlice.actions.setLevelOfVocabulary(text));
    };

    const fileOnchange = (text: string) => {
        dispatch(appSlice.actions.setFileType(text));
    };

    useEffect(() => {
        console.log(currentCategory);
    }, []);

    return (
        <ScrollView style={styles.container}>
            {currentCategory !== "Language Enrichment" ? (
                <>
                    <Text style={styles.personalizedInputTitle}>{currentCategory === "Literary Devices" ? "Theme/Literature" : "Theme"}</Text>
                    <View style={styles.personalizedInputContainer}>
                        <View style={styles.personalizedInputInputContainer}>
                            <TextInput defaultValue={theme} onChangeText={themeOnChange} style={styles.personalizedInput} />
                        </View>
                    </View>
                </>
            ) : null}
            <Text style={styles.questionTypes}>Question Types</Text>
            <View style={styles.questionTypesContainer}>
                <SelectList
                    setSelected={questionTypeOnChange}
                    // label={"Selected Question Type"}
                    onSelect={() => {
                        handleOnSelect();
                    }}
                    placeholder={questionType}
                    data={
                        currentCategory === "Literary Devices"
                            ? questionTypesForLiteraryDevices
                            : currentCategory === "Language Enrichment"
                            ? questionTypesForLanguageEnrichment
                            : currentCategory === "Register"
                            ? questionTypesForRegister
                            : questionTypes
                    }
                    notFoundText={"No such a question type can be found. Feel free to enlighten us."}
                />
            </View>
            {questionType === "Passage questions" || questionType === "Paragraph excerpt questions" ? (
                <>
                    <Text style={styles.numQuestions}>Number of paragraphs</Text>
                    <View style={styles.numQuestionsContainer}>
                        <View style={styles.numOfQuestionsContainer}>
                            <Text style={styles.numOfQuestions}>{numOfParagraphs}</Text>
                            <Slider
                                style={{ width: 300, height: 40 }}
                                onValueChange={numOfParagraphsOnChange}
                                value={numOfParagraphs}
                                minimumValue={questionType === "Paragraph excerpt questions" ? 1 : 2}
                                step={1}
                                maximumValue={10}
                                minimumTrackTintColor="015A9E"
                                maximumTrackTintColor="#000000"
                            />
                        </View>
                    </View>
                </>
            ) : null}
            {questionType === "Dialogue questions" && currentCategory !== "Language Enrichment" ? (
                <Text style={styles.numQuestions}>Number of blanks</Text>
            ) : currentCategory === "Language Enrichment" ? (
                <Text style={styles.numQuestions}>Number of Items</Text>
            ) : questionType === "Passage questions" ? (
                <Text style={styles.numQuestions}>Number of Blanks in Each Paragraph</Text>
            ) : (
                <Text style={styles.numQuestions}>Number of questions</Text>
            )}
            <View style={styles.numQuestionsContainer}>
                <View style={styles.numOfQuestionsContainer}>
                    <Text style={styles.numOfQuestions}>{numOfQuestions}</Text>
                    <Slider
                        style={{ width: 300, height: 40 }}
                        onValueChange={numOfQuestionsOnChange}
                        value={numOfQuestions}
                        minimumValue={currentCategory === "Language Enrichment" ? 4 : questionType === "Passage questions" ? 2 : questionType === "Cloze-test paragraphs" ? 1 : 5}
                        step={currentCategory === "Language Enrichment" ? 4 : questionType === "Passage questions" ? 1 : questionType === "Cloze-test paragraphs" ? 1 : 5}
                        maximumValue={
                            currentCategory === "Language Enrichment"
                                ? 16
                                : questionType === "Passage questions"
                                ? 5
                                : questionType === "Cloze-test paragraphs"
                                ? 10
                                : questionType === "Dialogue questions"
                                ? 15
                                : questionType === "Unscramble-the-sentence questions"
                                ? 15
                                : 20
                        }
                        minimumTrackTintColor="015A9E"
                        maximumTrackTintColor="#000000"
                    />
                </View>
            </View>
            <Text style={styles.levelOfVocab}>Level of Difficulty in Vocabulary</Text>
            <View style={styles.levelOfVocabContainer}>
                <SelectList
                    setSelected={levelOfVocabOnChange}
                    placeholder={levelOfVocabulary}
                    data={levelsOfVocab}
                    notFoundText={"No such a level can be found."}
                    // label={"Selected Level"}
                />
            </View>
            <Text style={styles.file}>File Format</Text>
            <View style={styles.fileContainer}>
                <SelectList
                    setSelected={fileOnchange}
                    placeholder={fileType}
                    data={file}
                    notFoundText={"No such a level can be found."}
                    // label={"Selected Level"}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
    },
    questionSetting: {
        paddingTop: 30,
        paddingLeft: 30,
        fontSize: 18,
        textDecorationLine: "underline",
        fontWeight: "600",
    },
    questionTypes: {
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 40,
        fontSize: 18,
        fontWeight: "600",
    },
    questionTypesContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%",
    },

    levelOfVocab: {
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 50,
        fontSize: 18,
        fontWeight: "600",
    },
    levelOfVocabContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 25,
        width: "50%",
    },
    numQuestions: {
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 40,
        fontSize: 18,
        fontWeight: "600",
    },
    numQuestionsContainer: {
        width: "100%",
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 10,
    },
    numOfQuestionsContainer: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    },
    numOfQuestions: {
        alignItems: "center",
    },
    numOfSentencesContainer: {
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 40,
    },
    numOfSentences: {
        fontSize: 18,
        fontWeight: "600",
        paddingBottom: 20,
    },
    fontSize: {
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 40,
        fontSize: 18,
        fontWeight: "600",
    },
    fontSizeContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        width: "40%",
    },
    fontFamily: {
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 40,
        fontSize: 18,
        fontWeight: "600",
    },
    fontFamilyContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        width: "60%",
    },
    file: {
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "600",
    },
    fileContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        width: "60%",
    },
    personalizedInputTitle: {
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 30,
        fontSize: 18,
        fontWeight: "600",
    },
    personalizedInputContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        width: "60%",
    },
    personalizedInputInputContainer: {
        height: 45,
        width: "100%",
        borderColor: "#000000",
        borderRadius: 10,
        borderWidth: 0.6,
    },
    personalizedInput: {
        height: 45,
        width: "100%",
        marginLeft: 20,
    },
});
