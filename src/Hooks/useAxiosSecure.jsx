import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logOut } = useAuth();

  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise?.reject(error);
    }
  );

  // Add a response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async (error) => {
      const status = error?.response?.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/signin", { state: { from: location } });
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;