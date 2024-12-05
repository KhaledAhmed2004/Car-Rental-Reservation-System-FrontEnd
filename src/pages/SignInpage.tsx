// import React, { useState } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useLoginMutation } from "../redux/features/auth/authApi";
// import { useAppDispatch } from "../redux/hooks";
// import { setUser } from "../redux/features/auth/authSlice";
// import { verifyToken } from "../utils/VerifyToken";
// import toast from "react-hot-toast";

// const SignInPage: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";
//   const [login, { error }] = useLoginMutation();

//   const [loading, setLoading] = useState(false);

//   // Setup react-hook-form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // Function to handle form submission
//   const onSubmit = async (data) => {
//     setLoading(true); // Set loading to true before API call
//     // Show the loading toast and get the ID
//     const toastId = toast.loading("Processing...");
//     try {
//       const res = await login(data).unwrap(); // Unwrap the response to get the actual data
//       const user = verifyToken(res.data.token);
//       console.log(user?.role);
//       dispatch(setUser({ user: user, token: res.data.token }));
//       toast.success("Login successful! Redirecting...", { id: toastId });
//       navigate(from, { replace: true }); // Redirect to the previous page or default
//     } catch (err) {
//       console.error("Login failed:", err);
//       toast.error("Login failed. Please check your email and password.", {
//         id: toastId,
//       });
//     } finally {
//       setLoading(false); // Set loading to false after API call
//     }
//   };

//   const handleSignUpClick = () => {
//     navigate("/signUp");
//   };

//   const handleForgotPasswordClick = () => {
//     navigate("/forgot-password");
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
//         <h1 className="text-2xl font-semibold text-center mb-4">Sign In</h1>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <input
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
//                   message: "Invalid email address",
//                 },
//               })}
//               className="w-full p-2 border border-gray-300 rounded-lg"
//               placeholder="Email Address"
//               type="email"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email.message}</p>
//             )}
//           </div>
//           <div>
//             <input
//               {...register("password", { required: "Password is required" })}
//               className="w-full p-2 border border-gray-300 rounded-lg"
//               placeholder="Password"
//               type="password"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>
//           {loading && <p className="text-blue-500 text-sm">Loading...</p>}
//           <div className="flex gap-3 flex-col">
//             <a
//               onClick={handleForgotPasswordClick}
//               className="text-blue-600 text-sm cursor-pointer"
//             >
//               Forgot Password?
//             </a>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>

//         <div className="text-center mt-4">
//           <p className="text-gray-600 text-sm">
//             Don’t have an account?{" "}
//             <a
//               onClick={handleSignUpClick}
//               className="text-blue-600 cursor-pointer"
//             >
//               Sign Up Instead
//             </a>
//           </p>
//           <p className="text-gray-600 text-sm mt-2 ">
//             <NavLink
//               to={"terms-and-conditions"}
//               className="text-blue-600 cursor-pointer"
//             >
//               Terms & Conditions
//             </NavLink>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;

import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/VerifyToken";
import toast from "react-hot-toast";

const SignInPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [login] = useLoginMutation();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data: any) => {
    setLoading(true);
    const toastId = toast.loading("Processing...");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.token);
      dispatch(setUser({ user: user, token: res.data.token }));
      toast.success("Login successful! Redirecting...", { id: toastId });
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("Login failed. Please check your email and password.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpClick = () => navigate("/signUp");
  const handleForgotPasswordClick = () => navigate("/forgot-password");

  const handleDemoLogin = (role: "user" | "admin") => {
    const credentials = {
      user: { email: "user@gmail.com", password: "user123" },
      admin: { email: "johndoe@example.com", password: "password123" },
    };
    const { email, password } = credentials[role];
    setValue("email", email);
    setValue("password", password);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign In</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Email Address"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          {loading && <p className="text-blue-500 text-sm">Loading...</p>}
          <a
            onClick={handleForgotPasswordClick}
            className="text-blue-600 text-sm cursor-pointer"
          >
            Forgot Password?
          </a>
          <div className="space-y-3">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg w-full"
            >
              Sign In
            </button>
            <div className="flex gap-3 justify-between">
              <button
                type="button"
                onClick={() => handleDemoLogin("user")}
                className="bg-green-600 text-white font-medium px-4 py-2 rounded-lg w-full"
              >
                Demo User Login
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin("admin")}
                className="bg-yellow-600 text-white font-medium px-4 py-2 rounded-lg w-full"
              >
                Demo Admin Login
              </button>
            </div>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Don’t have an account?{" "}
            <span
              onClick={handleSignUpClick}
              className="text-blue-600 cursor-pointer"
            >
              Sign Up Instead
            </span>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            <NavLink
              to={"terms-and-conditions"}
              className="text-blue-600 cursor-pointer"
            >
              Terms & Conditions
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
