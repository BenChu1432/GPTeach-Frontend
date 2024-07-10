import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import Screen from "./Screen";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/app/hooks";
import { ParamListBase, NavigationProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type DrawerNavigation = DrawerNavigationProp<ParamListBase>;

export default function NavigationBar() {
    const navigation: DrawerNavigation = useNavigation();
    const route = useRoute();
    const currentCategory = useAppSelector((s) => s.appSlice.nameShownOnNavigationBar);
    const selectedCategory = useAppSelector((s) => s.appSlice.selectedCategory);

    useEffect(() => {
        console.log(route.params);
    }, []);

    return (
        <SafeAreaView style={styles.realContainer}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    {route.name === "Main" && <MaterialCommunityIcons name={"menu"} color={"black"} size={35} style={styles.menu} onPress={() => navigation.openDrawer()} />}
                    {route.name !== "Main" && <Entypo name="chevron-thin-left" size={35} color="black" style={styles.menu} onPress={() => navigation.goBack()} />}
                    {route.name === "Setting" && <Text style={styles.setting}>Setting</Text>}
                    {route.name !== "Main" && route.name !== "Setting" && route.name !== "Subscription" && (
                        <View style={styles.middleContainer}>
                            <Image source={require("../../assets/chatbot-logo.png")} style={styles.logo} />
                            <View style={styles.navigationBarStatus}>
                                <Text style={styles.category}>{currentCategory}</Text>
                                <Text style={styles.gptVersion}>ChatGPT-4</Text>
                            </View>
                        </View>
                    )}
                    {route.name === "Subscription" && (
                        <View>
                            <Text style={styles.navigationTitle}>Subscription Plan</Text>
                        </View>
                    )}
                </View>
                {route.name !== "Subscription" &&
                    route.name !== "Setting" &&
                    route.name !== "Main" &&
                    currentCategory !== "Interface" &&
                    currentCategory !== "Customized Vocab" && (
                        <View style={styles.rightContainer}>
                            {/*<FontAwesome name="search" size={24} color="black" style={styles.navigationButton}/>*/}
                            <TouchableOpacity
                                onPress={() => {
                                    if (selectedCategory === "Customized Vocab") {
                                        navigation.navigate("CustomizedLanguageEnrichmentScreen");
                                    } else {
                                        navigation.navigate("Setting");
                                    }
                                }}
                            >
                                <Ionicons name="settings-sharp" size={28} color="black" style={styles.navigationButton} />
                            </TouchableOpacity>
                        </View>
                    )}
            </View>
            <View style={styles.partitionLine}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    realContainer: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        width: "100%",
        backgroundColor: "white",
    },
    leftContainer: {
        flex: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: colors.light,
    },
    middleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    logo: {
        marginRight: 15,
        height: 40,
        width: 40,
    },
    menu: {
        fontFamily: "Inter" || "sans-serif",
        marginLeft: 15,
        marginRight: 15,
    },
    category: {
        fontSize: 18,
        fontWeight: "500",
        color: colors.navy,
    },
    gptVersion: {
        color: colors.grass,
        fontSize: 16,
        fontWeight: "500",
    },
    navigationTitle: {
        fontSize: 20,
        fontWeight: "500",
    },
    navigationBarStatus: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    partitionLine: {
        marginTop: 10,
        backgroundColor: colors.light,
        width: "100%",
        height: 1,
    },
    setting: {
        fontSize: 20,
        fontWeight: "600",
    },
    rightContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginRight: 20,
        // flex:1.5,
    },
    navigationButton: {},
});
