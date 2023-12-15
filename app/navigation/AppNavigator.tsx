import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AppPickerScreen from "../screens/AppPickerScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import FeedNavigator from "./FeedNavigator";
import {MaterialIcons} from "@expo/vector-icons";
import AddListingButton from "./AddListingButton";
import routes from "./routes";

const Tab=createBottomTabNavigator();

const AppNavigator=()=>(
    <Tab.Navigator>
        <Tab.Screen name={"Feed"} component={FeedNavigator} options={{headerShown: false,tabBarIcon:({color,size})=>(
            <MaterialIcons name={"home"} color={color} size={size}/>
            )}}/>
        <Tab.Screen name={"Add"} component={ListingEditScreen} options={({navigation})=>
            ({tabBarButton:()=><AddListingButton onPress={()=>{navigation.navigate(routes.ADD)}}/>})}/>
        <Tab.Screen name={"Account"} component={MyAccountScreen} options={{tabBarIcon:({color,size})=>(
                <MaterialIcons name={"person"} color={color} size={size}/>
            )}}/>
    </Tab.Navigator>
)

export default AppNavigator;