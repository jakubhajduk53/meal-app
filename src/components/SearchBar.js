import { useState } from "react";

function SearchBar({ fetchData }) {
  const [mealName, setMealName] = useState("");
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
          fetchData(mealName);
        }}
      >
        SHOW RECIPE
      </button>
    </div>
  );
}

export default SearchBar;
