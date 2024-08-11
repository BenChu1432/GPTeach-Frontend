/**
 * Copyright (c) 2024 Wonderbricks Limited
 * All rights reserved.
 *
 * This source code is proprietary and confidential. It is not to be
 * distributed or copied without express written permission from Wonderbricks Limited.
 */
import { createAsyncThunk, createListenerMiddleware, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WBResponse } from "../../axios/responseTypes";
import apiClient from "../../axios/apiClient";
import apiRoutes from "../../axios/apiRoutes";
import { LoginResponse, TokenPayload } from "../../data/dto";
import { loadingActions } from "../../utility/loadingActions";
import processRes from "../../utility/processRes";
import registerEffects from "../../utility/registerEffect";

const EXPO_PUBLIC_VERSION = process.env.EXPO_PUBLIC_VERSION || "";
const EXPO_PUBLIC_BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

type AuthSliceState = {
    accessToken: string;
    refreshToken: string;
    user: TokenPayload | undefined;
};

const initialState: AuthSliceState = {
    accessToken: "",
    refreshToken: "",
    user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearUser: (state, action) => {
            state.user = undefined;
            state.accessToken = "";
            state.refreshToken = "";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authThunkAction.login.fulfilled, (state, action) => {
            const { accessToken, refreshToken, user } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.user = user;
        });
    },
});

export const authThunkAction = {
    signup: createAsyncThunk("authSlice/user-singup", async (props: { email: string; password: string }, api) => {
        const res = await apiClient.post<WBResponse<undefined>>(apiRoutes.CREATE_USER, props);
        return processRes(res, api);
    }),
    login: createAsyncThunk("authSlice/user-login", async (props: { email: string; password: string }, api) => {
        const res = await apiClient.post<WBResponse<LoginResponse>>(apiRoutes.LOGIN, props);
        return processRes(res, api);
    }),
};

export const authMiddleware = createListenerMiddleware();
registerEffects(authMiddleware, [
    ...loadingActions(authThunkAction.login),
    ...loadingActions(authThunkAction.signup),
    {
        rejections: [authThunkAction.login.rejected, authThunkAction.signup.rejected],
    },
]);

export default authSlice;
