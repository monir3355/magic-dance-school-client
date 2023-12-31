import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/Dashboard/adminHome/AdminHome";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/allUsers/AllUsers";
import AdminPrivateRoute from "./AdminPrivateRoute";
import InstructorPrivateRoute from "./InstructorPrivateRoute";
import InstructorHome from "../pages/Dashboard/instructorHome/InstructorHome";
import AddClass from "../pages/Dashboard/AddClass";
import MyClasses from "../pages/Dashboard/myClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/manageClasses/ManageClasses";
import ClassesUpdate from "../pages/Dashboard/myClasses/ClassesUpdate";
import UserHome from "../pages/Dashboard/student/UserHome.jsx/UserHome";
import MySelectedClass from "../pages/Dashboard/student/mySelectedClass/MySelectedClass";
import PaymentPage from "../pages/Dashboard/student/payment/PaymentPage";
import PaymentHistory from "../pages/Dashboard/paymentHistory/PaymentHistory";
import EnrolledStudent from "../pages/Dashboard/student/enrolledStudent/EnrolledStudent";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
    // element: (
    //   <PrivateRoute>
    //     <Dashboard />
    //   </PrivateRoute>
    // ),
    element: <Dashboard />,
    children: [
      // Admin
      {
        path: "adminHome",
        element: (
          <AdminPrivateRoute>
            <AdminHome />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminPrivateRoute>
            <ManageClasses />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminPrivateRoute>
            <AllUsers />
          </AdminPrivateRoute>
        ),
      },
      // Instructors
      {
        path: "instructorHome",
        element: (
          <InstructorPrivateRoute>
            <InstructorHome />
          </InstructorPrivateRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorPrivateRoute>
            <AddClass />
          </InstructorPrivateRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorPrivateRoute>
            <MyClasses />
          </InstructorPrivateRoute>
        ),
      },
      {
        path: "classesUpdate/:id",
        element: (
          <InstructorPrivateRoute>
            <ClassesUpdate />
          </InstructorPrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://magic-dance-arts-server.vercel.app/classes/${params.id}`
          ),
      },
      // student
      {
        path: "studentHome",
        element: <UserHome />,
      },
      { path: "selectedClass", element: <MySelectedClass /> },
      {
        path: "payment/:id",
        element: <PaymentPage />,
        loader: ({ params }) =>
          fetch(
            `https://magic-dance-arts-server.vercel.app/mySelectedClasses/${params.id}`
          ),
      },
      { path: "enrolledClass", element: <EnrolledStudent /> },
      { path: "paymentHistory", element: <PaymentHistory /> },
    ],
  },
]);
export default router;
