import classNames from "classnames";

function Button({ className, onClick, value, type, icon: Icon }) {
  const buttonClasses = classNames(
    "flex gap-1 items-center bg-blue-300 border rounded-xl h-12 text-lg hover:bg-blue-400 pl-5 pr-5",
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
