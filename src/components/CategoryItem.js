import classNames from "classnames";

function CategoryItem({ value, className, onClick, type }) {
  const categoryItemClasses = classNames(
    "text-lg hover:text-blue-400",
    type === "category" ? "cursor-pointer" : null,
    className
  );

  return (
    <div onClick={onClick} className={categoryItemClasses}>
      - {value}
    </div>
  );
}

export default CategoryItem;
