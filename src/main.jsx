import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from "./context/UserContext.jsx";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import DadosGranja from './pages/DadosGranja.jsx'
import ProtectedRoute from "./protectedRoute/ProtectedRoute.jsx"


const router = createBrowserRouter([
  {
    path: "/granja_star",
    element: <App />,
  },
  {
    path: "/granja_star/dados",
    element: (
      <ProtectedRoute>
        <DadosGranja />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>,
)
