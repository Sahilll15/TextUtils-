import React from 'react'
import PropTypes from 'prop-types'
import defaultProps from 'prop-types'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">

      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapto" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="falto" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapto navbar-collapto" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>


        </ul>

      </div>

    </nav>
  )
}


Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: "tot title here",
  aboutText: "tot the about text"
}