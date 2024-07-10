/**
 * Copyright (c) 2024 Wonderbricks Limited
 * All rights reserved.
 *
 * This source code is proprietary and confidential. It is not to be
 * distributed or copied without express written permission from Wonderbricks Limited.
 */
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import authSlice, { authMiddleware } from "../slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import appSlice, { appMiddleware } from "../slices/appSlice";

const logger = createLogger();
const enableDevTools = process.env.EXPO_PUBLIC_ENABLE_REDUX_DEBUGGER === "true";

const authPersistConfig = {
    key: "user",
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
};

const persistDataConfig = {
    key: "persist-data",
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
};

export type ReduxToolkitStore = typeof store;
export const store = configureStore({
    reducer: {
        authSlice: persistReducer<ReturnType<typeof authSlice.reducer>>(authPersistConfig, authSlice.reducer),
        appSlice: appSlice.reducer,
    },
    devTools: enableDevTools ? true : false,
    middleware: (gDM) =>
        gDM({
            serializableCheck: false,
        }).concat(...(enableDevTools ? [logger] : []), authMiddleware.middleware, appMiddleware.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
