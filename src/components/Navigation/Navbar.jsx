import React from 'react'
import PropTypes from 'prop-types'

const Navbar = props => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
    
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
    
          <a className="btn-getstarted" href="https://bootstrapmade.com/content/demo/iLanding/index.html#about">Get In Touch</a>
    
        </div>
      </header>
    )
}

Navbar.propTypes = {}

export default Navbar