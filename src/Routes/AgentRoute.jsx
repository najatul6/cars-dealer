import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/shared/Loader/Loader";
import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const AgentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [userRole, isLoading] = useRole();
  const location = useLocation();

  if (loading || isLoading) return <Loader />;
  if (user && userRole !== "agent") {
    return <Navigate to="/un-auth" replace />;
  }
  if (user && userRole === "agent") {
    return children;
  } else {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
};
AgentRoute.propTypes = {
  children: PropTypes.node,
};

export default AgentRoute;
