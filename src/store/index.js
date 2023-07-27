import { configureStore } from "@reduxjs/toolkit";
import {
  mealReducer,
  selectMeal,
  fetchData,
  fetchRandomMeal,
} from "./slices/mealSlice";

const store = configureStore({
  reducer: {
    meal: mealReducer,
  },
});

export { store, selectMeal, fetchData, fetchRandomMeal };
