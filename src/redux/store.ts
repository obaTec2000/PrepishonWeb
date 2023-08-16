import { configureStore } from "@reduxjs/toolkit";
import Counter from "./reducers/Counter";
import LoginReducer from "./reducers/LoginReducer";
import SignupReducer from "./reducers/SignupReducer";

const store = configureStore({
    reducer: {
        counter: Counter,
        login: LoginReducer,
        signup: SignupReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;