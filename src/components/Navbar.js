import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"
const Navbar = () => {
  const [show, setShow] = useState(true)
  const showHandler = () => {
    setShow(!show)
  }
  const hideHandler = () => {
    setShow(false)
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={showHandler}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={hideHandler}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={hideHandler}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={hideHandler}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={hideHandler}
          >
            about
          </Link>
          <div>
            <Link
              to="/testing"
              className="nav-link"
              activeClassName="active-link"
              onClick={hideHandler}
            >
              Test
            </Link>
          </div>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={hideHandler}>
              お問合せ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
