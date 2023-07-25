import RouterLink from "./RouterLink";
import { AiOutlineFlag } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { useHref } from "react-router";
import { useState, useEffect } from "react";

function Header() {
  const href = useHref();

  const [activeLink, setActiveLink] = useState(href);

  const routes = {
    main: ["/"],
    category: ["/category"],
    area: ["/area"],
  };

  const isActive = (routeName) => {
    return routes[routeName].includes(activeLink);
  };

  useEffect(() => {
    setActiveLink(href);
  }, [href]);

  return (
    <div className="flex justify-evenly bg-slate-50 mb-2">
      <RouterLink
        name="Main Page"
        icon={AiOutlineHome}
        to="/"
        active={isActive("main")}
      />
      <RouterLink
        name="Category"
        icon={BiCategoryAlt}
        to="/category"
        active={isActive("category")}
      />
      <RouterLink
        name="Area"
        icon={AiOutlineFlag}
        to="/area"
        active={isActive("area")}
      />
    </div>
  );
}

export default Header;
