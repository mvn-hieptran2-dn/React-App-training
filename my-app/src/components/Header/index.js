import React from 'react';
import logoHeader from './../../assets/img/logo.svg';
import { FaCartArrowDown, FaUserAlt } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className="header-page">
      <div className="container">
        <div className="header-box">
          <div className="header-logo">
            <Link to="/">
              <img className="logo-header" src={logoHeader} alt="logo" />
            </Link>
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/about-us">About Us</NavLink>
              </li>
            </ul>
          </nav>
          <ul className="social-list">
            <li><NavLink to="/account"><FaUserAlt /></NavLink></li>
            <li><NavLink to="/"><FaCartArrowDown /></NavLink></li>
          </ul>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;
