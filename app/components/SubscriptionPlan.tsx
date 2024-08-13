import { Button, StyleSheet, View, Image, Platform, Text, ScrollView } from "react-native";
import { useDeviceSpecificMeasurements } from "../hooks/useDeviceSpecificMeasurements";
import Tick from "./Tick";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import fontSize from "../config/fontSize";
import Cross from "./Cross";
import { SubscriptionOption } from "../data/dto";

export default ({
    planName,
    price,
    limitlessExercises,
    limitlessAccessToModelAnswers,
    limitlessPDFConversions,
    accessToNewFeaturesFirst,
    removalOfWatermarks,
    adFreeExperience,
    headerTopColor,
    headerBottomColor,
    buttonColor,
}: {
    planName: SubscriptionOption;
    price: number;
    limitlessExercises: boolean;
    limitlessPDFConversions: boolean;
    limitlessAccessToModelAnswers: boolean;
    removalOfWatermarks: boolean;
    adFreeExperience: boolean;
    accessToNewFeaturesFirst: boolean;
    headerTopColor: string;
    headerBottomColor: string;
    buttonColor: string;
}) => {
    const { getAndroidNavigationBarHeight } = useDeviceSpecificMeasurements();

    const handleOnPress = () => {};

    return (
        <View style={[styles.card, { paddingBottom: getAndroidNavigationBarHeight() }]}>
            <View></View>
            <LinearGradient colors={[headerTopColor, headerBottomColor]} style={styles.cardHeader} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <View style={styles.rightOrb}></View>
                <View style={styles.leftOrb}></View>
                <FontAwesome style={styles.diamond} name="diamond" size={34} color="white" />
                <FontAwesome style={styles.musicNote} name="music" size={14} color="white" />
                <MaterialCommunityIcons style={styles.bling} name="cards-diamond-outline" size={14} color="white" />
                <MaterialCommunityIcons style={styles.anotherBling} name="cards-diamond-outline" size={14} color="white" />
                <View style={styles.cardHeaderBadgeContainer}>
                    {Platform.OS === "android" ? (
                        <View style={styles.cardHeaderBadgeCircle}>
                            <Image style={styles.badge} source={require("../../assets/medal.png")} />
                        </View>
                    ) : (
                        <View style={styles.cardHeaderBadgeCircle}>
                            <Image style={styles.badge} source={require("../../assets/medal.png")} />
                        </View>
                    )}
                </View>
                <View style={styles.subscriptionPlanTitleContainer}>
                    <Text style={styles.subscriptionPlanTitle}>{planName}</Text>
                </View>
                <View style={styles.subscriptionPlanPriceContainer}>
                    <Text style={styles.subscriptionPlanPrice}>
                        <Text style={styles.price}>${price} /</Text> Month
                    </Text>
                </View>
            </LinearGradient>
            {/* </View> */}
            <View style={styles.cardBody}>
                <View style={styles.benefitContainer}>
                    <View style={styles.benefitRow}>
                        <Text style={styles.benefit}>Limitless exercises</Text>
                        {limitlessExercises ? <Tick /> : <Cross />}
                    </View>
                    <View style={styles.benefitRow}>
                        <Text style={styles.benefit}>Limitless PDF conversions</Text>
                        {limitlessPDFConversions ? <Tick /> : <Cross />}
                    </View>
                    <View style={styles.benefitRow}>
                        <Text style={styles.benefit}>Limitless access to model answers</Text>
                        {limitlessAccessToModelAnswers ? <Tick /> : <Cross />}
                    </View>
                    <View style={styles.benefitRow}>
                        <Text style={styles.benefit}>Removal of watermarks</Text>
                        {removalOfWatermarks ? <Tick /> : <Cross />}
                    </View>
                    <View style={styles.benefitRow}>
                        <Text style={styles.benefit}>Ad-free experience</Text>
                        {adFreeExperience ? <Tick /> : <Cross />}
                    </View>
                    <View style={styles.benefitRow}>
                        <Text style={styles.benefit}>Access to new features first</Text>
                        {accessToNewFeaturesFirst ? <Tick /> : <Cross />}
                    </View>
                </View>
                <AppButton
                    marginTop={30}
                    onPress={handleOnPress}
                    color={buttonColor}
                    word={planName === "FREEMIUM" ? "Already Subscribed" : "Subscribe Now"}
                    widthPercentage={90}
                ></AppButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        height: 620,
        width: 320, // This controls the width of the card
        elevation: 1,
        borderRadius: 30,
        marginLeft: "auto", // Center the card horizontally
        marginRight: "auto", // Center the card horizontally
    },
    rightOrb: {
        height: 25,
        width: 25,
        opacity: 0.2,
        bottom: 15,
        right: 25,
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 50,
    },
    leftOrb: {
        height: 45,
        width: 45,
        opacity: 0.2,
        top: 15,
        left: 25,
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 50,
    },
    diamond: {
        opacity: 0.2,
        top: 45,
        left: 55,
        position: "absolute",
    },
    musicNote: {
        opacity: 0.2,
        top: 65,
        left: 85,
        position: "absolute",
    },
    bling: {
        opacity: 0.2,
        top: 35,
        left: 50,
        position: "absolute",
    },
    anotherBling: {
        opacity: 0.2,
        top: 45,
        left: 90,
        position: "absolute",
    },
    cardHeader: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: "100%",
        height: "28%",
        backgroundColor: "blue",
    },
    cardHeaderBadgeContainer: {
        width: "100%",
        height: "43%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cardHeaderBadgeCircle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginBottom: -10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    badge: {
        width: 40,
        height: 40,
    },
    cardBody: {
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%",
        height: "72%",
        backgroundColor: "white",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    benefitContainer: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
    },
    benefitRow: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    benefit: {
        fontWeight: "500",
        fontSize: fontSize.large,
    },
    subscriptionPlanTitleContainer: {
        width: "100%",
        height: "23%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    subscriptionPlanTitle: {
        fontWeight: "400",
        color: "white",
        fontSize: fontSize.large,
    },
    subscriptionPlanPriceContainer: {
        width: "100%",
        height: "33%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    subscriptionPlanPrice: {
        fontWeight: "bold",
        color: "white",
        fontSize: fontSize.large,
    },
    price: {
        fontWeight: "bold",
        fontSize: 30,
    },
});
