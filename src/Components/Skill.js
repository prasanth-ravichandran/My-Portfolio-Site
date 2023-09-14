import React, { useState } from "react";
import { motion } from "framer-motion";
import settings from "../assets/settings.gif";
import system from "../assets/system.png";
import Html from "../assets/Html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import Animated from "../Animated";
import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasBody } from "reactstrap";
function Skill() {
  const [show, setShow] = useState(false);
  const handleOffCanvas = () => {
    setShow(!show);
  };
  const handleOffCanvasBody = () => {
    setShow(!show);
  };
  let skillList = [
    {
      image: Html,
      title: "HTML",
      bar: "html",
      percentage: "95%",
    },
    {
      image: css,
      title: "CSS",
      bar: "css",
      percentage: "95%",
    },
    {
      image: bootstrap,
      title: "BOOTSTRAP",
      bar: "bootstrap",
      percentage: "85%",
    },
    {
      image: js,
      title: "JAVASCRIPT",
      bar: "javascript",
      percentage: "85%",
    },
    {
      image: react,
      title: "REACT",
      bar: "react",
      percentage: "85%",
    },
    {
      image: github,
      title: "GITHUB",
      bar: "github",
      percentage: "65%",
    },
  ];
  return (
    <>
      <nav
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
          fontFamily: "roboto",
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
              <i
                className="fa fa-bars"
                aria-hidden="true"
                onClick={handleOffCanvas}
              ></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
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
                <a className="nav-link text-dark fw-bold" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item active mx-2">
                {" "}
                <a
                  className="nav-link text-dark fw-bold"
                  href="/about"
                  style={{ textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item active mx-2">
                <a className="nav-link text-dark fw-bold" href="/skill">
                  Skill
                </a>
              </li>
              <li className="nav-item active mx-2">
                <a className="nav-link text-dark fw-bold" href="/project">
                  Project
                </a>
              </li>
              <li className="nav-item active mx-2">
                <a className="nav-link text-dark fw-bold" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Animated>
        <div className="container heading">
          <div className="main-skill">
            <h1 className="text-center">
              <img className="size-2" src={settings} />
              Skill
            </h1>
          </div>
          <div className="skills-1">
            <div className="d-flex justify-content-between">
              <Link
                class="btn btn-dark rounded-circle mt-4"
                to={"/about"}
                role="button"
              >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              </Link>
              <img className="skills" src={system} />
              <Link
                class="btn btn-dark rounded-circle mt-4"
                to={"/project"}
                role="button"
              >
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="skills">
            <h3 className="text-center sub">Technical</h3>
            <h5>I have become confident using following technologies</h5>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6 m-4 skill-content">
              <div className="row skill-set">
                {skillList.map((list) => {
                  return (
                    <div className="col-4">
                      <SkillCard list={list} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Animated>
      <Offcanvas
        isOpen={show}
        toggle={handleOffCanvas}
        style={{ backgroundColor: "rgb(206, 206, 206, 0.5)" }}
      >
        <OffcanvasBody>
          <div className="container">
            <i
              onClick={handleOffCanvasBody}
              class="fa fa-times"
              aria-hidden="true"
              style={{ display: "flex", justifyContent: "flex-end" }}
            ></i>
            <div className=" mb-3 mt-3 nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </div>
            <div className="mb-3 nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </div>
            <div className="mb-3 nav-item">
              <a className="nav-link" href="/skill">
                Skill
              </a>
            </div>
            <div className="mb-3 nav-item">
              <a className="nav-link" href="/project">
                Project
              </a>
            </div>
            5
            <div className="mb-3 nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}
export default Skill;
