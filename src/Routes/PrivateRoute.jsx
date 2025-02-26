import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) return <Loading />;
  
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
  