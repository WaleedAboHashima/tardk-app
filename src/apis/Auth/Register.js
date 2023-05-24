import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    state: '',
    error: '',
    status: '',
}

const api = 'https://tardq.onrender.com/auth/register';

export const RegisterHandler = createAsyncThunk('RegisterSlice/RegisterHandler', async (arg) => {
    try {
        const response = await axios.post(api, {
            username: arg.username,
            email: arg.email,
            home_location: arg.location,
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
            status: err.response.status,
            message: err.response.data.err.status
        }
    }
})


const RegisterSlice = createSlice({
    name: 'RegisterSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(RegisterHandler.fulfilled, (state, action) => {
            state.loading = true;
            if (action.payload.status === 201) {
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
        builder.addCase(RegisterHandler.rejected, (state) => {
            state.loading = false;
            state.error = 'Server Error'
            state.data = {};
            state.state = 'Rejected';
            state.status = 500;
        })
        builder.addCase(RegisterHandler.pending, state => {
            state.loading = true;
            state.error = '';
            state.data = {};
            state.state = 'Pending';
            state.status = '';
        })
    }
})


export default RegisterSlice.reducer;