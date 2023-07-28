import { configureStore } from "@reduxjs/toolkit";
import {
  mealsReducer,
  selectMeals,
  fetchMeals,
  fetchRandomMeal,
} from "./slices/mealsSlice";
import {
  categoriesReducer,
  selectCategories,
  fetchCategories,
  fetchCategoryItems,
  resetCategoryItems,
} from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    categories: categoriesReducer,
  },
});

export {
  store,
  selectMeals,
  fetchMeals,
  fetchRandomMeal,
  selectCategories,
  fetchCategories,
  fetchCategoryItems,
  resetCategoryItems,
};
