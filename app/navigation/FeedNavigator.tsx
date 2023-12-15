import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoryScreen from "../screens/CategoryScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack=createNativeStackNavigator();

const FeedNavigator=()=>(
    <Stack.Navigator initialRouteName={"Feed"} screenOptions={{headerShown: false}}>
        <Stack.Screen name={"Listings"} component={CategoryScreen}></Stack.Screen>
        <Stack.Screen name={"ListingDetails"} component={ListingDetailsScreen}></Stack.Screen>
    </Stack.Navigator>
)

export default FeedNavigator;