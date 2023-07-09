import { React, useState as UseState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaOpencart, FaGripfire, FaBars } from "react-icons/fa";
export default function navbar() {
  const [openMenu, setOpenMenu] = UseState(true);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="nav">
      <Link to="/" className="logo">
        <span>
          decor
          <FaGripfire className="logo-icon" />
        </span>
      </Link>
      <FaBars className="menu" onClick={toggleMenu} />
      {openMenu ? (
        <ul className="nav-ul display">
          <li className="search-li">
            <FaSearch className="search" />
          </li>
          <li className="menu-li"></li>
          <li>
            <Link to="/" className="link">
              home
            </Link>
          </li>
          <li>
            <Link to="/products" className="link">
              products
            </Link>
          </li>
          <li>
            <Link to="about" className="link">
              about us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link">
              cart <FaOpencart />
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul">
          <li className="menu-li"></li>
          <li>
            <Link to="/" className="link">
              home
            </Link>
          </li>
          <li>
            <Link to="/products" className="link">
              products
            </Link>
          </li>
          <li>
            <Link to="about" className="link">
              about us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link">
              cart <FaOpencart />
            </Link>
          </li>
          <li className="search-li">
            <FaSearch className="search" />
          </li>
        </ul>
      )}
    </div>
  );
}
