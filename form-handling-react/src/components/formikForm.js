import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("User registered (Formik):", values);

        // Simulate API call
        setTimeout(() => {
          alert("User registered successfully with Formik!");
          resetForm();
        }, 1000);
      }}
    >
      {() => (
        <Form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-bold">Register (Formik)</h2>

          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
