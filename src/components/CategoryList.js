import CategoryItem from "./CategoryItem";
import Button from "./Button";
import { nanoid } from "nanoid";

function CategoryList({ items, type, handleClick }) {
  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <CategoryItem
              key={nanoid()}
              value={type === "category" ? item?.strCategory : item?.strMeal}
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
        <Button value="Go back" onClick={handleClick} />
      ) : null}
    </div>
  );
}

export default CategoryList;
