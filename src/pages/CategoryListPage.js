import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchCategoryItems,
  resetCategoryItems,
  selectCategory,
} from "../store/slices/categorySlice";
import { useNavigate } from "react-router";

const getCategories = (state) => state.categories.categoriesList;

const selectCategories = createSelector(
  [getCategories],
  (categoriesList) => categoriesList
);

function CategoryListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoriesList = useSelector(selectCategories);

  const handleClick = async (categoryName) => {
    dispatch(fetchCategoryItems({ categoryName }));
    dispatch(selectCategory(categoryName));
    navigate("../items");
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(resetCategoryItems());
  }, []);

  return (
    <div className="grid justify-items-center">
      <div>
        <CategoryList
          items={categoriesList}
          type="category"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default CategoryListPage;
