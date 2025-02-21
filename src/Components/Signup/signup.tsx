import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { signupStyles } from "../Signup/signupstyle";

const SignupPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      navigate("/login");
    },
  });

  return (
    <div className={signupStyles.container}>
      <div className={signupStyles.formContainer}>
        <h2 className={signupStyles.title}>Signup</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            className={signupStyles.input}
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={signupStyles.error}>{formik.errors.email}</p>
          )}

          <input
            type="password"
            className={signupStyles.input}
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className={signupStyles.error}>{formik.errors.password}</p>
          )}

          <input
            type="password"
            className={signupStyles.input}
            placeholder="Confirm Password"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className={signupStyles.error}>{formik.errors.confirmPassword}</p>
          )}

          <button type="submit" className={signupStyles.button}>Sign Up</button>
        </form>
        <p className={signupStyles.toggleText}>
          Already have an account?
          <button onClick={() => navigate("/login")} className={signupStyles.toggleButton}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
