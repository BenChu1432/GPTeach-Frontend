import { Platform } from "react-native";

const localhost = Platform.OS === "android" ? "10.0.2.2" : "localhost";

export default localhost;