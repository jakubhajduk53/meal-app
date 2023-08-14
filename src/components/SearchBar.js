import Button from "./Button";
import { useDispatch } from "react-redux";
import { fetchRandomMeal, fetchMeals } from "../store";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SearchBar() {
  const dispatch = useDispatch();

  const initialValues = {
    mealName: "",
  };

  const validationSchema = Yup.object({
    mealName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Input cannot be empty"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const { mealName } = values;
    dispatch(fetchMeals({ mealName }));
    setSubmitting(false);
  };

  const getRandomMeal = async () => {
    dispatch(fetchRandomMeal());
  };

  return (
    <div className="flex justify-self-center gap-2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched }) => (
          <Form>
            <div className="flex gap-2 pb-5">
              <div>
                <Field
                  name="mealName"
                  className="border-2 rounded-xl md:w-96 h-12"
                  type="text"
                  placeholder="Search..."
                />
                {touched.mealName && (
                  <ErrorMessage
                    name="mealName"
                    component="div"
                    className="text-red-500"
                  />
                )}
              </div>
              <Button type="submit" value="Search" />
            </div>
          </Form>
        )}
      </Formik>
      <Button
        value="Random dish"
        className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-400 hover:to-purple-500"
        onClick={getRandomMeal}
      />
    </div>
  );
}

export default SearchBar;
