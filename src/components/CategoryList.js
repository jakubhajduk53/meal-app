import CategoryItem from "./CategoryItem";
import Button from "./Button";
import { nanoid } from "nanoid";

function CategoryList({ items, type, handleClick }) {
  return (
    <div className="flex flex-col items-center">
      <div>
        {items.map((item) => {
          return (
            <CategoryItem
              key={nanoid()}
              value={type === "category" ? item?.strCategory : item?.strMeal}
              type={type}
              onClick={() => {
                if (type === "category") {
                  handleClick(item?.strCategory);
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

export default CategoryList;
