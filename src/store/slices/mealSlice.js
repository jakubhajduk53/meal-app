import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "meal/fetchData",
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

const mealSlice = createSlice({
  name: "meal",
  initialState: {
    mealList: [],
  },
  reducers: {
    selectMeal(state, action) {
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
});

export const { selectMeal } = mealSlice.actions;
export const mealReducer = mealSlice.reducer;
