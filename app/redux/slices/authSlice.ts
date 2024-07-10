/**
 * Copyright (c) 2024 Wonderbricks Limited
 * All rights reserved.
 *
 * This source code is proprietary and confidential. It is not to be
 * distributed or copied without express written permission from Wonderbricks Limited.
 */
import { createAsyncThunk, createListenerMiddleware, createSlice, PayloadAction } from "@reduxjs/toolkit";

const EXPO_PUBLIC_VERSION = process.env.EXPO_PUBLIC_VERSION || "";
const EXPO_PUBLIC_BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

type AuthSliceState = {
    accessToken: string;
    refreshToken: string;
    name: string;
};

const initialState: AuthSliceState = {
    name: "",
    accessToken: "",
    refreshToken: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(authThunkAction.userLogin.fulfilled, (state, action) => {
        //     const { accessToken, refreshToken, user } = action.payload;
        //     state.accessToken = accessToken;
        //     state.refreshToken = refreshToken;
        //     state.name = user.name;
        // });
    },
});

export const authThunkAction = {
    // userLogin: createAsyncThunk(
    //     "authSlice/user-login",
    //     async (props: { email: string, password: string }, api) => {
    //         const res = await apiClient.post<WBResponse<LoginRes>>(apiRoutes.POST_LOGIN, props);
    //         return processRes(res, api);
    //     }
    // ),
};

export const authMiddleware = createListenerMiddleware();
// registerDialogAndActions(authMiddleware, []);

export default authSlice;
