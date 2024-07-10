import { Platform } from "react-native";

const localhost = Platform.OS === "android" ? "192.168.1.225" : "localhost";

export default localhost;
