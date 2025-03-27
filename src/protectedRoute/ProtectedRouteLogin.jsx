import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";

function ProtectedRouteLogin({ children }) {
  const { user } = useUser();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    const checkUser = async () => {
      if (user !== undefined) {
        setLoading(false);
      }
    };
    checkUser();
  }, [user]); 

  if (loading) {
    return null; 
  }

  return user ? <Navigate to="/granja_star/dados" /> : children;
}

export default ProtectedRouteLogin;
