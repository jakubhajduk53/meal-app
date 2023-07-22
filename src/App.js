import axios from "axios";
import { useState } from "react";
import Meal from "./components/Meal";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_SITE_URL = process.env.REACT_APP_API_SITE_URL;

function App() {
  const [currentMeal, setCurrentMeal] = useState([]);
  const [mealName, setMealName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async () => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/search.php?s=${mealName}`
    );
    if (error) {
      return;
    }
    if (data.meals) {
      setCurrentMeal(data.meals);
    } else {
      setErrorMessage(`${mealName} not found in our database`);
    }
  };

  return (
    <div>
      <input
        className="border-2 rounded-xl"
        type="text"
        value={mealName}
        onChange={(event) => {
          setMealName(event.target.value);
        }}
      />
      <button
        className="bg-blue-500 border rounded-xl p-5"
        onClick={() => {
          fetchData();
        }}
      >
        SHOW RECIPE
      </button>
      <div>{errorMessage}</div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 place-content-center justify-items-center w-full h-auto gap-5">
        {currentMeal?.map((meal) => {
          return <Meal key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </div>
  );
}

export default App;
