import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Registration = () => {
  const [passShow, setPassShow] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    toast.promise(
      createUser(data.email, data.password)
        .then((result) => {

          console.log("User Created:", result);
          updateUserProfile(data.name);
          const userData = {
            name: data.name,
            email: data.email,
            role: "user",
            uid: result.user.uid,
            photoURL: "",
            createdAt: new Date().toISOString(),
          };
          axiosPublic.post("/createUser", userData).then((res) => {
            if(res.data.insertedId){
              navigate(form, { replace: true });
            }
          });
        })
        .catch((err) => {
          console.log("Error Creating User:", err);
          setError(err.message);
          throw err;
        }),
      {
        pending: "Creating User...",
        success: "User Created Successfully",
        error: `${error}`,
      }
    );
  };

  return (
    <div  className="flex  justify-center items-center min-h-screen py-5">

<Helmet>
        <title>NiNCars | Sign Up</title>
        <meta
          name="description"
          content="Sign Up to NiNCars to access exclusive deals and manage your account securely."
        />
        <meta
          name="keywords"
          content="NiNCars, login, ecommerce, secure access, online store"
        />
        <meta name="author" content="NiNCars" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="NiNCars | Sign Up" />
        <meta
          property="og:description"
          content="Sign Up to NiNCars to access exclusive deals and manage your account securely."
        />
        <meta
          property="og:image"
          content="https://www.najatulislam.me/og-image.jpg"
        />
        <meta property="og:url" content="https://www.najatulislam.me/" />
        <meta property="og:type" content="website" />

        {/* Favicon (if available) */}
        <link
          rel="icon"
          href="https://www.najatulislam.me/favicon.ico"
          type="image/x-icon"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.najatulislam.me/login" />
      </Helmet>
    <div className="border border-gray-500 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
     
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <h3 className="text-3xl font-extrabold text-white text-center">
            Sign Up
          </h3>
        </div>

        {/* Name Field */}
        <div>
          <label className="text-white text-sm mb-2 block">Full Name</label>
          <div className="relative flex items-center">
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              className={`w-full text-sm text-white border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } px-4 py-3 rounded-md outline-blue-600`}
              placeholder="Enter full name"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="text-white text-sm mb-2 block">Email</label>
          <div className="relative flex items-center">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              className={`w-full text-sm text-white border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } px-4 py-3 rounded-md outline-blue-600`}
              placeholder="Enter email address"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mt-4">
          <label className="text-white text-sm mb-2 block">Password</label>
          <div className="relative flex items-center">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              type={passShow ? "text" : "password"}
              className={`w-full text-sm text-white border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } px-4 py-3 rounded-md outline-blue-600`}
              placeholder="Enter password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              viewBox="0 0 128 128"
              onClick={() => setPassShow(!passShow)}
            >
              <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
            </svg>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="mt-4">
          <label className="text-white text-sm mb-2 block">
            Confirm Password
          </label>
          <div className="relative flex items-center">
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type={passShow ? "text" : "password"}
              className={`w-full text-sm text-white border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } px-4 py-3 rounded-md outline-blue-600`}
              placeholder="Re-enter password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              viewBox="0 0 128 128"
              onClick={() => setPassShow(!passShow)}
            >
              <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
            </svg>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Registration;