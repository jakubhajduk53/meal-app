import AreaItem from "./AreaItem";

import { useDispatch } from "react-redux";
import { fetchMeals } from "../store";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";

function AreaList({ items, type, handleClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <div>
        {items?.map((item) => {
          return (
            <AreaItem
              key={nanoid()}
              value={type === "area" ? item?.strArea : item?.strMeal}
              type={type}
              onClick={() => {
                if (type === "area") {
                  handleClick(item?.strArea);
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

export default AreaList;
