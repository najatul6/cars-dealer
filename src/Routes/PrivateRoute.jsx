import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";
import Loader from "../Components/shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) return <Loader />;
  
    if (user) {
      return children;
    } else {
      return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }
  };
  
  PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default PrivateRoute;
  