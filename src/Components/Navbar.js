/*import React from "react";
import { motion } from "framer-motion";

<motion.nav
  className="navbar navbar-expand-lg nav text-warning "
  id="NavBar"
  role="navigation"
  style={{
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem",
    backgroundColor: "#A9A7A74C",
    fontFamily: "initial",
  }}
>
  <div
    className="container "
    style={{ display: "flex", fontFamily: "initial" }}
  >
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-aria-label="Toggler-Navigation"
    >
      <span>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul
        className="navbar-nav m-auto text-uppercase"
        style={{
          display: "flex",
          listStyle: "none",
          letterSpacing: "1px",

          fontSize: "20px",
        }}
      >
        <li className="nav-item active mx-2">
          <motion.a
            className="nav-link text-dark fw-bold"
            href="/home"
            whileHover={{
              scale: 1.4,
            }}
          >
            Home
          </motion.a>
        </li>
        <li className="nav-item active mx-2">
          {" "}
          <motion.a
            className="nav-link text-dark fw-bold"
            href="/about"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            style={{ textDecoration: "none" }}
          >
            About
          </motion.a>
        </li>
        <li className="nav-item active mx-2">
          <motion.a
            className="nav-link text-dark fw-bold"
            href="/skill"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            SkillSet
          </motion.a>
        </li>
        <li className="nav-item active mx-2">
          <motion.a
            className="nav-link text-dark fw-bold"
            href="/project"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            Project
          </motion.a>
        </li>
        <li className="nav-item active mx-2">
          <motion.a
            className="nav-link text-dark fw-bold"
            href="/contact"
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            Contact
          </motion.a>
        </li>
      </ul>
    </div>
  </div>
</motion.nav>;*/
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top nav"
      role="navigation"
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle-navigation"
          aria-expanded="false"
        >
          <span>
            <i
              className="fa fa-bars"
              aria-hidden="true"
              style={{ color: "#fff" }}
            ></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"about"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"Skill"} className="nav-link">
                Skill
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"project"} className="nav-link">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"contact"} className="nav-link">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
