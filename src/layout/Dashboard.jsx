import React, { useState } from "react";
import { FaHome, FaPersonBooth, FaUsers, FaWallet } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute top-4 left-4"
        >
          Open Menu
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-blue-500 text-white">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <FaHome className="h-6 w-6" />
                  <span className="uppercase">Admin Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageClasses"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <SiGoogleclassroom className="h-6 w-6" />
                  <span className="uppercase">Manage Classes </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageUsers"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <FaUsers className="h-6 w-6" />
                  <span className="uppercase">Manage Users </span>
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/instructorHome"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <FaHome className="h-6 w-6" />
                  <span className="uppercase">Instructor Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addClass"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <SiGoogleclassroom className="h-6 w-6" />
                  <span className="uppercase">Add a Class</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myClasses"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <FaUsers className="h-6 w-6" />
                  <span className="uppercase">My Classes </span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/studentHome"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <FaHome className="h-6 w-6" />
                  <span className="uppercase">Student Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/selectedClass"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <SiGoogleclassroom className="h-6 w-6" />
                  <span className="uppercase">My Selected Classes</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/enrolledClass"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <SiGoogleclassroom className="h-6 w-6" />
                  <span className="uppercase">My Enrolled Classes</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <FaWallet className="h-6 w-6" />
                  <span className="uppercase">Payment History </span>
                </NavLink>
              </li>
            </>
          )}
          <hr />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaHome className="h-6 w-6" />
              <span className="uppercase">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <SiGoogleclassroom className="h-6 w-6" />
              <span className="uppercase">Classes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <FaPersonBooth className="h-6 w-6" />
              <span className="uppercase">Instructors</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/contact"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-black"
              }
            >
              <TiContacts className="h-6 w-6" />
              <span className="uppercase">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
