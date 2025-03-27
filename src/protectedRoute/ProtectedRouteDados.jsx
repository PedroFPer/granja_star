import { useUser } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useUser();

  return user ? children : <Navigate to="/granja_star" />;
}

export default ProtectedRoute;
