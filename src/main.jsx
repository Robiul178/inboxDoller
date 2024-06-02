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
import THome from './Components/Pages/Dashboard/TaskCreator/THome/THome';
import AddNewTask from './Components/Pages/Dashboard/TaskCreator/AddNewTask/AddNewTask';
import MyTasks from './Components/Pages/Dashboard/TaskCreator/MyTasks/MyTasks';
import PurchaseCoin from './Components/Pages/Dashboard/TaskCreator/PurchaseCoin/PurchaseCoin';
import PaymentHistory from './Components/Pages/Dashboard/TaskCreator/PaymentHistory/PaymentHistory';
import AHome from './Components/Pages/Dashboard/Admin/AHome/AHome';
import ManageTask from './Components/Pages/Dashboard/Admin/ManageTask/ManageTask';
import ManageUsers from './Components/Pages/Dashboard/Admin/ManageUsers/ManageUsers';
import TaskDetails from './Components/Pages/Dashboard/Workers/TaskList/TaskDetails/TaskDetails';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



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
      },

    ]
  },

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [

      {
        path: '/dashboard/task-details/:id',
        element: <TaskDetails />
      },
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
        path: '/dashboard/taskCreator/home',
        element: <THome />
      },
      {
        path: '/dashboard/taskCreator/addtask',
        element: <AddNewTask />
      },
      {
        path: '/dashboard/taskCreator/mytask',
        element: <MyTasks />
      },
      {
        path: '/dashboard/taskCreator/puchaseCoin',
        element: <PurchaseCoin />
      },
      {
        path: '/dashboard/taskCreator/pymentHistory',
        element: <PaymentHistory />
      },

      //admin

      {
        path: '/dashboard/admin/home',
        element: <AHome />
      },
      {
        path: '/dashboard/admin/manageTask',
        element: <ManageTask />
      },
      {
        path: '/dashboard/admin/manageUser',
        element: <ManageUsers />
      },

    ]
  }
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
