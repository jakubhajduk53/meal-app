import RouterLink from "./RouterLink";
import { useState, useEffect } from "react";
import { useHref } from "react-router";
import { headerInfo } from "../data/descriptions";

function Header() {
  const href = useHref();

  const [activeLink, setActiveLink] = useState(href);

  const routes = {
    main: ["/"],
    category: ["/category", "/category/list", "/category/items"],
    area: ["/area", "/area/list", "/area/items"],
  };

  const isActive = (routeName) => {
    return routes[routeName].includes(activeLink);
  };

  useEffect(() => {
    setActiveLink(href);
  }, [href]);

  return (
    <div className="flex justify-evenly bg-slate-50 mb-2">
      {headerInfo.map((header) => {
        return (
          <RouterLink
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
