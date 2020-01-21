import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar__links-container">
      <NavLink exact className="navbar__link" to="/">
        Index
      </NavLink>
      <NavLink className="navbar__link" to="/articles">
        Articles
      </NavLink>
      <NavLink className="navbar__link" to="/lectures">
        Lectures
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
