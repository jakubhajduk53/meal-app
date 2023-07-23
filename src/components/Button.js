import classNames from "classnames";

function Button({ className, handleClick, value, type }) {
  const buttonClasses = classNames(
    "bg-blue-300 border rounded-xl h-12 text-lg",
    className
  );

  return (
    <button type={type} className={buttonClasses} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
