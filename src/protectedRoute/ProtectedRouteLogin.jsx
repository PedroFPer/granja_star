import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function ProtectedRouteLogin({ children }) {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); 
  }, [setUser]); 

  if (loading) {
    return <div>Carregando...</div>; 
  }

  if (user) {
    return <Navigate to="/granja_star/dados" />;
  }

  return children;
}

export default ProtectedRouteLogin;
