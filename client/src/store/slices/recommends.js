import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBloggers = createAsyncThunk(
  'recommends/fetchBloggers',
  async () => {
    const { data } = await axios.get('/recommends/bloggers');
    return data;
  }
);

export const fetchActual = createAsyncThunk(
  'recommends/fetchActual',
  async () => {
    const { data } = await axios.get('/recommends/actual');
    return data;
  }
);

const initialState = {
  bloggers: [],
  actual: [],
  isBloggersLoading: true,
  isActualLoading: true,
};

export const recommendsSlice = createSlice({
  name: 'recommends',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBloggers.pending, (state, action) => {
      state.isBloggersLoading = true;
    });
    builder.addCase(fetchBloggers.fulfilled, (state, action) => {
      state.isBloggersLoading = false;
      state.bloggers = action.payload;
    });
    builder.addCase(fetchActual.pending, (state, action) => {
      state.isActualLoading = true;
    });
    builder.addCase(fetchActual.fulfilled, (state, action) => {
      state.isActualLoading = false;
      state.actual = action.payload;
    });
  },
});

export const {} = recommendsSlice.actions;

export default recommendsSlice.reducer;
