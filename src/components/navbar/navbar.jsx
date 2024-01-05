import React, { useState } from "react";
import logo from "../../images/logo.svg";
import myphoto from "../../images/my photo.jpg";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
    // return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scroled" : "navbar"}>
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="left d-flex align-items-center">
            <img src={logo} alt="" />
            <span className="hover-7">home</span>
            <span className="hover-7">series</span>
            <span className="hover-7">movies</span>
            <span className="hover-7">new and popular</span>
            <span className="hover-7">my list</span>
          </div>
          <div className="right d-flex align-items-center">
            <SearchIcon className="icon" />
            <span>kid</span>
            <NotificationsIcon className="icon" />
            <div className="profile d-flex align-items-center">
              <img src={myphoto} alt="" />
              <div className="profile-toogle dropdown">
                <ArrowDropDownIcon
                  className="icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item" href="#">
                      Setting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
