import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, getDefaultMiddleware } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = `http://15.164.163.50:8080/post/`;

const initialState = {
  likes: [],
  isLoading: false,
  error: null,
};

export const __getDetailData = createAsyncThunk(
  "getDetailData",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(baseUrl + `${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const __getLikes = createAsyncThunk(
  "getLikes",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(baseUrl + `${payload}`);
      return thunkAPI.fulfillWithValue(data.data.likesNum);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const likes = createSlice({
  name: "likes",
  initialState,
  reducers: {},

  extraReducers: {
    [__getLikes.pending]: (state, action) => {
      state.isLoding = true;
    },
    [__getDetailData.fulfilled]: (state, action) => {
      state.isLoding = false;
    },
    [__getLikes.fulfilled]: (state, action) => {
      state.isLoding = false;
    },
    [__getLikes.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = likes.actions;
export default likes.reducer;
