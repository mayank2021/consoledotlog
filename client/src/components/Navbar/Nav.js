import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <p className="navbar-brand">CONSOLE.LOG</p>
          </div>
          <p className="show-nav" onClick={() => setShowNav(!showNav)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </p>
          <ul
            style={{ display: `${showNav ? "inherit" : ""}` }}
            className="nav-item"
          >
            <Link to="/">
              <li onClick={() => setShowNav(false)}>HOME</li>
            </Link>
            <Link to="/about">
              <li onClick={() => setShowNav(false)}>ABOUT US</li>
            </Link>
            <Link to="/contact">
              <li onClick={() => setShowNav(false)}>CONTACT US</li>
            </Link>
            <Link to="/compose">
              <li onClick={() => setShowNav(false)}>COMPOSE</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
