import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View, Image, Platform, Text, ScrollView, Dimensions } from "react-native";
import Screen from "../components/Screen";
import { useStripeSubscriptionService } from "../hooks/useStripeSubscriptionService";
import fontSize from "../config/fontSize";
import SubscriptionPlan from "../components/SubscriptionPlan";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SubscriptionOption } from "../data/dto";

type SubscriptionPlan = {
    planName: SubscriptionOption;
    price: number;
    limitlessExercises: boolean;
    limitlessAccessToModelAnswers: boolean;
    limitlessPDFConversions: boolean;
    accessToNewFeaturesFirst: boolean;
    removalOfWatermarks: boolean;
    adFreeExperience: boolean;
    headerTopColor: string;
    headerBottomColor: string;
    buttonColor: string;
};

const data: SubscriptionPlan[] = [
    {
        planName: "PREMIUM",
        price: 25.99,
        limitlessExercises: true,
        limitlessAccessToModelAnswers: true,
        limitlessPDFConversions: true,
        accessToNewFeaturesFirst: true,
        removalOfWatermarks: true,
        adFreeExperience: true,
        headerTopColor: "rgba(253,27,94,1)",
        headerBottomColor: "rgba(254,149,179,1)",
        buttonColor: "rgba(253,27,94,1)",
    },
    {
        planName: "FREEMIUM",
        price: 0,
        limitlessExercises: false,
        limitlessAccessToModelAnswers: false,
        limitlessPDFConversions: false,
        accessToNewFeaturesFirst: false,
        removalOfWatermarks: false,
        adFreeExperience: false,
        headerTopColor: "rgba(158,248,126,1)",
        headerBottomColor: "rgba(196,252,175,1)",
        buttonColor: "rgba(158,248,126,1)",
    },
    {
        planName: "STANDARD",
        price: 25.99,
        limitlessExercises: true,
        limitlessAccessToModelAnswers: true,
        limitlessPDFConversions: true,
        accessToNewFeaturesFirst: false,
        removalOfWatermarks: true,
        adFreeExperience: true,
        headerTopColor: "rgba(71,100,176,1)",
        headerBottomColor: "rgba(56,102,222,1)",
        buttonColor: "rgba(56,102,222,1)",
    },
];

export default function SubscriptionScreen() {
    const width = Dimensions.get("window").width;

    return (
        <ScrollView style={styles.screen}>
            <View style={{ position: "absolute", right: 0, height: "100%", width: 50 }}></View>
            <View style={styles.container}>
                <View style={styles.sloganContainer}>
                    <Text style={styles.chooseYourPlan}>CHOOSE YOUR PLAN</Text>
                    <View style={styles.subSloganContainer}>
                        <Text style={styles.slogan}>
                            Generate materials <Text style={styles.sloganHighlight}>at the tip of your fingers.</Text>
                        </Text>
                        <Text style={styles.cancelAnytime}>Cancel anytime.</Text>
                    </View>
                </View>
                <View style={{ height: 800, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Carousel
                        width={width}
                        style={{ justifyContent: "center", alignItems: "center" }}
                        height={700}
                        data={data}
                        scrollAnimationDuration={1000}
                        onSnapToItem={(index) => console.log("current index:", index)}
                        renderItem={(
                            { item, index } // Corrected this line
                        ) => (
                            <SubscriptionPlan
                                planName={item.planName}
                                price={item.price}
                                limitlessExercises={item.limitlessExercises}
                                limitlessAccessToModelAnswers={item.limitlessAccessToModelAnswers}
                                limitlessPDFConversions={item.limitlessPDFConversions}
                                accessToNewFeaturesFirst={item.accessToNewFeaturesFirst}
                                removalOfWatermarks={item.removalOfWatermarks}
                                adFreeExperience={item.adFreeExperience}
                                headerTopColor={item.headerTopColor} // Also corrected these lines
                                headerBottomColor={item.headerBottomColor}
                                buttonColor={item.buttonColor}
                            />
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
    },
    container: {
        overflow: "visible",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },
    sloganContainer: {
        position: "relative",
        height: 140,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    chooseYourPlan: {
        marginTop: 30,
        fontSize: fontSize.extraLarge,
        fontWeight: "500",
    },
    subSloganContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    slogan: {
        textAlign: "center",
        opacity: 0.5,
        marginTop: 20,
        fontSize: 17,
        fontWeight: "400",
    },
    sloganHighlight: {
        textAlign: "center",
        opacity: 1,
        color: "#FA487C",
    },
    cancelAnytime: {
        textAlign: "center",
        opacity: 0.5,
        fontSize: 17,
        fontWeight: "400",
        marginTop: 10,
    },
});
