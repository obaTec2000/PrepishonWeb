import { createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../../helpers/redux/LoginReducerHelper";
import { LoginCaller } from "../../api/LoginCaller";

const initialState: LoginState = {
    data: null,
    loading: false,
    error: null,
    status: 'idle'
}

const loginReducer = createSlice({
    name: 'loginReducer',
    initialState,
    reducers: {
        loginReset: (state) => {
            state.data = initialState.data
            state.status = initialState.status
            state.loading = initialState.loading
            state.error = initialState.error
        }
    },
    extraReducers: (builder) => {
        builder.
            addCase(LoginCaller.pending, (state) => {
                state.loading = true
            })
            .addCase(LoginCaller.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                if (action.payload.statusCode === 200) {
                    state.status = 'success'
                } else {
                    state.status = 'failed'
                }
            })
            .addCase(LoginCaller.rejected, (state) => {
                state.loading = false
                state.status = 'rejected'
            })
    }
})

export const { loginReset } = loginReducer.actions
export default loginReducer.reducer