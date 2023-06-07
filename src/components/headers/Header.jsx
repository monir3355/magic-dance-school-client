import React from "react";
import logo from "./../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
    </>
  );
  return (
    <header className="bg-black/75 text-white">
      <div className="navbar">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black/75 rounded-box w-52"
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
          <a className="btn">Button</a>
        </div>
      </div>
    </header>
  );
};

export default Header;