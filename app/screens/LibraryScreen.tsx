import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import NavigationBar from "../components/NavigationBar";
import { StyleSheet, View, ScrollView } from "react-native";
import tenses from "../data/library/grammar/tenses";
import reportedSpeech from "../data/library/grammar/reportedSpeech";
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
import { CategoryContent } from "../data/dto";
import literaryDevices from "../data/library/literaryDevices/literaryDevices";
import { useAppContext } from "../context/AppContext";
import languageEnrichment from "../data/library/languageEnrichment/languageEnrichment";
import register from "../data/library/register/register";
import appSlice from "../redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";

export default function LibraryScreen() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const library = useAppSelector((s) => s.appSlice.library);

    useEffect(() => {
        if (library === "Literary Devices") {
            dispatch(appSlice.actions.setQuestionType("Fill-in-the-blank questions"));
            dispatch(appSlice.actions.setCurrentCategory("Literary Devices"));
        } else if (library === "Language Enrichment") {
            dispatch(appSlice.actions.setQuestionType("Fill-in-the-blank questions"));
            dispatch(appSlice.actions.setCurrentCategory("Language Enrichment"));
            console.log("in");
        } else if (library === "Register") {
            dispatch(appSlice.actions.setQuestionType("Fill-in-the-blank questions"));
            dispatch(appSlice.actions.setCurrentCategory("Register"));
        }
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.categoryItemListContainer}>
                {library === "Tenses" &&
                    tenses.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Reported Speech" &&
                    reportedSpeech.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Passive Voice" &&
                    passiveVoice.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Moods" &&
                    moods.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Adjectives & Adverbs" &&
                    adjectivesAdverbs.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Pronouns" &&
                    pronouns.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                id={id}
                                formNotes={notes.list}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Prepositions" &&
                    prepositions.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                id={id}
                                formNotes={notes.list}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Countable & Uncountable" &&
                    countableUncountable.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                id={id}
                                formNotes={notes.list}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Others" &&
                    others.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Connectives" &&
                    connectives.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Clause" &&
                    clause.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Other Structures" &&
                    otherStructures.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Literary Devices" &&
                    literaryDevices.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Language Enrichment" &&
                    languageEnrichment.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                paramKey={library}
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
                {library === "Register" &&
                    register.map((notes: CategoryContent, index: number) => {
                        const id = index;
                        return (
                            <NotesContainer
                                paramKey={library}
                                title={notes.name}
                                libraryNotes={notes.content}
                                formNotes={notes.list}
                                id={id}
                                key={index}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        );
                    })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "white",
    },
    categoryContainer: {
        paddingTop: "5%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    categoryItemListContainer: {
        paddingLeft: 30,
        height: "100%",
        width: "100%",
    },
});
