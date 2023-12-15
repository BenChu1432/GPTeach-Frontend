import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import {Listing} from "../model/Listing";

const expiryMinutes=5;


const store=async (key: string, data: unknown)=>{
    try{
        const item={
            data: data,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(key, JSON.stringify(item))
    }catch (e){
        console.log(e);
    }
}

const isExpired=(item:any)=>{
    const now=moment(Date.now());
    const storedTime=moment(item.timestamp);
    return now.diff(storedTime,"minutes")>expiryMinutes;

}

const get=async (key:string)=>{
    try{
        const data=await AsyncStorage.getItem(key);
        if(data==undefined) return null;
        const item=JSON.parse(data);
        if(isExpired(item)){
            await AsyncStorage.removeItem(key);
            return null;
        }
        return item;

    }catch(e){
        console.log(e)
    }
}

export default {store, get};