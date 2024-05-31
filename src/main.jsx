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
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import WHome from './Components/Pages/Dashboard/Workers/WHome/WHome';
import TaskList from './Components/Pages/Dashboard/Workers/TaskList/TaskList';
import MySubmission from './Components/Pages/Dashboard/Workers/MySubmission/MySubmission';


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

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      //workers
      {
        path: '/dashboard/worker/home',
        element: <WHome />
      },
      {
        path: '/dashboard/worker/taskList',
        element: <TaskList />
      },
      {
        path: '/dashboard/worker/mysubmission',
        element: <MySubmission />
      },

      //task creator
      {

      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
