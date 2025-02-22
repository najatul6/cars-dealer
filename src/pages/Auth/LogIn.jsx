import useAuth from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogIn = () => {
  const [passShow, setPassShow] = useState(false);
  const { signInUser, googleSignIn } = useAuth();
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.promise(
      signInUser(data?.email, data?.password)
        .then((user) => {
          navigate(form, { replace: true });
          toast.success(`Welcome back! ${user?.displayName}`);
        })
        .catch((error) => {
          console.error("Error Signing In:", error);
          setError(error.message);
          throw error;
        }),
      {
        pending: "Signing In...",
        success: "User Signed In Successfully",
        error: `${error.message}`,
      }
    );
  };

  const handleGoogleSignIn = () => {
    toast.promise(
      googleSignIn()
        .then((result) => {
          const userData = {
            name: result.user.displayName,
            email: result.user.email,
            role: "user",
            uid: result.user.uid,
            photoURL: result.user.photoURL,
            createdAt: new Date().toISOString(),
          };
          axiosPublic.post("/createUser", userData).then((res) => {
            if (res.data) {
              navigate(form, { replace: true });
            }
          });
        })
        .catch((error) => {
          console.error("Error Signing In:", error);
          setError(error.code);
          throw error;
        }),
      {
        pending: "Signing In...",
        success: "User Signed In Successfully",
        error: `${error}`,
      }
    );
  };
  return (
    <div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
      {/* Helmet for title and meta tags Start here */}
      <Helmet>
        <title>NiNCars | Log in</title>
        <meta
          name="description"
          content="Log in to NiNCars to access exclusive deals and manage your account securely."
        />
        <meta
          name="keywords"
          content="NiNCars, login, ecommerce, secure access, online store"
        />
        <meta name="author" content="NiNCars" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="NiNCars | Log in" />
        <meta
          property="og:description"
          content="Log in to NiNCars to access exclusive deals and manage your account securely."
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
      {/* Helmet for title and meta tags End here */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <h3 className="text-3xl font-extrabold text-gray-800 text-center">
            Sign in
          </h3>
        </div>
        <div className="sm:flex justify-center sm:items-center space-x-4 max-sm:space-y-4 mb-8">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="py-2.5 w-full px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              className="inline mr-4"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fbbd00"
                d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                data-original="#fbbd00"
              />
              <path
                fill="#0f9d58"
                d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                data-original="#0f9d58"
              />
              <path
                fill="#31aa52"
                d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                data-original="#31aa52"
              />
              <path
                fill="#3c79e6"
                d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                data-original="#3c79e6"
              />
              <path
                fill="#cf2d48"
                d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                data-original="#cf2d48"
              />
              <path
                fill="#eb4132"
                d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                data-original="#eb4132"
              />
            </svg>
            Sign in with Google
          </button>
          <button
            type="button"
            className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              fill="#007bff"
              viewBox="0 0 167.657 167.657"
            >
              <path
                d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                data-original="#010002"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              fill="#000"
              viewBox="0 0 22.773 22.773"
            >
              <path
                d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                data-original="#000000"
              ></path>
            </svg>
          </button>
        </div>
        {/* Email Field */}
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Email</label>
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
              className={`w-full text-sm text-gray-800 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } px-4 py-3 rounded-md outline-blue-600`}
              placeholder="Enter email address"
            />
            <Mail className="w-[18px] h-[18px] absolute right-4" />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mt-4">
          <label className="text-gray-800 text-sm mb-2 block">Password</label>
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
              className={`w-full text-sm text-gray-800 border ${
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
        <div className="mt-4 text-right">
          <Link
            to="/forget-password"
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;