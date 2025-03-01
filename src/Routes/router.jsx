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
import TermCondition from "../pages/Term-Condition/TermCondition";
import AgentRoute from "./AgentRoute";
import AssignedOrders from "../pages/Dashboard/Agent/AssignedOrders";
import UnAuth from "../pages/Auth/UnAuth";
import SupportTickets from "../pages/Dashboard/User/SupportTickets";
import WishList from "../pages/Dashboard/User/WishList";
import ProfileSetting from "../pages/Dashboard/ProfileSetting";
import ProceessOrders from "../pages/Dashboard/Agent/ProceessOrders";
import CompleteOrders from "../pages/Dashboard/Agent/CompleteOrders";
import CustomerInquiries from "../pages/Dashboard/Agent/customerInquiries";
import Earnings from "../pages/Dashboard/Agent/Earnings";
import AdminRoute from "./AdminRoute";
import NewOrders from "../pages/Dashboard/Admin/NewOrders";
import ProcesscingOrder from "../pages/Dashboard/Admin/ProcesscingOrder";
import CompletedOrders from "../pages/Dashboard/Admin/CompletedOrders";
import CategoryControl from "../pages/Dashboard/Admin/CategoryControl";
import ProductControl from "../pages/Dashboard/Admin/ProductControl";

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/term-condition",
        element: <TermCondition />,
      },
      {
        path: "/contactUs",
        element: <div>Contact Us</div>,
      },
      {
        path: "un-auth",
        element: <UnAuth />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "overview",
        element: <MainOverview />,
      },
      {
        path: "my-orders",
        element: <Orders />,
      },
      {
        path: "support-tickets",
        element: <SupportTickets />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "profile-settings",
        element: <ProfileSetting />,
      },

      // Agent Pages
      {
        path: "assigned-orders",
        element: (
          <AgentRoute>
            <AssignedOrders />
          </AgentRoute>
        ),
      },
      {
        path: "agent-process-orders",
        element: (
          <AgentRoute>
            <ProceessOrders />
          </AgentRoute>
        ),
      },
      {
        path: "agent-complete-orders",
        element: (
          <AgentRoute>
            <CompleteOrders />
          </AgentRoute>
        ),
      },
      {
        path: "customer-inquiries",
        element: (
          <AgentRoute>
            <CustomerInquiries />
          </AgentRoute>
        ),
      },
      {
        path: "earnings",
        element: (
          <AgentRoute>
            <Earnings />
          </AgentRoute>
        ),
      },

      // Admin Pages
      {
        path: "new-orders",
        element: (
          <AdminRoute>
            <NewOrders />
          </AdminRoute>
        ),
      },
      {
        path: "process-orders",
        element: (
          <AdminRoute>
            <ProcesscingOrder />
          </AdminRoute>
        ),
      },
      {
        path: "complete-orders",
        element: (
          <AdminRoute>
            <CompletedOrders />
          </AdminRoute>
        ),
      },
      {
        path: "refund-requests",
        element: <div>Refund Requests</div>,
      },
      {
        path: "categories-control",
        element: (
          <AdminRoute>
            <CategoryControl />
          </AdminRoute>
        ),
      },
      {
        path: "products-control",
        element: (
          <AdminRoute>
            <ProductControl />
          </AdminRoute>
        ),
      },
      {
        path: "users-control",
        element: <div>Users Control</div>,
      },
      {
        path: "agents-control",
        element: <div>Agents Control</div>,
      },
      {
        path: "customer-support",
        element: <div>Customer Support</div>,
      },
      {
        path: "reports",
        element: <div>Reports</div>,
      },
      {
        path: "transactions",
        element: <div>Transactions</div>,
      },
      {
        path: "payouts",
        element: <div>Payouts</div>,
      },
    ],
  },
  {
    path: "/signin",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <Registration />,
  },
]);

export default router;
