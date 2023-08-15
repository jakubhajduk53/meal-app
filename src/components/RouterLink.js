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
    "flex items-center gap-1 px-2 py-4 md:px-8",
    "text-xl hover:text-blue-700 transition-colors duration-150",
    {
      "text-black-500": !active,
      "text-blue-700": active,
    },
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
