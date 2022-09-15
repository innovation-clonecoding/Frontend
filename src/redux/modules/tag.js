import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, getDefaultMiddleware } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = `http://15.164.163.50:8080/`;

const initialState = {
  tags: [],
  isLoading: false,
  error: null,
};

export const __getTagData = createAsyncThunk(
  "getTagData",
  async (payload, thunkAPI) => {
    const { nickName, tagName } = payload;
    try {
      const { data } = await axios.get(`velog/${nickName}?tag=${tagName}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const tags = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTagData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getTagData.fulfilled]: (state, action) => {
      console.log("asfasdfas", action.payload);
      state.isLoading = false;
      state.tags = action.payload;
    },
    [__getTagData.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = tags.actions;
export default tags.reducer;
