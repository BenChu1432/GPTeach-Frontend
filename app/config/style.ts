import fontSize from "./fontSize";
import {Platform} from "react-native";

export default {
    text:{
        marginLeft: 10,
        fontSize: fontSize.large,
        fontFamily: Platform.OS==="android"?"Roboto":"Avenir",
    }
}