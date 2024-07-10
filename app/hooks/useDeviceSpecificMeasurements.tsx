import { Dimensions } from "react-native";

export const useDeviceSpecificMeasurements = () => {
    const getAndroidNavigationBarHeight = () => {
        const fullScreenHeight = Dimensions.get("screen").height;
        const usableScreenHeight = Dimensions.get("window").height;
        const navigationBarHeight = fullScreenHeight - usableScreenHeight;
        return navigationBarHeight;
    };

    return { getAndroidNavigationBarHeight };
};
