import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePage/Home";
import LogIn from "../pages/Auth/LogIn";
import Registration from "../pages/Auth/Registration";
import AboutPage from "../pages/AboutPage/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
      {
        path:"/term-condition",
        element:<div>TERM & CONDITION</div>
      },
      {
        path:"/contactUs",
        element:<div>Contact Us</div>
      }
     
    ],
  },
  {
    path:"signin",
    element:<LogIn/>
  },
  {
    path:"signup",
    element:<Registration/>
  }
]);

export default router;
