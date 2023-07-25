import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import CategoryItem from "../components/CategoryItem";
import CategoryList from "../components/CategoryList";

function CategoryPage() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_SITE_URL = process.env.REACT_APP_API_SITE_URL;

  const [categoryList, setCategoryList] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const fetchCategories = async () => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/list.php?c=list`
    );
    if (error) {
      return;
    }
    if (data.meals) {
      console.log(data.meals);
      setCategoryList(data.meals);
    } else {
      setCategoryList([]);
    }
  };

  const fetchCategoryItems = async (categoryName) => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/filter.php?c=${categoryName}`
    );
    if (error) {
      return;
    }
    if (data.meals) {
      setCategoryItems(data.meals);
    } else {
      setCategoryItems([]);
    }
  };

  const handleClick = (categoryName) => {
    setIsSelected(true);
    fetchCategoryItems(categoryName);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="grid justify-items-center">
      <p className="text-2xl">Categories</p>
      <div>
        {isSelected ? (
          <CategoryList
            items={categoryItems}
            type="items"
            handleClick={() => {
              setIsSelected(false);
              setCategoryItems([]);
            }}
          />
        ) : (
          <CategoryList
            items={categoryList}
            type="category"
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
