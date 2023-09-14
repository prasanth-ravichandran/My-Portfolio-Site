import React, { useState } from "react";
import gif from "../assets/gif.gif";
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasBody } from "reactstrap";
import Animated from "../Animated";

function Content() {
  const [show, setShow] = useState(false);
  const handleOffCanvas = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="CONTENT">
        <nav
          className="navbar navbar-expand-lg nav text-dark "
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
              className="collapse navbar-collapse navbar"
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
          <div className="header-wrapper">
            <div className="main-info">
              <h4>Hello, I am</h4>
              <h2>
                <strong style={{ letterSpacing: "2px", fontFamily: "initial" }}>
                  PRASANTH R
                </strong>
              </h2>
              <div className="typewriter mt-4">
                <h1 style={{ letterSpacing: "2px ", fontFamily: "initial" }}>
                  UI/UX DESIGNER
                </h1>
              </div>
              <a
                href="https://drive.google.com/file/d/1kEbW95dCJm6rPGgzZ4al2HfdjPUr6gR6/view?usp=sharing"
                target="_blank"
                className="btn-main-offer"
              >
                Get Resume{" "}
                <img
                  className="icons "
                  src={gif}
                  width={"20px"}
                  height={"20px"}
                  alt="gif"
                ></img>
              </a>
              <Link class="btn btn-dark  mt-4 btns" to={"/about"} role="button">
                About me <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>{" "}
        </Animated>

        <Offcanvas
          isOpen={show}
          toggle={handleOffCanvas}
          style={{ backgroundColor: "rgb(206, 206, 206, 0.5)" }}
        >
          <OffcanvasBody>
            <div className="container">
              <i
                onClick={handleOffCanvas}
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
              <div className="mb-3 nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </div>
            </div>
          </OffcanvasBody>
        </Offcanvas>
      </div>{" "}
    </>
  );
}

export default Content;
