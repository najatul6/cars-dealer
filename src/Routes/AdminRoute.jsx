import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import PropTypes from "prop-types";
import Loader from "../Components/shared/Loader/Loader";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [userRole, isLoading] = useRole();
    const location = useLocation();
  
    if (loading || isLoading) return <Loader />;
    if (user && userRole !== "admin") {
      return <Navigate to="/un-auth" replace />;
    }
    if (user && userRole === "admin") {
      return children;
    } else {
      return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
  };
  
  AdminRoute.propTypes = {
    children: PropTypes.node,
  };
  
  export default AdminRoute;
  