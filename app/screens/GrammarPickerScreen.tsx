import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, TextInput, View, Text, TouchableWithoutFeedback, Modal, Button, SafeAreaView, StatusBar, FlatList, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import PickerItem from "../components/PickerItem";
import { Category } from "../data/dto";
import { useAppDispatch } from "../redux/app/hooks";
import appSlice from "../redux/slices/appSlice";
import { ParamListBase, NavigationProp } from "@react-navigation/native";

const grammarCategories: Category[] = [
    { label: "Tenses", value: 1, image: "clock-time-nine", backgroundColor: "#fc5c65" },
    { label: "Reported Speech", value: 2, image: "text-to-speech", backgroundColor: "#fd9644" },
    { label: "Passive Voice", value: 3, image: "book-arrow-right-outline", backgroundColor: "#fed330" },
    { label: "Moods", value: 4, image: "chat-processing", backgroundColor: "#26de81" },
    { label: "Prepositions", value: 5, image: "arrow-all", backgroundColor: "#2bcbba" },
    { label: "Adjectives & Adverbs", value: 6, image: "palette", backgroundColor: "#45aaf2" },
    { label: "Countable & Uncountable", value: 7, image: "numeric", backgroundColor: "#4b7bec" },
    { label: "Pronouns", value: 8, image: "numeric", backgroundColor: "#794bec" },
    { label: "Others", value: 9, image: "plus", backgroundColor: "#606e96" },
];
export default function GrammarPickerScreen({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(appSlice.actions.setCurrentCategory("Grammar"));
    }, []);

    const handleGrammarCircleOnPress = (label: string) => {
        navigation.navigate("Library");
        dispatch(appSlice.actions.setLibrary(label));
        dispatch(appSlice.actions.setCurrentCategory("Grammar"));
    };

    return (
        <View style={styles.container}>
            <View style={styles.categoryContainer}>
                <FlatList
                    data={grammarCategories}
                    columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                    numColumns={3}
                    keyExtractor={(item) => {
                        return item.value.toString();
                    }}
                    renderItem={({ item }) => (
                        <PickerItem
                            item={item}
                            onPress={() => {
                                handleGrammarCircleOnPress(item.label);
                            }}
                            icon={item.image}
                        />
                    )}
                />
            </View>
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
    icon: {
        height: 30,
        width: 30,
    },
    chevron: {
        height: 30,
    },
    chevronContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    modal: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
