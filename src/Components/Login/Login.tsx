
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import axios, { AxiosError } from "axios";
// import { loginStyles } from "./loginstyle";

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema: Yup.object({
//       email: Yup.string().email("Invalid email").required("Email is required"),
//       password: Yup.string()
//         .min(6, "At least 6 characters")
//         .required("Password is required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const response = await axios.post("http://localhost:5000/api/login", values);

//         const { user, token } = response.data;

//         if (user && token) {
//           localStorage.setItem("user", JSON.stringify(user)); // Store user details
//           localStorage.setItem("token", token); // Store token
//           console.log("User and token stored in localStorage:", user, token);
//           navigate("/"); // Redirect to home page after login
//         }
//       } catch (err) {
//         const error = err as AxiosError<{ message?: string }>;
//         alert(error.response?.data?.message || "Login failed");
//       }
//     },
//   });

//   // Function to check and log stored user and token
//   const checkStorage = () => {
//     const user = localStorage.getItem("user");
//     const token = localStorage.getItem("token");

//     if (user && token) {
//       console.log("User found:", JSON.parse(user));
//       console.log("Token found:", token);
//     } else {
//       console.log("No user or token found");
//     }
//   };

//   return (
//     <div className={loginStyles.container}>
//       <div className={loginStyles.formContainer}>
//         <h2 className={loginStyles.title}>Login</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <input
//             type="email"
//             className={loginStyles.input}
//             placeholder="Email"
//             {...formik.getFieldProps("email")}
//           />
//           {formik.touched.email && formik.errors.email && (
//             <p className={loginStyles.error}>{formik.errors.email}</p>
//           )}

//           <input
//             type="password"
//             className={loginStyles.input}
//             placeholder="Password"
//             {...formik.getFieldProps("password")}
//           />
//           {formik.touched.password && formik.errors.password && (
//             <p className={loginStyles.error}>{formik.errors.password}</p>
//           )}

//           <button type="submit" className={loginStyles.button}>
//             Login
//           </button>
//         </form>

//         <button onClick={checkStorage} className={loginStyles.button}>
//           Check Storage
//         </button>

//         <p className={loginStyles.toggleText}>
//           Don't have an account?
//           <button
//             onClick={() => navigate("/signup")}
//             className={loginStyles.toggleButton}
//           >
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { loginStyles } from "./loginstyle";

const LoginPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "At least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:5000/api/login", values);

        const { user, token } = response.data;

        if (user && token) {
          localStorage.setItem("user", JSON.stringify(user)); // Store user details
          localStorage.setItem("token", token); // Store token
          console.log("User and token stored in localStorage:", user, token);
          navigate("/"); // Redirect to home page after login
        }
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        alert(error.response?.data?.message || "Login failed");
      }
    },
  });

  // Function to check and log stored user and token
  const checkStorage = () => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      console.log("User found:", JSON.parse(user));
      console.log("Token found:", token);
    } else {
      console.log("No user or token found");
    }
  };

  const handleGoogleLogin =async () => {
   const authResponse =  window.open("http://localhost:5000/api/auth/google", "_self");
   console.log(authResponse,"data")
  };

  

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

          <button type="submit" className={loginStyles.button}>
            Login
          </button>
        </form>

        <button onClick={checkStorage} className={loginStyles.button}>
          Check Storage
        </button>

        <button onClick={handleGoogleLogin} className={loginStyles.button}>
          Login with Google
        </button>

        <p className={loginStyles.toggleText}>
          Don't have an account?
          <button
            onClick={() => navigate("/signup")}
            className={loginStyles.toggleButton}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
