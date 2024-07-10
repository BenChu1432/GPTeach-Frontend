import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAppDispatch } from "../redux/app/hooks";
import appSlice from "../redux/slices/appSlice";
import { ParamListBase, NavigationProp } from "@react-navigation/native";
type EntypoType = React.ComponentProps<typeof Entypo>["name"];
type MaterialIconsType = React.ComponentProps<typeof MaterialCommunityIcons>["name"];
type IoniconsType = React.ComponentProps<typeof Ionicons>["name"];

type Props = {
    name: string;
    MaterialCommunityIcons?: MaterialIconsType;
    FontAwesome5?: string;
    Entypo?: EntypoType;
    Ionicons?: IoniconsType;
    size: number;
    colors: string;
    position: number;
    navigate: string | "Main";
    // onPress:()=>void;
};

export default function ThemeCard(props: Props) {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const dispatch = useAppDispatch();

    const handleThemeCardOnPress = () => {
        dispatch(appSlice.actions.setLibrary(props.name));
        navigation.navigate(props.navigate);
    };
    return (
        // <View style={{height: "100%", width:"100%", display:"flex", flexDirection:"column"}}>
        <TouchableOpacity style={[styles.card, { backgroundColor: props.colors }]} onPress={handleThemeCardOnPress}>
            <Text style={styles.text}>{props.name}</Text>
            {Entypo && <Entypo name={props.Entypo} size={props.size} color="white" style={[styles.icon, { right: props.position }]} />}
            {MaterialCommunityIcons && (
                <MaterialCommunityIcons name={props.MaterialCommunityIcons} size={props.size} color="white" style={[styles.icon, { right: props.position }]} />
            )}
            {Ionicons && <Ionicons name={props.Ionicons} size={props.size} color="white" style={[styles.icon, { right: props.position }]} />}
            {FontAwesome5 && <FontAwesome5 name={props.FontAwesome5} size={props.size} color="white" style={[styles.icon, { right: props.position }]} />}
        </TouchableOpacity>
        // </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        padding: 20,
        marginBottom: 30,
        alignItems: "flex-start",
        justifyContent: "center",
        height: 152,
        width: 357,
        alignSelf: "center",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    },
    icon: {
        position: "absolute",
    },
});
