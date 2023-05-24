import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const initialState = {
    data: [],
    loading: false,
    state: '',
    error: '',
    status: '',
}
const cookies = new Cookies();
const api = 'https://tardq.onrender.com/user/delivery';

export const AddDriverHandler = createAsyncThunk('AddDriverSlice/AddDriverHandler', async (arg) => {
    try {
        const response = await axios.post(api, arg, {headers: {authorization : `Bearer ${cookies.get('_auth_token')}`}})
        return {
            data: response.data,
            status: response.status
        }
    }
    catch (err) {
        return {
            message: err.response.data.errors[0].msg,
            status: err.response.status
        }
    }
})


const AddDriverSlice = createSlice({
    name: 'AddDriverSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddDriverHandler.fulfilled, (state, action) => {
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
        builder.addCase(AddDriverHandler.rejected, (state, action) => {
            console.log(action)
            state.loading = false;
            state.error = 'Server Error';
            state.data = {};
            state.state = 'Rejected';
            state.status = 500;
        })
        builder.addCase(AddDriverHandler.pending, state => {
            state.loading = true;
            state.error = '';
            state.data = {};
            state.state = 'Pending';
            state.status = '';
        })
    }
})


export default AddDriverSlice.reducer;