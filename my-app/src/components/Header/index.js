import React from 'react';
import logoHeader from './../../assets/img/logo.svg';
import { FaCartArrowDown, FaUserAlt, FaHeart } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // const count = useSelector(state => state.counter.value)
  const favs = useSelector(state => state.fav.value);
  console.log(favs);

  return (
    <>
    <header className="header-page">
      <div className="container">
        <div className="header-box">
          <div className="header-logo">
            <NavLink to="/">
              <img className="logo-header" src={logoHeader} alt="logo" />
            </NavLink>
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
            <li><NavLink to="/account"> 
              <span className="wrap-fav-couter">
                <FaHeart />
                  {!!favs.length && <span>{favs.length}</span>}
              </span>
            </NavLink></li>
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
