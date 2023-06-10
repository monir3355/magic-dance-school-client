import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/Dashboard/adminHome/AdminHome";
import UserHome from "../pages/Dashboard/userHome/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/instructors", element: <Instructors /> },
      { path: "/classes", element: <Classes /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { path: "adminHome", element: <AdminHome></AdminHome> },
      { path: "userHome", element: <UserHome /> },
    ],
  },
]);
export default router;
