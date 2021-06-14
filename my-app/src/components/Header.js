import React from 'react';
import logoHeader from './../img/logo.png';
import facebook from './../img/facebook.png';
import line from './../img/line.png';
import twitter from './../img/twitter.png';

class Header extends React.Component {
  render() {
    return (
      <header className="header-page">
        <div className="container">
          <div className="header-logo">
            <a href="#">
              <img className="logo-header" src={logoHeader} alt="logo" />
            </a>
          </div>
          <div className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">About</a>
              </li>
              <li className="nav-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="header-share">
            <ul className="share-list">
              <li className="share-item">
                <a href="#">
                  <img src={facebook} alt="share-facebook" />
                </a>
              </li>
              <li className="share-item">
                <a href="#">
                  <img src={line} alt="share-line" />
                </a>
              </li>
              <li className="share-item">
                <a href="#">
                  <img src={twitter} alt="share-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
