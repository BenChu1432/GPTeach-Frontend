import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import levelOfVocab from "../data/setting/levelOfVocab";
import colors from "../config/colors";
import file from "../data/setting/file";
import questionTypesForLanguageEnrichment from "../data/setting/questionTypesForLanguageEnrichment";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import appSlice from "../redux/slices/appSlice";
import { FileType, LevelOfVocabulary, QuestionType } from "../data/enum/enum";
import { ParamListBase, NavigationProp } from "@react-navigation/native";

export default function CustomizedLanguageEnrichmentScreen({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
    const [numberOfItemsNotDividedByFour, setNumberOfItemsNotDividedByFour] = useState<boolean | undefined>(undefined);
    const [numberOfItemsIsZero, setNumberOfItemsIsZero] = useState<boolean | undefined>(undefined);
    const [overWordLimit, setOverWordLimit] = useState<boolean | undefined>(undefined);
    const [overNumberOfItems, setOverNumberOfItems] = useState<boolean | undefined>(undefined);
    const [readyToSubmit, setReadyToSubmit] = useState<boolean | undefined>(undefined);
    const questionType = useAppSelector((s) => s.appSlice.questionType);
    const customizedVocab = useAppSelector((s) => s.appSlice.customizedVocab);
    const numOfParagraphs = useAppSelector((s) => s.appSlice.numOfParagraphs);
    const levelOfVocabulary = useAppSelector((s) => s.appSlice.levelOfVocabulary);
    const fileType = useAppSelector((s) => s.appSlice.fileType);
    const dispatch = useAppDispatch();
    // Set default number
    const handleOnSelect = () => {
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
    };

    const handleCheckingInput = (readyToSubmit: boolean) => {
        if (customizedVocab === "") {
            setNumberOfItemsIsZero(true);
            return;
        } else {
            setNumberOfItemsIsZero(false);
        }
        let wordsArray = customizedVocab.trim().split(",");
        let wordItemsLength = 0;
        wordsArray.map((item) => {
            let word = item.trim();
            if (word.length > 0 && word !== "") {
                wordItemsLength += 1;
            }
        });
        // Counting the number of words
        if (wordItemsLength % 4 === 0) {
            setNumberOfItemsNotDividedByFour(false);
        } else {
            setNumberOfItemsNotDividedByFour(true);
        }
        // Over 20 items?
        if (wordsArray.length > 20) {
            setOverNumberOfItems(true);
        } else {
            setOverNumberOfItems(false);
        }
        // set flag to see if any item exceeds 52 letters
        let isOverFiftyTwoLetters = false;
        wordsArray.map((item) => {
            if (item.length > 38) {
                isOverFiftyTwoLetters = true;
            }
        });
        setOverWordLimit(isOverFiftyTwoLetters);
        setReadyToSubmit(readyToSubmit);
    };

    const handleChatbotTransition = () => {
        handleCheckingInput(true);
    };

    useEffect(() => {
        dispatch(appSlice.actions.setSelectedCategory("customizedVocab"));
    }, []);

    useEffect(() => {
        if (readyToSubmit) {
            if (numberOfItemsIsZero === false && numberOfItemsNotDividedByFour === false && overWordLimit === false && overNumberOfItems === false) {
                navigation.navigate("Chatbot");
                dispatch(appSlice.actions.setSelectedCategory("Customized Vocab"));
                setReadyToSubmit(false);
            } else {
                if (customizedVocab === "") {
                    setNumberOfItemsIsZero(true);
                }
                let wordsArray = customizedVocab.trim().split(",");
                let wordItemsLength = 0;
                wordsArray.map((item) => {
                    let word = item.trim();
                    if (word.length > 0 && word !== "") {
                        wordItemsLength += 1;
                    }
                });
                // Counting the number of words
                if (wordItemsLength % 4 === 0) {
                    setNumberOfItemsNotDividedByFour(false);
                } else {
                    setNumberOfItemsNotDividedByFour(true);
                }
                // Over 20 items?
                if (wordsArray.length > 20) {
                    setOverNumberOfItems(true);
                } else {
                    setOverNumberOfItems(false);
                }
                // set flag to see if any item exceeds 52 letters
                let isOverThirtyEightLetters = false;
                wordsArray.map((item) => {
                    if (item.length > 38) {
                        isOverThirtyEightLetters = true;
                    }
                });
                setOverWordLimit(isOverThirtyEightLetters);
                setReadyToSubmit(false);
            }
        }
    }, [readyToSubmit]);

    return (
        <ScrollView style={styles.container}>
            <>
                <Text style={styles.personalizedInputTitle}>Personalized Input</Text>
                <View style={styles.personalizedInputContainer}>
                    <View style={styles.personalizedInputInputContainer}>
                        <TextInput
                            placeholder={"e.g.beauty, ugly, fantastic, guinea pig"}
                            defaultValue={customizedVocab}
                            onBlur={() => {
                                handleCheckingInput(false);
                            }}
                            onChangeText={(text) => {
                                dispatch(appSlice.actions.setCustomizedVocab(text));
                            }}
                            style={styles.personalizedInput}
                        />
                    </View>
                </View>
                {numberOfItemsNotDividedByFour && <ErrorMessage marginLeft={30} marginTop={5} error={"The number of items must be dividable by 4."} />}
                {numberOfItemsIsZero && <ErrorMessage marginLeft={30} marginTop={5} error={"You need to enter input."} />}
                {overWordLimit && <ErrorMessage marginLeft={30} marginTop={5} error={"You have entered an item that exceeds 38 letters or so."} />}
                {overNumberOfItems && <ErrorMessage marginLeft={30} marginTop={5} error={"You cannot enter more than 20 items."} />}
            </>
            <Text style={styles.questionTypes}>Question Types</Text>
            <View style={styles.questionTypesContainer}>
                <SelectList
                    setSelected={(e: QuestionType) => {
                        dispatch(appSlice.actions.setQuestionType(e));
                    }}
                    onSelect={handleOnSelect}
                    placeholder={questionType}
                    data={questionTypesForLanguageEnrichment}
                    notFoundText={"No such a question type can be found. Feel free to enlighten us."}
                    // label={"Selected Question Type"}
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
                                onValueChange={(e) => {
                                    dispatch(appSlice.actions.setNumOfParagraphs(e));
                                }}
                                // onValueChange={setNumOfParagraphs}
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
            <Text style={styles.levelOfVocab}>Level of Difficulty in Vocabulary</Text>
            <View style={styles.levelOfVocabContainer}>
                <SelectList
                    setSelected={(e: LevelOfVocabulary) => {
                        dispatch(appSlice.actions.setLevelOfVocabulary(e));
                    }}
                    // setSelected={setSelectedLevelOfVocabulary}
                    placeholder={levelOfVocabulary}
                    data={levelOfVocab}
                    notFoundText={"No such a level can be found."}
                    // label={"Selected Level"}
                />
            </View>
            <Text style={styles.file}>File Format</Text>
            <View style={styles.fileContainer}>
                <SelectList
                    // setSelected={setSelectedFile}
                    setSelected={(e: FileType) => {
                        dispatch(appSlice.actions.setFileType(e));
                    }}
                    placeholder={fileType}
                    data={file}
                    notFoundText={"No such a level can be found."}
                />
            </View>
            <View style={styles.generateButton}>
                <AppButton word={"Generate"} widthPercentage={30} color={colors.danger} onPress={handleChatbotTransition} />
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
        width: "100%",
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
        width: "90%",
        marginLeft: 20,
    },
    generateButton: {
        display: "flex",
        width: "100%",
        marginTop: 40,
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
    },
});
