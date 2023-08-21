import * as Yup from "yup";

export const searchBarValidationSchema = Yup.object({
  mealName: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Input cannot be empty"),
});
