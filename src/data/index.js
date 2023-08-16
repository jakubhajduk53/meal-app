import { AiOutlineFlag } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

export const headerData = [
  {
    name: "Main Page",
    value: "main",
    icon: AiOutlineHome,
    to: "/",
  },
  {
    name: "Category",
    value: "category",
    icon: BiCategoryAlt,
    to: "category/list",
  },
  {
    name: "Area",
    value: "area",
    icon: AiOutlineFlag,
    to: "area/list",
  },
];

export const routes = {
  main: ["/"],
  category: ["/category", "/category/list", "/category/items"],
  area: ["/area", "/area/list", "/area/items"],
};
