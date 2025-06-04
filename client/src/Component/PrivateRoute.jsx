import { Navigate } from "react-router-dom";

// Custom Private Route component
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token');  // Get JWT token from localStorage

  return token ? element : <Navigate to="/login" />;  // If token exists, render element, else redirect to login
};

export default PrivateRoute;