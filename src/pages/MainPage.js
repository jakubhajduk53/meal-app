import Meal from "../components/Meal";
import SearchBar from "../components/SearchBar";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import classNames from "classnames";

const getMeals = (state) => state.meals.mealsList;

const selectMeals = createSelector([getMeals], (mealsList) => mealsList);

function MainPage() {
  const mealsList = useSelector(selectMeals);

  const columnClasses = classNames(
    "grid place-content-center justify-items-center w-full h-auto gap-5 " +
      (mealsList?.length >= 3 ? "lg:grid-cols-2 2xl:grid-cols-3" : "")
  );

  return (
    <div className="grid p-2">
      <SearchBar />
      <div className={columnClasses}>
        {mealsList?.map((meal) => {
          return <Meal key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </div>
  );
}

export default MainPage;
