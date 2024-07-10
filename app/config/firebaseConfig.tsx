import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import * as firebaseAuth from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

// initialize auth

const { APIKEY: apiKey } = process.env;

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTO_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: reactNativePersistence(AsyncStorage),
});
export const FIREBASE_AUTH = app;
