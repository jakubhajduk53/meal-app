import { nanoid } from "nanoid";
import Button from "./Button";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsPatchQuestion } from "react-icons/bs";

function Meal({ meal }) {
  const mealData = Object.entries(meal);

  const ingredients = mealData
    .filter(
      (mealInfo) =>
        mealInfo[0].includes("Ingredient") && mealInfo[1].match(/^(?=.*\S).+$/)
    )
    .map((mealInfo) => {
      return mealInfo[1];
    });

  const measures = mealData
    .filter(
      (mealInfo) =>
        mealInfo[0].includes("Measure") && mealInfo[1].match(/^(?=.*\S).+$/)
    )
    .map((mealInfo) => {
      return mealInfo[1];
    });

  return (
    <div className="grid place-content-start justify-items-center w-[360px] md:w-[480px] h-[720px] border-2 rounded-xl hover:bg-slate-50">
      <p className="text-lg md:text-2xl pb-2">{meal?.strMeal}</p>
      <img
        className="h-48 w-48 rounded-xl"
        alt={meal?.strMeal}
        src={meal?.strMealThumb}
      />
      <label className="text-lg mt-2">Ingredients</label>
      <div className="flex flex-row text-sm gap-2 border overflow-y-scroll">
        <div>
          {ingredients.map((ingredient) => {
            return <p key={nanoid()}>{ingredient}</p>;
          })}
        </div>
        <div>
          {measures.map((measure) => {
            return <p key={nanoid()}>{measure}</p>;
          })}
        </div>
      </div>
      <label className="text-lg mt-2">Instruction</label>
      <p className="text-sm overflow-y-scroll pr-5 pl-5">
        {meal?.strInstructions}
      </p>
      <div className="flex justify-evenly w-full">
        <Button
          value="Youtube"
          className="bg-red-600 text-white hover:bg-red-700"
          icon={AiOutlineYoutube}
          onClick={() => {
            if (meal?.strYoutube) {
              window.open(meal?.strYoutube);
            }
          }}
        />
        <Button
          value="Source"
          className="bg-green-600 text-white hover:bg-green-700"
          icon={BsPatchQuestion}
          onClick={() => {
            if (meal?.strSource) {
              window.open(meal?.strSource);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Meal;
