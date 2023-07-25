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
          className={({ isActive }) =>
            isActive ? "buttonBorder2" : "buttonBorder"
          }
        >
          <span>Home</span>
          <i></i>
        </NavLink>
      </li>
      {isAdmin ? (
        <li>
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive }) =>
              isActive ? "buttonBorder2" : "buttonBorder"
            }
          >
            <span>Dashboard</span>
            <i></i>
          </NavLink>
        </li>
      ) : isInstructor ? (
        <li>
          <NavLink
            to="/dashboard/instructorHome"
            className={({ isActive }) =>
              isActive ? "buttonBorder2" : "buttonBorder"
            }
          >
            <span>Dashboard</span>
            <i></i>
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            to="/dashboard/studentHome"
            className={({ isActive }) =>
              isActive ? "buttonBorder2" : "buttonBorder"
            }
          >
            <span>Dashboard</span>
            <i></i>
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive ? "buttonBorder2" : "buttonBorder"
          }
        >
          <span>Instructors</span>
          <i></i>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive ? "buttonBorder2" : "buttonBorder"
          }
        >
          <span>Classes</span>
          <i></i>
        </NavLink>
      </li>
    </>
  );
  return (
    <header className=" text-white bg-black shadow-xl sticky top-0 z-10 w-full">
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
              className="flex flex-col gap-8 menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link>
            <img className="h-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-2">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <button onClick={handleLogout} className="buttonBorder">
                <span>Logout</span>
                <i></i>
              </button>
            </>
          ) : (
            <Link to="login">
              <button className="buttonBorder mr-6">
                <span>login</span> <i></i>
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
