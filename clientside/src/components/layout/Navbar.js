import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">
            <i className="fa fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fa fa-info"></i> About
          </Link>
        </li>
        <li>
          <Link to="/register">
            <i className="fa fa-user-plus"></i> Sign up
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fa fa-user"></i> Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fa fa-id-card-alt",
};

export default Navbar;
