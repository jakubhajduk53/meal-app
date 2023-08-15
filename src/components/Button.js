import classNames from "classnames";

function Button({ className, onClick, value, type, icon: Icon }) {
  const buttonClasses = classNames(
    "flex gap-1 items-center h-12 pl-1 pr-1 sm:pl-5 sm:pr-5",
    "bg-blue-300 border rounded-xl sm:text-lg hover:bg-blue-400",
    className
  );

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {Icon && <Icon className="shrink-0 text-2xl" />}
      {value}
    </button>
  );
}

export default Button;
