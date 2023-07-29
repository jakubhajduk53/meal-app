import classNames from "classnames";

function CategoryItem({ value, className, onClick }) {
  const categoryItemClasses = classNames(
    "text-lg hover:text-blue-400 cursor-pointer",
    className
  );

  return (
    <div onClick={onClick} className={categoryItemClasses}>
      - {value}
    </div>
  );
}

export default CategoryItem;
