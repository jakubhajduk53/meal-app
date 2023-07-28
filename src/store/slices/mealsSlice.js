import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_SITE_URL = process.env.REACT_APP_API_SITE_URL;

export const fetchMeals = createAsyncThunk(
  "meal/fetchMeals",
  async ({ mealName }) => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/search.php?s=${mealName}`
    );
    if (error) {
      throw new Error(error.message);
    }
    if (data.meals) {
      return data.meals;
    }
  }
);

export const fetchRandomMeal = createAsyncThunk(
  "meal/fetchRandomMeal",
  async () => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/random.php`
    );
    if (error) {
      throw new Error(error.message);
    }
    if (data.meals) {
      return data.meals;
    }
  }
);

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    mealsList: [],
    error: null,
    loading: false,
  },
  reducers: {
    selectMeals(state, action) {
      state.selectedCar = {
        id: action.payload.id,
        name: action.payload.name,
        year_of_production: action.payload.year_of_production,
        price: action.payload.price,
        location: action.payload.location,
        image_url: action.payload.image_url,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.loading = false;
        state.mealsList = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRandomMeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomMeal.fulfilled, (state, action) => {
        state.loading = false;
        state.mealsList = action.payload;
      })
      .addCase(fetchRandomMeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectMeals } = mealsSlice.actions;
export const mealsReducer = mealsSlice.reducer;
