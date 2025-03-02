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
import Earnings from "../pages/Dashboard/Agent/Earnings";
import AdminRoute from "./AdminRoute";
import NewOrders from "../pages/Dashboard/Admin/NewOrders";
import ProcesscingOrder from "../pages/Dashboard/Admin/ProcesscingOrder";
import CompletedOrders from "../pages/Dashboard/Admin/CompletedOrders";
import CategoryControl from "../pages/Dashboard/Admin/CategoryControl";
import ProductControl from "../pages/Dashboard/Admin/ProductControl";
import ContactUs from "../pages/Contact/ContactUs";
import CustomerInquiries from "../pages/Dashboard/Agent/CustomerInquiries";
import Inventory from "../pages/Inventory/Inventory";
import Services from "../pages/Services/Services";
import Newsroom from "../pages/Newsroom/Newsroom";
import Shop from "../pages/Shop/Shop";

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
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "term-condition",
        element: <TermCondition />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"newsroom",
        element:<Newsroom/>
      },
      {
        path:"shop",
        element:<Shop/>
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
        element: (
          <AdminRoute>
            <ProductControl />
          </AdminRoute>
        ),
      },
      {
        path: "agents-control",
        element: (
          <AdminRoute>
            <ProductControl />
          </AdminRoute>
        ),
      },
      {
        path: "customer-support",
        element: (
          <AdminRoute>
            <ProductControl />
          </AdminRoute>
        ),
      },
      {
        path: "reports",
        element: (
          <AdminRoute>
            <ProductControl />
          </AdminRoute>
        ),
      },
      {
        path: "transactions",
        element: (
          <AdminRoute>
            <ProductControl />
          </AdminRoute>
        ),
      },
      {
        path: "payouts",
        element: (
          <AdminRoute>
            <ProductControl />
          </AdminRoute>
        ),
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
