import {StyleSheet, TouchableOpacity, View} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

type Props={
    onPress:()=>void;
}

const AddListingButton=(props:Props)=>(
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name={"plus-circle"} color={colors.white} size={40}/>
        </View>
    </TouchableOpacity>
)

const styles=StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        borderRadius:40,
        borderColor: colors.white,
        borderWidth: 10,
        backgroundColor: colors.danger,
        height:80,
        width:80,
        bottom: 20,
    }
})

export default AddListingButton;