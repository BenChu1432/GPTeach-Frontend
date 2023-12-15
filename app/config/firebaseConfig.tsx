import { initializeApp } from 'firebase/app';
import {
    APIKEY,
    AUTO_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APPID,
    MEASUREMENT_ID
} from "@env";
import { initializeAuth} from 'firebase/auth';
import * as firebaseAuth from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

// initialize auth




const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTO_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APPID,
    measurementId: MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: reactNativePersistence(AsyncStorage),
});
export const FIREBASE_AUTH = app;