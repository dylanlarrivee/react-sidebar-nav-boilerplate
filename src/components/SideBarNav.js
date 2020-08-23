import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Main from './Main';

const toggleSideNav = () => {
  var element = document.getElementById("main-content-wrapper");
  if (element.className == "main-content-wrapper-open") {
    element.classList.remove("main-content-wrapper-open");
    element.classList.add("main-content-wrapper-close");
  } else {
    element.classList.remove("main-content-wrapper-close");
    element.classList.add("main-content-wrapper-open");
  }
}

const SideBarNav = () => {
  return (
  <div>
    <div class="topnav">
      <input type="checkbox" className="menu-open" id="menu-open" onClick={toggleSideNav}/>
      <label for="menu-open" className="icon-toggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div className="top-nav-title">
        CED Extras
      </div>
      <a className="logout-nav" href="#home">
        <div>
        Logout
      </div>
      </a>
      <div id="menu">
        <ul className="sidebarMenuInner">
          <li>
            <a to="/home" activeClassName="active-nav">
              Home
            </a>
          </li>
          <li>
            <a to="/current-orders" activeClassName="active-nav">
              Campaign DCM
            </a>
          </li>
          <li>
            <a to="/completed-orders" activeClassName="active-nav">
              SQL Editor
            </a>
          </li>
          <li>
            <a to="/admin" activeClassName="active-nav">
              Link Catagories
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Main />
</div>
  );
};

export default SideBarNav;
