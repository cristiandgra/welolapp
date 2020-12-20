import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navcontain">
      <nav className="nav-main">
        <ul className="nav-menu show">
          <li>
            <img
              src="https://i.imgur.com/CV4R2CT.png"
              alt=" LOGO"
              className="nav-brand"
            />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Champs">Champs</Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://eu.lolesports.com/es"
            >
              Esports
              <svg
                width="10"
                height="10"
                class="inline-block link-out non-hover"
                viewBox="0 0 8 8"
              >
                <path
                  d="M7 2.023v3.985h1V0H2v.996h4L0 7.004V8h1l6-5.977z"
                  fill="#ffffff"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
