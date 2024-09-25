import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Heading from "../components/common/atoms/Heading";
import { useSignUpMutation } from "../redux/features/auth/authApi";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUp, { error }] = useSignUpMutation();
  console.log(error);
  // Setup react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const watchPassword = watch("password");

  const onSubmit = async (data) => {
    try {
      // Simulate a sign-up process

      data.role = "user";
      await signUp(data).unwrap();

      toast.success("Registration successful! Redirecting to login...");
      navigate("/signIn");
    } catch (err) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="my-10 lg:my-8 h-screen w-full flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg flex flex-col p-6 space-y-4">
        <Heading>Sign Up</Heading>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              className="p-2 rounded-lg w-full bg-gray-50 border border-blue-500 outline-none"
              placeholder="Name"
              type="text"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="p-2 rounded-lg w-full bg-gray-50 border border-blue-500 outline-none"
              placeholder="Email Address"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <input
              {...register("password", { required: "Password is required" })}
              className="p-2 rounded-lg w-full bg-gray-50 border border-blue-500 outline-none"
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <input
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watchPassword || "Passwords do not match",
              })}
              className="p-2 rounded-lg w-full bg-gray-50 border border-blue-500 outline-none"
              placeholder="Confirm Password"
              type="password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center gap-2 mb-4">
            <input
              {...register("terms", {
                required: "You must agree to the Terms & Conditions",
              })}
              type="checkbox"
              className="mr-2"
            />
            <label className="text-blue-600 text-sm">
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
            <p className="text-center text-gray-600 text-sm">
              Already have an account?{" "}
              <a href="/signIn" className="text-blue-600">
                Sign In Instead
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
