import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ title }) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <Link to="/">
            <i className="fa fa-github"> </i> {title}
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Default Title",
  class: "Default Class",
};
export default Navbar;
