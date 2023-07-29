import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_SITE_URL = process.env.REACT_APP_API_SITE_URL;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/list.php?c=list`
    );
    if (error) {
      throw new Error(error.message);
    }
    if (data.meals) {
      return data.meals;
    }
  }
);

export const fetchCategoryItems = createAsyncThunk(
  "categories/fetchCategoryItems",
  async ({ categoryName }) => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/filter.php?c=${categoryName}`
    );
    if (error) {
      throw new Error(error.message);
    }
    if (data.meals) {
      return data.meals;
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesList: [],
    categoryItems: [],
    selectedCategory: "",
    error: null,
    loading: false,
  },
  reducers: {
    resetCategoryItems(state) {
      state.categoryItems = [];
    },
    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesList = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategoryItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryItems.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryItems = action.payload;
      })
      .addCase(fetchCategoryItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetCategoryItems, selectCategory } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
