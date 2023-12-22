import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../Layout/Login/Login";
import Registration from "../Layout/Registration/Registration";
import AboutUs from "../Layout/AboutUs/AboutUs";
import Contact from "../Layout/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddTask from "../Layout/Dashboard/Add Task/AddTask";
import Ongoing from "../Layout/Dashboard/Ongoing/Ongoing";
import ToDoList from "../Layout/Dashboard/ToDoList/ToDoList";
import UpdateTask from "../Layout/Dashboard/UpdateTask/UpdateTask";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    //   errorElement: <ErrorPage />,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
    ],
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      // errorElement: <ErrorPage />,
      children: [
      {
        path: '/dashboard/add-task',
        element: <AddTask></AddTask>
      },
      {
        path: '/dashboard/to-do-list',
        element: <ToDoList></ToDoList>
      },
      {
        path: '/dashboard/ongoing-list',
        element: <Ongoing></Ongoing>
      },
  
      {
        path: '/dashboard/find_task/:id',
        element: <UpdateTask></UpdateTask>,
        loader: ({params})=> fetch(`https://task-manager-server-livid.vercel.app/find_task/${params.id}`)
      }
      ]
    }
  ]);

  export default Router;