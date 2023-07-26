import classNames from "classnames";

function AreaItem({ value, className, onClick, type }) {
  const areaItemClasses = classNames(
    "text-lg hover:text-blue-400",
    type === "area" ? "cursor-pointer" : null,
    className
  );

  return (
    <div onClick={onClick} className={areaItemClasses}>
      - {value}
    </div>
  );
}

export default AreaItem;
