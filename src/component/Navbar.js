import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from "@mui/icons-material/Close";
import { useHistory } from "react-router-dom";

export function Navbar() {
  const [ismobile, setismobile] = useState(false);
  const history = useHistory();
  return (
    <nav className="navbar">
      <ul
        className={ismobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setismobile(false)}
      >
        <Link to="/" className="Home">
          <li>Home</li>
        </Link>
        <Link to="/users" className="About">
          <li>Users</li>
        </Link>
        <Link to="/create-users" className="Contact">
          <li>Add User</li>
        </Link>
        <Link to="/login" className="Skills">
          <li>Log in</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setismobile(!ismobile)}
      >
        {ismobile ? <CloseIcon /> : < MenuRoundedIcon htmlColor="black" />}
      </button>
      <img
        onClick={() => history.push("/")}
        src="https://external-preview.redd.it/7j9tb2fya5pDwRPpsOrtZAcUs4L9ZvCQ4Fuv86HUblA.jpg?width=640&crop=smart&auto=webp&s=9c85f365ebcadde26a62af5a349d81a09e51b9c7"
        className="Logo"
        alt="logo"
      />
    </nav>
  );
}
