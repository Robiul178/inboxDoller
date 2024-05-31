import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Components/Routes/Routes';
import Home from './Components/Pages/Home/Home';
import SingIn from './Components/Pages/Authentication/SingIn/SingIn';
import SingUp from './Components/Pages/Authentication/SingUp/SingUp';
import AuthProvider from './Components/AuthProvider/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/singin',
        element: <SingIn />
      },
      {
        path: '/singup',
        element: <SingUp />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
