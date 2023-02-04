import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../Context/Authprovider";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuitems = (
    <>
      <li className="hover:bg-rose-600 rounded-lg">
        <Link to={"/"}>HOME</Link>
      </li>
      <li className="hover:bg-rose-600 rounded-lg">
        <Link to={"/file"}>Your File</Link>
      </li>

      <li className="hover:bg-rose-600 rounded-lg">
        <Link to={"/appointment"}>APPOINTMENT</Link>
      </li>

      {/*if user logedin Dashboard and logout options show*/}

      {user?.uid ? (
        <>
          <li className="hover:bg-rose-600 rounded-lg">
            <button onClick={handlelogout}>Log Out</button>
          </li>
        </>
      ) : (
        <li className="hover:bg-rose-600 rounded-lg">
          <Link to={"/login"}>LOG IN</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-primary flex justify-between rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {menuitems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl text-white hover:bg-rose-400">
            Asif's Portal
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal p-0 text-white">{menuitems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
