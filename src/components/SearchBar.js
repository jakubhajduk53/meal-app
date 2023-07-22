import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SearchBar = ({ fetchData, setErrorMessage }) => {
  const initialValues = {
    mealName: "",
  };

  const validationSchema = Yup.object({
    mealName: Yup.string().min(3, "Must be at least 3 characters").required(""),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    fetchData(values.mealName);
    setErrorMessage("");
    setSubmitting(false);
  };

  return (
    <div className="justify-self-center">
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
              <button
                type="submit"
                className="bg-blue-300 border rounded-xl h-12 pl-5 pr-5 text-lg"
              >
                Search
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
