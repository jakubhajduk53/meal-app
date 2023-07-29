import { configureStore } from "@reduxjs/toolkit";
import {
  mealsReducer,
  selectMeals,
  fetchMeals,
  fetchRandomMeal,
} from "./slices/mealsSlice";
import {
  categoriesReducer,
  fetchCategories,
  fetchCategoryItems,
  resetCategoryItems,
} from "./slices/categorySlice";
import {
  areasReducer,
  fetchAreas,
  fetchAreaItems,
  resetAreaItems,
} from "./slices/areaSlice";

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    categories: categoriesReducer,
    areas: areasReducer,
  },
});

export {
  store,
  selectMeals,
  fetchMeals,
  fetchRandomMeal,
  fetchCategories,
  fetchCategoryItems,
  resetCategoryItems,
  fetchAreas,
  fetchAreaItems,
  resetAreaItems,
};
