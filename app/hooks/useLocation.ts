import {useEffect, useState} from "react";
import * as Location from "expo-location";

export const useLocation=()=>{
    const [location, setLocation]=useState<LocationData|undefined>(undefined);

    const requestLocationPermission=async ()=>{
        try{
            const {granted}=await Location.requestForegroundPermissionsAsync();
            if(!granted) return;
            const result=await Location.getLastKnownPositionAsync();
            setLocation({longitude: result!.coords.longitude, latitude: result!.coords.latitude} )
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        requestLocationPermission();
    }, []);

    return location;
};