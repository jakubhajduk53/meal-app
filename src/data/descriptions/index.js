import { AiOutlineFlag } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

export const headerInfo = [
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
