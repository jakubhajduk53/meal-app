import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_SITE_URL = process.env.REACT_APP_API_SITE_URL;

function App() {
  const [currentMeal, setCurrentMeal] = useState({});

  const fetchData = async (endpoint) => {
    const { data, error } = await axios.get(
      `${API_SITE_URL + API_KEY}/search.php?s=${endpoint}`
    );
    if (error) {
      return;
    }
    setCurrentMeal(data.meals[0]);
  };

  return (
    <div>
      <button
        className="bg-blue-500 border rounded-xl p-5"
        onClick={() => {
          fetchData("Arrabiata");
        }}
      >
        SHOW RECIPE
      </button>
      <div>{currentMeal.strMeal}</div>
    </div>
  );
}

export default App;
