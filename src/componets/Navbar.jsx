import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 rounded-md bg-sky-600 text-white font-medium"
      : "px-4 py-2 rounded-md text-slate-700 hover:bg-slate-100";

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold">MyPastes</div>
        <div className="flex items-center gap-3">
          <NavLink to={"/"} className={linkClass}>
            Home
          </NavLink>
          <NavLink to={"/pastes"} className={linkClass}>
            Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
