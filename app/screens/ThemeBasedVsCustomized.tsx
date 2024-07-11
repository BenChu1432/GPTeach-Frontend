import { StyleSheet, View, Text } from "react-native";
import fontSize from "../config/fontSize";
import ThemeCard from "../components/ThemeCard";
import CustomizedVsStandardizedCard from "../components/CustomizedVsStandardizedCard";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/app/hooks";
import appSlice from "../redux/slices/appSlice";

export default function ThemeBasedVsCustomized() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(appSlice.actions.setCurrentCategory("Language Enrichment"));
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.instruction}>Choose your preferred interface!</Text>
            <View>
                <CustomizedVsStandardizedCard
                    marginTop={50}
                    name={"Theme-based"}
                    colors={"#64BCFB"}
                    bottomMaterialCommunityIcons={"square-opacity"}
                    bottomSize={110}
                    bottomLeft={-25}
                    bottomBottom={-20}
                    bottomRotation={315}
                    topMaterialCommunityIcons={"shape"}
                    topSize={130}
                    topRight={-20}
                    topTop={-40}
                    topRotation={320}
                    navigate={"ThemebasedLanguageEnrichment"}
                    navigationPosition={"Language Enrichment"}
                />
                <CustomizedVsStandardizedCard
                    marginTop={20}
                    name={"Customized"}
                    colors={"#ff5959"}
                    bottomMaterialCommunityIcons={"format-color-fill"}
                    bottomSize={150}
                    bottomLeft={-50}
                    bottomBottom={-43}
                    bottomRotation={0}
                    topMaterialCommunityIcons={"brush-variant"}
                    topSize={115}
                    topRight={-25}
                    topTop={-25}
                    topRotation={225}
                    navigate={"CustomizedLanguageEnrichmentScreen"}
                    navigationPosition={"Customized Vocab"}
                />
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
    instruction: {
        marginTop: 30,
        fontSize: fontSize.extraLarge,
        fontWeight: "bold",
    },
});
