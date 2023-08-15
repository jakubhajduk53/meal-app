import classNames from "classnames";

function Tag({ className, value, onClick }) {
  const tagClasses = classNames(
    " bg-green-200 p-1 rounded-xl cursor-pointer shadow-md",
    className
  );

  return (
    <div className={tagClasses} onClick={onClick}>
      {value}
    </div>
  );
}

export default Tag;
