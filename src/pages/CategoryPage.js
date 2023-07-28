import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchCategoryItems,
  resetCategoryItems,
} from "../store/slices/categorySlice";

const getCategories = (state) => state.categories.categoriesList;

const selectCategories = createSelector(
  [getCategories],
  (categoriesList) => categoriesList
);

const getCategoryItems = (state) => state.categories.categoryItems;

const selectCategoryItems = createSelector(
  [getCategoryItems],
  (categoryItems) => categoryItems
);

function CategoryPage() {
  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState(false);

  const categoriesList = useSelector(selectCategories);

  const categoryItems = useSelector(selectCategoryItems);

  const handleClick = async (categoryName) => {
    setIsSelected(true);
    dispatch(fetchCategoryItems({ categoryName }));
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(resetCategoryItems());
  }, []);

  return (
    <div className="grid justify-items-center">
      <p className="text-3xl mb-3">Categories</p>
      <div>
        {isSelected ? (
          <CategoryList
            items={categoryItems}
            type="items"
            handleClick={() => {
              setIsSelected(false);
              dispatch(resetCategoryItems());
            }}
          />
        ) : (
          <CategoryList
            items={categoriesList}
            type="category"
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
