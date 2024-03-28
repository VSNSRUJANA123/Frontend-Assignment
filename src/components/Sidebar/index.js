import React, { Component } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdCloseCircle, IoMdHome } from "react-icons/io";
import { GoOrganization } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { FaBitcoin } from "react-icons/fa";
import bitcoin from "./Bitcoin.png";
import "./index.css";

class Sidebar extends Component {
  state = {
    isOpen: true,
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const sidebarClass = isOpen ? "sidebar open" : "sidebar";

    return (
      <div className="navbar-container">
        <div className={sidebarClass}>
          <button className="hamburger-menu" onClick={this.toggleMenu}>
            {isOpen ? (
              <CiMenuBurger className="menu-icon" />
            ) : (
              <IoMdCloseCircle className="menu-icon" />
            )}
          </button>

          <ul className="sidebar-items">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {isOpen ? (
                  <IoMdHome className="nav-icon" />
                ) : (
                  <>
                    <IoMdHome className="nav-icon" />
                    Home
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orginization"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {isOpen ? (
                  <GoOrganization className="nav-icon" />
                ) : (
                  <>
                    <GoOrganization className="nav-icon" />
                    Organization
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/assets"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {isOpen ? (
                  <FaBitcoin className="nav-icon" />
                ) : (
                  <>
                    <FaBitcoin className="nav-icon" />
                    Assets
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header-container">
          <div>
            <img src={bitcoin} className="bitcoinIcon" alt="bitcoin" />
          </div>
          <div className="title">
            <h1>
              Hello,<span className="user-name">Brooklyn Simmons</span>
            </h1>
            <p>Welcome to Spot Trading</p>
          </div>
          <button className="trading-btn">Start Trading</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
