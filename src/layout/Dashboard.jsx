import React, { useState } from "react";
import { FaHome, FaPersonBooth, FaUsers, FaWallet } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
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
                  to="/dashboard/allUsers"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <FaUsers className="h-6 w-6" />
                  <span className="uppercase">All Users </span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/userHome"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-black"
                  }
                >
                  <FaHome className="h-6 w-6" />
                  <span className="uppercase">User Home</span>
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
