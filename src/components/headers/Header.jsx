import React from "react";
import logo from "./../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Header = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you want Logout?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire("Logout!", "You are logout", "success");
          })
          .then((error) => {
            console.log(error);
          });
      }
    });
  };
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          Home
        </NavLink>
      </li>
      {isAdmin ? (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      ) : isInstructor ? (
        <li>
          <Link to="/dashboard/instructorHome">Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          Classes
        </NavLink>
      </li>
    </>
  );
  return (
    <header className=" text-white bg-black bg-opacity-75 fixed z-10 w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link>
            <img className="h-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <button onClick={handleLogout} className="button-primary ml-4">
                Logout
              </button>
            </>
          ) : (
            <Link to="login">
              <button className="button-outline">Login</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
