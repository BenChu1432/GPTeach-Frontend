import {MaterialCommunityIcons} from "@expo/vector-icons";
import {
    Image,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Linking
} from "react-native";
import Screen from "./Screen";
import colors from "../config/colors";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {DrawerNavigationState, NavigationProp, ParamListBase, useNavigation} from "@react-navigation/native";
import { signOut } from "firebase/auth";
import {logout} from "../api/FirebaseResources";
import {DrawerDescriptorMap, DrawerNavigationHelpers} from "@react-navigation/drawer/lib/typescript/src/types";


type Props={
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptors: DrawerDescriptorMap;
}

export type RootStackParamList = {
    Home: undefined; // No parameters expected for Home route
    Auth: undefined;
    Subscription:undefined;
    // ... other route definitions
};

export default function DrawerContent(props:Props){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleFeedbackOnPress=async ()=>{
        try {
            await Linking.openURL('mailto:englishgpteach@gmail.com');
        } catch(e){
            alert("Cannot open mails")
            console.log(e)
        }
    }
    return(
        <Screen>
            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => navigation.navigate('Home')}>
                <View style={styles.drawerItem}>
                    <MaterialIcons name="favorite" size={30} color="black" style={styles.icon}/>
                    <Text style={styles.text}>My Favorite</Text>
                </View>
                <SimpleLineIcons name="arrow-right" size={24} color={"black"} />
            </TouchableOpacity>
            <View style={styles.partition}></View>
            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => navigation.navigate('Subscription', {navigationPosition: "Subscription"})}>
                <View style={styles.drawerItem}>
                    <Entypo name="calendar" size={30} color="black" style={styles.icon}/>
                    <Text style={styles.text}>Subscription</Text>
                </View>
                <SimpleLineIcons name="arrow-right" size={24} color={"black"} />
            </TouchableOpacity>
            <View style={styles.partition}></View>
            <TouchableOpacity style={styles.drawerItemContainer} onPress={handleFeedbackOnPress}>
                <View style={styles.drawerItem}>
                    <FontAwesome name="send" size={30} color="black" style={styles.icon}/>
                    <Text style={styles.text}>Feedback</Text>
                </View>
                <SimpleLineIcons name="arrow-right" size={24} color={"black"} />
            </TouchableOpacity>
            <View style={styles.partition}></View>
            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => {navigation.navigate('Auth');logout()}}>
                <View style={styles.drawerItem}>
                    <MaterialCommunityIcons name="logout" size={30} color="black" style={styles.icon}/>
                    <Text style={styles.text}>Logout</Text>
                </View>
                <SimpleLineIcons name="arrow-right" size={24} color={"black"} />
            </TouchableOpacity>
            <View style={styles.partition}></View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor:"white",
        justifyContent: "flex-start",
        height: "100%",
        width: '100%',
    },
    icon:{
        marginRight:10,
    },
    drawerItemContainer:{
        height: 30,
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        margin:25,
    },
    drawerItem:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    text:{
        fontWeight: "400",
        fontSize: 20,
    },
    partition:{
        width:"100%",
        height:1,
        backgroundColor:colors.light,
    }
})