import classNames from "classnames";

function CategoryItem({ value, className, onClick }) {
  const categoryItemClasses = classNames(
    "text-center text-lg sm:text-xl hover:text-blue-400 cursor-pointer",
    className
  );

  return (
    <div onClick={onClick} className={categoryItemClasses}>
      {value}
    </div>
  );
}

export default CategoryItem;
