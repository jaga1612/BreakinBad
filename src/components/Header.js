import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="nav nav-fill navbar-dark bg-primary stickey-top">
      <li className="nav-item">
        <Link to="/" className="nav-link text-white fw-semibold">
          CHERECTOR LIST
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Details/1" className="nav-link text-white fw-semibold">
          CHERECTOR DETAILS
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Random" className="nav-link text-white fw-semibold">
          RANDOM CHERECTOR DETAILS
        </Link>
      </li>
    </ul>
    </div>
    
  );
};

export default Header;
