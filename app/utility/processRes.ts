/**
 * Copyright (c) 2024 Wonderbricks Limited
 * All rights reserved.
 *
 * This source code is proprietary and confidential. It is not to be
 * distributed or copied without express written permission from Wonderbricks Limited.
 */
import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { WBResponse } from "../axios/responseTypes";
type ThunkAPI = Parameters<Parameters<typeof createAsyncThunk>[1]>[1];

const processRes = <T>(res: AxiosResponse<WBResponse<T>>, thunkAPI: ThunkAPI) => {
    const { success } = res.data;
    if (!success) {
        return thunkAPI.rejectWithValue(res.data.errorMessage);
    } else {
        return res?.data?.result;
    }
};

export default processRes;
