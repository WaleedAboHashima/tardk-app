import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    state: '',
    error: '',
    status: '',
}

const api = 'https://tardq.onrender.com/auth/login';

export const LoginHandler = createAsyncThunk('LoginSlice/LoginHandler', async (arg) => {
    try {
        const response = await axios.post(api, {
            phone: arg.phone,
            password: arg.password
        })
        return {
            data: response.data,
            status: response.status
        }
    }
    catch (err) {
        return {
            message: err.response.data.err.status,
            status: err.response.status
        }
    }
})


const LoginSlice = createSlice({
    name: 'LoginSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LoginHandler.fulfilled, (state, action) => {
            state.loading = true;
            if (action.payload.status === 200) {
                state.data = action.payload.data;
                state.state = 'Success';
                state.status = action.payload.status;
                state.error = null;
                state.loading = false;
            }
            else {
                state.data = {};
                state.state = 'Error';
                state.status = action.payload.status;
                state.error = action.payload.message;
                state.loading = false;
            }
        })
        builder.addCase(LoginHandler.rejected, (state, action) => {
            console.log(action)
            state.loading = false;
            state.error = 'Server Error';
            state.data = {};
            state.state = 'Rejected';
            state.status = 500;
        })
        builder.addCase(LoginHandler.pending, state => {
            state.loading = true;
            state.error = '';
            state.data = {};
            state.state = 'Pending';
            state.status = '';
        })
    }
})


export default LoginSlice.reducer;