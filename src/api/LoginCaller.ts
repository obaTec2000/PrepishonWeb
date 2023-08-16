import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import endpoints from "./endpoints";


export const LoginCaller = createAsyncThunk('auth/login',async (data:any) => {
    try {
        const response = await api.post(endpoints.login, data)
        // console.log('Login Response: ', response?.data)
        return response?.data
    } catch (error) {
        // console.log('Login Reducer Error: ', error?.response?.data)
        return error?.response?.data
    }
})