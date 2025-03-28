import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserContext.jsx";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom"; 
import "./index.css";
import App from "./App.jsx";
import DadosGranja from "./pages/DadosGranja.jsx";
import ProtectedRouteDados from "./protectedRoute/ProtectedRouteDados.jsx";
import ProtectedRouteLogin from "./protectedRoute/ProtectedRouteLogin.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/granja_star" />, 
  },
  {
    path: "/granja_star",
    element: (
      <ProtectedRouteLogin>
        <App />
      </ProtectedRouteLogin>
    ),
  },
  {
    path: "/granja_star/dados",
    element: (
      <ProtectedRouteDados>
        <DadosGranja />
      </ProtectedRouteDados>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
