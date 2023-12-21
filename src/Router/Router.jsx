import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home/Home";
import Login from "../Layout/Login/Login";
import Registration from "../Layout/Registration/Registration";

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
        }
    ],
    },
  ]);

  export default Router;