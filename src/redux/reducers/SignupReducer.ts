import { createSlice } from "@reduxjs/toolkit";
import { SignupCaller } from "../../api/SignupCaller";
import { SignupState } from "../../helpers/redux/SignupReducerHelper";

const initialState: SignupState = {
    data: null,
    loading: false,
    error: null,
    status: 'idle',
}

const signupReducer = createSlice({
    name: 'signupReducer',
    initialState,
    reducers: {
        signupReset: (state) => {
            state.data = initialState.data
            state.status = initialState.status
            state.loading = initialState.loading
            state.error = initialState.error
        }
    },
    extraReducers: (builder) => {
        builder.
            addCase(SignupCaller.pending, (state) => {
                state.loading = true
            })
            .addCase(SignupCaller.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                if (action.payload.statusCode === 200) {
                    state.status = 'success'
                } else {
                    state.status = 'failed'
                }
            })
            .addCase(SignupCaller.rejected, (state) => {
                state.loading = false
                state.status = 'rejected'
            })
    }
})

export const { signupReset } = signupReducer.actions
export default signupReducer.reducer