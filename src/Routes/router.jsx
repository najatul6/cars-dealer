import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePage/Home";
import LogIn from "../pages/Auth/LogIn";
import Registration from "../pages/Auth/Registration";
import AboutPage from "../pages/AboutPage/AboutPage";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MainOverview from "../pages/Dashboard/MainOverview";
import Orders from "../pages/Dashboard/User/Orders";

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
    path:"/dashboard",
    element:<PrivateRoute>
      <Dashboard/>
    </PrivateRoute>,
    children:[
      {

        path:"overview",
        element:<MainOverview/>
      },
      {
        path:"my-orders",
        element:<Orders/>
      },
      {
        path:"support-tickets",
        element:<div>Support Tickets</div>
      },
      {
        path:"wishlist",
        element:<div>Wishlist</div>
      },
      {
        path:"profile-settings",
        element:<div>Profile Settings</div>
      },

      // Agent Pages
      {
        path:"assigned-orders",
        element:<div>Assigned Orders</div>
      },
      {
        path:"agent-process-orders",
        element:<div>Processing Orders</div>
      },
      {
        path:"agent-complete-orders",
        element:<div>Completed Orders</div>
      },
      {
        path:"customer-inquiries",
        element:<div>Customer Inquiries</div>
      },
      {
        path:"earnings",
        element:<div>Earnings & Payouts</div>
      },

      // Admin Pages
      {
        path:"new-orders",
        element:<div>New Orders</div>
      },
      {
        path:"orders",
        element:<div>All Orders</div>
      }


    ]
  },
  {
    path:"/signin",
    element:<LogIn/>
  },
  {
    path:"/signup",
    element:<Registration/>
  }
]);

export default router;
