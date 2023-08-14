import CategoryItem from "./CategoryItem";
import { useDispatch } from "react-redux";
import { fetchMeals } from "../store";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";

function CategoryList({ items, type, handleClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-5">
        {items?.map((item) => {
          return (
            <CategoryItem
              key={nanoid()}
              value={type === "category" ? item?.strCategory : item?.strMeal}
              type={type}
              onClick={() => {
                if (type === "category") {
                  handleClick(item?.strCategory);
                } else {
                  const { strMeal } = item;
                  dispatch(fetchMeals({ mealName: strMeal }));
                  navigate("/");
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
