import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { loginStyles } from "./loginstyle";

const LoginPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      navigate("/");
    },
  });

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.formContainer}>
        <h2 className={loginStyles.title}>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            className={loginStyles.input}
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={loginStyles.error}>{formik.errors.email}</p>
          )}

          <input
            type="password"
            className={loginStyles.input}
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className={loginStyles.error}>{formik.errors.password}</p>
          )}

          <button type="submit" className={loginStyles.button}>Login</button>
        </form>
        <p className={loginStyles.toggleText}>
          Don't have an account?
          <button onClick={() => navigate("/signup")} className={loginStyles.toggleButton}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
