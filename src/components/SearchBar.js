import { useState } from "react";

function SearchBar({ fetchData }) {
  const [mealName, setMealName] = useState("");
  return (
    <div className="flex justify-self-center gap-2 pb-5">
      <input
        className="border-2 rounded-xl w-96 h-12"
        type="text"
        value={mealName}
        onChange={(event) => {
          setMealName(event.target.value);
        }}
        placeholder="Search..."
      />
      <button
        className="bg-blue-300 border rounded-xl h-12 pl-5 pr-5 text-lg"
        onClick={() => {
          fetchData(mealName);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
