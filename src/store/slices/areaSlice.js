import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_SITE_URL = process.env.REACT_APP_API_SITE_URL;

export const fetchAreas = createAsyncThunk("areas/fetchAreas", async () => {
  const { data, error } = await axios.get(
    `${API_SITE_URL + API_KEY}/list.php?a=list`
  );
  if (error) {
    throw new Error(error.message);
  }
  if (data.meals) {
    return data.meals;
  }
});

export const fetchAreaItems = createAsyncThunk(
  "areas/fetchAreaItems",
  async ({ areaName }) => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/filter.php?a=${areaName}`
    );
    if (error) {
      throw new Error(error.message);
    }
    if (data.meals) {
      return data.meals;
    }
  }
);

const areasSlice = createSlice({
  name: "areas",
  initialState: {
    areasList: [],
    areaItems: [],
    error: null,
    loading: false,
  },
  reducers: {
    resetAreaItems(state) {
      state.areaItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAreas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAreas.fulfilled, (state, action) => {
        state.loading = false;
        state.areasList = action.payload;
      })
      .addCase(fetchAreas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAreaItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAreaItems.fulfilled, (state, action) => {
        state.loading = false;
        state.areaItems = action.payload;
      })
      .addCase(fetchAreaItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetAreaItems } = areasSlice.actions;
export const areasReducer = areasSlice.reducer;
