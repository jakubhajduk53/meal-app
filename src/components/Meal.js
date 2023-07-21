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

  console.log(ingredients);
  console.log(measures);

  return (
    <div className="grid place-content-center justify-items-center w-[480px] h-[480px] border-2 rounded-xl">
      <p className="text-lg">{meal?.strMeal}</p>
      <img className="h-48 w-48 rounded-xl" src={meal?.strMealThumb} />
      <label className="text-lg">Ingredients</label>
      <div className="flex flex-row text-sm gap-2 border">
        <div>
          {ingredients.map((ingredient) => {
            return <p key={ingredient}>{ingredient}</p>;
          })}
        </div>
        <div>
          {measures.map((measure) => {
            return <p key={measure}>{measure}</p>;
          })}
        </div>
      </div>
      <label className="text-lg">Instruction</label>
      <p className="text-sm overflow-y-scroll">{meal?.strInstructions} </p>
    </div>
  );
}

export default Meal;
