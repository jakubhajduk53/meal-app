import AreaItem from "./AreaItem";
import Button from "./Button";
import { nanoid } from "nanoid";

function AreaList({ items, type, handleClick }) {
  return (
    <div className="flex flex-col items-center">
      <div>
        {items.map((item) => {
          return (
            <AreaItem
              key={nanoid()}
              value={type === "area" ? item?.strArea : item?.strMeal}
              type={type}
              onClick={() => {
                if (type === "area") {
                  handleClick(item?.strArea);
                }
              }}
            />
          );
        })}
      </div>
      {type === "items" ? (
        <Button value="Go back" onClick={handleClick} className="mt-3 mb-3" />
      ) : null}
    </div>
  );
}

export default AreaList;
