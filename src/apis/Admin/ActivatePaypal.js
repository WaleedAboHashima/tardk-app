import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const initialState = {
  data: [],
  loading: false,
  state: "",
  error: "",
  status: "",
};
const cookies = new Cookies();
const api = "https://tardq.onrender.com/admin/payment/";

export const PaypalActivateHandler = createAsyncThunk(
  "PaypalActivateHandler/PaypalActivateSlice",
  async (arg) => {
    try {
      const response = await axios.put(api + arg.payment_id, {}, {
        headers: { authorization: `Bearer ${cookies.get("_auth_token")}` },
      });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (err) {
      return {
        message: err.response.data.err,
        status: err.response.status,
      };
    }
  }
);

const PaypalActivateSlice = createSlice({
  name: "PaypalActivateSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PaypalActivateHandler.fulfilled, (state, action) => {
      state.loading = true;
      if (action.payload.status === 201) {
        state.data = action.payload.data;
        state.state = "Success";
        state.status = action.payload.status;
        state.error = null;
        state.loading = false;
      } else {
        state.data = {};
        state.state = "Error";
        state.status = action.payload.status;
        state.error = action.payload.message;
        state.loading = false;
      }
    });
    builder.addCase(PaypalActivateHandler.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "Server Error";
      state.data = {};
      state.state = "Rejected";
      state.status = 500;
    });
    builder.addCase(PaypalActivateHandler.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.data = {};
      state.state = "Pending";
      state.status = "";
    });
  },
});

export default PaypalActivateSlice.reducer;
