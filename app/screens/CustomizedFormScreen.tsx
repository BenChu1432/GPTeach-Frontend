import { View, Text, TouchableOpacity, Modal, StyleSheet, Pressable, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import fontSize from "../config/fontSize";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { postOpenai } from "../api/OpenaiResource";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import appSlice from "../redux/slices/appSlice";
import { ParamListBase, NavigationProp } from "@react-navigation/native";

export default function CustomizedFormScreen({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
    const [selected, setSelected] = useState([]);
    const dispatch = useAppDispatch();
    const formNotes = useAppSelector((s) => s.appSlice.selectedFormNotes);

    const handleSubmitOnPress = () => {
        if (selected.length === 0) {
            alert("Nothing is selected yet!");
        } else {
            dispatch(appSlice.actions.setSelectedItems(selected));
            navigation.navigate("Chatbot");
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <MultipleSelectList
                    setSelected={(val) => setSelected(val)}
                    data={formNotes}
                    notFoundText={"No such an item can be found. Feel free to report it to us."}
                    label={"Selected Items"}
                />
            </View>
            <View>
                <Button title={"Submit"} onPress={handleSubmitOnPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    categoryName: {
        fontSize: 20,
        fontWeight: "500",
    },
    modal: {
        // Add styles to ensure the arrow icon is visible and clickable
        position: "absolute",
    },
    subContainer: {
        padding: 10,
        width: "100%",
    },
});
