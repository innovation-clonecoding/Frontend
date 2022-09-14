import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, getDefaultMiddleware } from "@reduxjs/toolkit";
import axios from "axios";

// const baseUrl = `http://15.164.163.50:8080/velog?search=`;
const baseUrl = `http://localhost:3001/posts?title=`;

const initialState = {
  search: [],
  isLoading: false,
  error: null,
};

export const __getSearchData = createAsyncThunk(
  "getSearchData",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(baseUrl + `${payload}`);
      console.log("response", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log("errorrrrr", err.response);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const search = createSlice({
  name: "serach",
  initialState,
  reducers: {},

  extraReducers: {
    [__getSearchData.pending]: (state, action) => {
      state.isLoding = true;
    },
    [__getSearchData.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.search = action.payload;
    },
    [__getSearchData.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = search.actions;
export default search.reducer;
