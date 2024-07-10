/**
 * Copyright (c) 2024 Wonderbricks Limited
 * All rights reserved.
 *
 * This source code is proprietary and confidential. It is not to be
 * distributed or copied without express written permission from Wonderbricks Limited.
 */
import { createAsyncThunk, createListenerMiddleware, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigationTitle, QuestionType } from "../../data/enum/enum";

const EXPO_PUBLIC_VERSION = process.env.EXPO_PUBLIC_VERSION || "";
const EXPO_PUBLIC_BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

type AppSliceState = {
    nameShownOnNavigationBar: NavigationTitle;
    customizedVocab: string;
    selectedFormNotes: string[];
    selectedItems: string[];
    selectedCategory: string;
    library: string;
    questionType: QuestionType;
    theme: string;
    levelOfVocabulary: string;
    numOfQuestions: number;
    numOfParagraphs: number;
    title: string;
    fileType: string;
    loading: boolean;
};

const initialState: AppSliceState = {
    nameShownOnNavigationBar: "Grammar",
    customizedVocab: "",
    selectedFormNotes: [],
    selectedItems: [],
    selectedCategory: "",
    library: "",
    questionType: "Fill-in-the-blank questions",
    theme: "random",
    levelOfVocabulary: "Beginner level",
    numOfQuestions: 5,
    numOfParagraphs: 5,
    title: "",
    fileType: "PDF",
    loading: false,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setCustomizedVocab: (state, action) => {
            state.customizedVocab = action.payload;
        },
        setSelectedFormNotes: (state, action) => {
            const newItemArray: string[] = [];
            const updatedArray = newItemArray.concat(action.payload);
            state.selectedFormNotes = updatedArray;
        },
        setSelectedItems: (state, action) => {
            const newItemArray: string[] = [];
            const updatedArray = newItemArray.concat(action.payload);
            state.selectedItems = updatedArray;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setLibrary: (state, action) => {
            state.library = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setQuestionType: (state, action) => {
            state.questionType = action.payload;
        },
        setCurrentCategory: (state, action) => {
            state.nameShownOnNavigationBar = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLevelOfVocabulary: (state, action) => {
            state.levelOfVocabulary = action.payload;
        },
        setNumOfQuestions: (state, action) => {
            state.numOfQuestions = action.payload;
        },
        setNumOfParagraphs: (state, action) => {
            state.numOfParagraphs = action.payload;
        },
        setFileType: (state, action) => {
            state.fileType = action.payload;
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

export const appThunkAction = {
    // userLogin: createAsyncThunk(
    //     "authSlice/user-login",
    //     async (props: { email: string, password: string }, api) => {
    //         const res = await apiClient.post<WBResponse<LoginRes>>(apiRoutes.POST_LOGIN, props);
    //         return processRes(res, api);
    //     }
    // ),
};

export const appMiddleware = createListenerMiddleware();
// registerDialogAndActions(authMiddleware, []);

export default appSlice;
