import RouterLink from "./RouterLink";
import { useState, useEffect } from "react";
import { useHref } from "react-router";
import { headerData, routes } from "../data";

function Header() {
  const href = useHref();

  const [activeLink, setActiveLink] = useState(href);

  const isActive = (routeName) => {
    return routes[routeName].includes(activeLink);
  };

  useEffect(() => {
    setActiveLink(href);
  }, [href]);

  return (
    <div className="flex justify-evenly items-center bg-aureolin mb-2 shadow-md">
      <div className="text-3xl self-center ml-5">Meal App</div>
      {headerData.map((header) => {
        return (
          <RouterLink
            key={header.name}
            name={header.name}
            icon={header.icon}
            to={header.to}
            active={isActive(header.value)}
          />
        );
      })}
    </div>
  );
}

export default Header;
