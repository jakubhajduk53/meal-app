import { Link } from "react-router-dom";
import classNames from "classnames";

const RouterLink = ({
  to,
  icon: Icon,
  name,
  active,
  className,
  handleClick,
}) => {
  const linkStyles = classNames(
    "px-2 py-4 text-lg",
    {
      "text-black-500": !active,
      "text-blue-700": active,
    },
    "hover:text-blue-700 flex items-center gap-1 transition duration-150 md:px-8",
    className
  );

  return (
    <Link to={to} onClick={handleClick}>
      <div className={linkStyles}>
        {Icon && <Icon className="shrink-0" />}
        {name}
      </div>
    </Link>
  );
};

export default RouterLink;
