import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserInfo = async (token:any,setUserInfo:(userInfo:any)=>void) => {
    if (!token) return;
    // Based on the access token, we hit url endpoint and retrieve user information
    try {
        const response = await axios({
            method: 'get',
            url: 'https://www.googleapis.com/userinfo/v2/me',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        const user = response.data;
        console.log(user)
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setUserInfo(user);
    } catch (error) {
        console.log(error)
    }
};


export default getUserInfo;