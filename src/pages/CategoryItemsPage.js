import { CategoryList, Button } from "../components/";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

const getCategoryItems = (state) => state.categories.categoryItems;

const selectCategoryItems = createSelector(
  [getCategoryItems],
  (categoryItems) => categoryItems
);

const getCategoryName = (state) => state.categories.selectedCategory;

const selectCategoryName = createSelector(
  [getCategoryName],
  (selectedCategory) => selectedCategory
);

function CategoryItemsPage() {
  const navigate = useNavigate();

  const categoryItems = useSelector(selectCategoryItems);

  const categoryName = useSelector(selectCategoryName);

  return (
    <div className="grid justify-items-center">
      <p className="text-xl italic">{categoryName ? categoryName : null}</p>
      <div>
        <CategoryList items={categoryItems} type="items" />
      </div>
      <Button
        value="Go back"
        onClick={() => {
          navigate("../list");
        }}
        className="mt-3 mb-3"
      />
    </div>
  );
}

export default CategoryItemsPage;
