import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../PAGES/Fileupload/Fileupload";
import Appointment from "../PAGES/Appointment/Appointment/Appointment";

import Home from "../PAGES/Home/Home";
import Login from "../PAGES/Login/Login";
import Signup from "../PAGES/Signup/Signup";

import Fileupload from "../PAGES/Fileupload/Fileupload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/file",
        element: <Fileupload></Fileupload>,
      },
    ],
  },
]);

export default router;
