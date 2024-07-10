import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform, Alert } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { createPDF, postOpenai, postOpenaiInstruction, postOpenaiModelAnswers, postOpenaiNotes } from "../api/OpenaiResource";
import Lottie from "lottie-react-native";
import { useAppContext } from "../context/AppContext";
import { FontAwesome } from "@expo/vector-icons";
import DoubleClick from "react-native-double-tap";
import { useAppSelector } from "../redux/app/hooks";

export default function ChatbotScreen() {
    const [openaiResponse, setOpenaiResponse] = useState<string | undefined>();
    const [isNotes, setIsNotes] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>("English");
    const [error, setError] = useState<boolean | undefined>(undefined);

    const { questionType, theme, levelOfVocabulary, numOfQuestions, numOfParagraphs, library, selectedItems, selectedCategory, customizedVocab } = useAppSelector(
        (s) => s.appSlice
    );

    const handleOpenaiAPICall = () => {
        console.log("selectedItems:" + selectedItems + ",library:" + library);
        if (selectedCategory === "Customized Vocab") {
            postOpenai(selectedItems, selectedCategory, customizedVocab, levelOfVocabulary, questionType, numOfQuestions, numOfParagraphs, setIsNotes, setOpenaiResponse, setError);
        } else {
            postOpenai(selectedItems, selectedCategory, theme, levelOfVocabulary, questionType, numOfQuestions, numOfParagraphs, setIsNotes, setOpenaiResponse, setError);
        }
    };

    const handleInstructionOnPress = () => {
        if (openaiResponse != undefined && !isNotes) {
            setError(undefined);
            let tempOpenaiResponse = openaiResponse;
            setOpenaiResponse(undefined);

            postOpenaiInstruction(
                selectedItems,
                selectedCategory,
                theme,
                levelOfVocabulary,
                questionType,
                numOfQuestions,
                numOfParagraphs,
                tempOpenaiResponse,
                setOpenaiResponse,
                setError
            );
        }
    };

    const handleModelAnswersOnPress = () => {
        if (openaiResponse != undefined && !isNotes) {
            setError(undefined);
            let tempOpenaiResponse = openaiResponse;
            setOpenaiResponse(undefined);
            postOpenaiModelAnswers(
                selectedItems,
                selectedCategory,
                theme,
                levelOfVocabulary,
                questionType,
                numOfQuestions,
                numOfParagraphs,
                tempOpenaiResponse,
                setOpenaiResponse,
                setError
            );
        }
    };

    const handleNotesOnPress = (language: string) => {
        if (openaiResponse != undefined) {
            setLanguage(language);
            setIsNotes(true);
            setError(undefined);
            setOpenaiResponse(undefined);
            postOpenaiNotes(selectedItems, selectedCategory, theme, levelOfVocabulary, questionType, numOfQuestions, numOfParagraphs, language, setOpenaiResponse, setError);
        }
    };

    const handlePdfOnPress = () => {
        if (openaiResponse != undefined) {
            createPDF(openaiResponse, setError, selectedCategory, questionType);
        }
    };

    useEffect(() => {
        handleOpenaiAPICall();
    }, []);

    return (
        <View style={styles.container}>
            {
                <ScrollView>
                    {error == undefined && (
                        <View style={styles.dialogueContainer}>
                            <Lottie
                                autoPlay
                                loop
                                key={Platform.select({ android: "androidKey", default: undefined })}
                                source={require("../../assets/animations/animation_loading.json")}
                                style={styles.animation}
                            />
                            <Text style={styles.dialogue}>{openaiResponse}</Text>
                        </View>
                    )}
                    {error === false && (
                        <DoubleClick
                            singleTap={() => {
                                console.log("Single-tapped");
                            }}
                            doubleTap={() => {
                                handleInstructionOnPress();
                                console.log("Double-tapped");
                            }}
                            delay={400}
                        >
                            <View style={styles.dialogueContainer}>
                                <Text style={styles.dialogue}>{openaiResponse}</Text>
                            </View>
                        </DoubleClick>
                    )}
                    {error === true && (
                        <View style={styles.errorContainer}>
                            <Text style={styles.dialogue}>Error</Text>
                        </View>
                    )}
                </ScrollView>
            }
            <View style={styles.partitionLine} />
            <View style={styles.bottomFunctionsContainer}>
                <TouchableOpacity
                    style={styles.notesContainer}
                    onPress={() => {
                        handleNotesOnPress("English");
                    }}
                >
                    <FontAwesome5 name="book-open" size={33} color="#3369FF" />
                    <Text>Notes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.pdfDocContainer}
                    onPress={() => {
                        handlePdfOnPress();
                    }}
                >
                    <FontAwesome name="file-text" size={38} color="#3369FF" />
                    <Text>File</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.modelAnswersContainer}
                    onPress={() => {
                        handleModelAnswersOnPress();
                    }}
                >
                    <MaterialCommunityIcons name="clipboard-check" size={40} color="#3369FF" />
                    <Text>Answers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.regenContainer}
                    onPress={() => {
                        handleOpenaiAPICall();
                        setError(undefined);
                        setOpenaiResponse(undefined);
                    }}
                >
                    <MaterialCommunityIcons name="refresh" size={40} color="#3369FF" />
                    <Text>Reload</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "100%",
        width: "100%",
    },
    loadingContainer: {
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    dialogueContainer: {
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 20,
        backgroundColor: "#3498DB",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
    },
    dialogue: {
        lineHeight: 30,
        fontSize: 17,
        color: "white",
        fontWeight: "600",
    },
    errorContainer: {
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 20,
        backgroundColor: "#ec5757",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
    },
    animation: {},
    logo: {
        width: 30,
        height: 30,
    },
    logoContainer: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginLeft: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.light,
    },
    notesContainer: {
        position: "absolute",
        left: "3%",
        width: 100,
        height: 80,
        borderRadius: 40,
        marginLeft: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: colors.light,
    },
    pdfDocContainer: {
        position: "absolute",
        left: "24%",
        width: 100,
        height: 80,
        borderRadius: 40,
        marginLeft: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modelAnswersContainer: {
        position: "absolute",
        left: "45%",
        width: 100,
        height: 80,
        borderRadius: 40,
        marginLeft: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    regenContainer: {
        position: "absolute",
        left: "67%",
        width: 100,
        height: 80,
        borderRadius: 40,
        marginLeft: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomFunctionsContainer: {
        width: "100%",
        height: "12%",
        backgroundColor: "white",
    },
    partitionLine: {
        height: 2,
        width: "100%",
        backgroundColor: colors.light,
    },
});
