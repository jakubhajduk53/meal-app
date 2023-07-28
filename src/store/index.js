import { configureStore } from "@reduxjs/toolkit";
import {
  mealsReducer,
  selectMeals,
  fetchMeals,
  fetchRandomMeal,
} from "./slices/mealsSlice";

const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
});

export { store, selectMeals, fetchMeals, fetchRandomMeal };
