import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import endpoints from "./endpoints";


export const SignupCaller = createAsyncThunk('auth/register', async (data: any) => {
    try {
        const response = await api.post(endpoints.signup, data)
        console.log('Register Response: ', response?.data)
        return response?.data
    } catch (error) {
        console.log('Register Reducer Error: ', error)
        return error?.response?.data
    }
})