import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar" style={{backgroundColor: 'white'}}>
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item has-text-link is-uppercase has-text-weight-bold" href="/">
            {siteTitle}
          </a>
          <span className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
            <a href="/make-my-site-faster" className="navbar-item is-uppercase" style={{ color: "#6b7c8d", fontSize: 13}}>Optimize Your Site</a>
            <a href="/build-new-site" className="navbar-item is-uppercase" style={{ color: "#6b7c8d", fontSize: 13}}>Build a New Site</a>
            <a href="#" className="navbar-item is-uppercase" style={{ color: "#6b7c8d", fontSize: 13}}>Blog</a>
            <a href="/contact" className="navbar-item is-uppercase" style={{ color: "#6b7c8d", fontSize: 13}}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
