import { configureStore, createSlice } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: (state) => {
            state.value += 1
        },
        decremented: (state) => {
            state.value -= 1
        },
    },
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        authenticationRights: [],
        role: [],
        currentUsername: '',
        nameInitials: '',
        companyName: '',
        email: '',
        fullName: '',
    },

    reducers: {
        authenticate: (state, action) => {
            state.isAuth = true
            state.currentUsername = action.payload.username
            state.nameInitials = action.payload.name_initials
            state.companyName = action.payload.company_name
            state.email = action.payload.username
            state.fullName = action.payload.full_name
            state.role = []
        },

        deauthenticate: (state) => {
            state.isAuth = false
        },
        initializeRights: (state) => {
            state.authenticationRights = []
        },
        addRights: (state, action) => {
            state.authenticationRights.push(action.payload)
        },
        addRole: (state, action) => {
            state.role.push(action.payload)
        },
        clearUserData: (state) => {
            state = {
                isAuth: false,
                authenticationRights: [],
                currentUsername: 'unLogined',
                currentUsername: '',
                role: [],
                nameInitials: '',
                companyName: '',
                email: '',
                fullName: '',
            }
        },
    },
})

export const { incremented, decremented } = counterSlice.actions
export const {
    authenticate,
    addRights,
    addRole,
    initializeRights,
    deauthenticate,
    clearUserData,
} = userSlice.actions

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
}

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    user: userSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})
