import axios from "axios";
import { useState } from "react";
import Meal from "./components/Meal";
import SearchBar from "./components/SearchBar";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_SITE_URL = process.env.REACT_APP_API_SITE_URL;

function App() {
  const [currentMeal, setCurrentMeal] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async (mealName) => {
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
      setCurrentMeal([]);
    }
  };

  const fetchRandomMeal = async () => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/random.php`
    );
    if (error) {
      return;
    }
    if (data.meals) {
      setCurrentMeal(data.meals);
    } else {
      setCurrentMeal([]);
    }
  };

  return (
    <div className="grid p-2">
      <SearchBar
        fetchData={fetchData}
        setErrorMessage={setErrorMessage}
        fetchRandomMeal={fetchRandomMeal}
      />
      <div className="text-red-500 place-self-center md:text-lg">
        {errorMessage}
      </div>
      <div
        className={
          "grid place-content-center justify-items-center w-full h-auto gap-5 " +
          (currentMeal.length >= 3 ? "lg:grid-cols-2 2xl:grid-cols-3" : "")
        }
      >
        {currentMeal?.map((meal) => {
          return <Meal key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </div>
  );
}

export default App;
