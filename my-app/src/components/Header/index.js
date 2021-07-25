import React from 'react';
import logoHeader from './../../assets/img/logo.jpeg';
// import { FaCartArrowDown, FaUserAlt } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className="header-page">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img className="logo-header" src={logoHeader} alt="logo" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us">About Us</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-share">
          {/* <ul className="share-list">
            <li className="share-item">
              <a to="#">
                <img src={uesr} alt="user-page" />
              </a>
            </li>
            <li className="share-item">
              <a to="#">
                <img src={login} alt="page-login" />
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;
