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
  selectCategory,
} from "./slices/categorySlice";
import {
  areasReducer,
  fetchAreas,
  fetchAreaItems,
  resetAreaItems,
  selectArea,
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
  selectArea,
  selectCategory,
};
