import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <Link to="/">Index</Link>
    <Link to="/articles">Articles</Link>
  </nav>
);

export default Navbar;
