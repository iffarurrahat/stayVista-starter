import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const HostRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace="true" />;
};

HostRoute.propTypes = {
  children: PropTypes.element,
};
export default HostRoute;
