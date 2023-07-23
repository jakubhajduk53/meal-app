import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";

const SearchBar = ({ fetchData, setErrorMessage, fetchRandomMeal }) => {
  const initialValues = {
    mealName: "",
  };

  const validationSchema = Yup.object({
    mealName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Input cannot be empty"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    fetchData(values.mealName);
    setErrorMessage("");
    setSubmitting(false);
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
                  className="border-2 rounded-xl w-96 h-12"
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
        onClick={fetchRandomMeal}
      />
    </div>
  );
};

export default SearchBar;
