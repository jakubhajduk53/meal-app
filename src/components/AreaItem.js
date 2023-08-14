import classNames from "classnames";

function AreaItem({ value, className, onClick }) {
  const areaItemClasses = classNames(
    "text-center text-lg sm:text-xl hover:text-blue-400 cursor-pointer",
    className
  );

  return (
    <div onClick={onClick} className={areaItemClasses}>
      {value}
    </div>
  );
}

export default AreaItem;
