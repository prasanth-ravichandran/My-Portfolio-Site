import React, { useState } from "react";
import { Offcanvas, OffcanvasBody } from "reactstrap";
import call from "../assets/call.gif";
import { Link } from "react-router-dom";
import Animated from "../Animated";
function AboutMe() {
  const [show, setShow] = useState(false);
  const handleOffCanvas = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="CONTENT">
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
                    SkillSet
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
          <div className="about__container mx-5 ">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-12 col-xl-6 about">
              <div className="content__container mt-5 ">
                <div className="d-flex justify-content-between">
                  <Link to={"/home"}>
                    {" "}
                    <a
                      class="btn btn-dark rounded-circle    btn-s"
                      to={"/home"}
                      role="button"
                      style={{
                        marginLeft: "10px",
                        marginTop: "5px",
                        borderRadius: "70px",
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <i className="fa fa-arrow-left " aria-hidden="true"></i>
                    </a>
                  </Link>
                  <Link to={"/skill"}>
                    {" "}
                    <a
                      class="btn btn-dark rounded-circle btn-s "
                      to={"/skill"}
                      role="button"
                      style={{
                        marginRight: "10px",
                        marginTop: "5px",
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <i class="fa fa-arrow-right " aria-hidden="true"></i>
                    </a>
                  </Link>
                </div>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <h2
                    className=""
                    style={{ fontFamily: "cursive", marginTop: "20px" }}
                  >
                    About
                  </h2>
                </p>

                <p
                  style={{
                    class: "words",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    boxSizing: "border-box",
                    letterSpacing: "2px",
                    lineHeight: "50px",
                    color: "#000000",
                    fontFamily: "cursive",
                    fontSize: "22px",
                  }}
                >
                  I am a skilled engineering graduate looking for an entry level
                  position to work as FrontEnd developer.
                  <br />
                  Good at developing and implementing user interface(UI) designs
                  and features
                  <br /> to enhance application performance by using React.js
                  concepts and workflows.
                </p>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    class="btn btn-dark mt-2 btn-s mb-3"
                    to={"/contact"}
                    role="button"
                  >
                    Contact Me{" "}
                    <img src={call} style={{ width: "20px", height: "20px" }} />{" "}
                  </Link>
                </div>

                <div></div>
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
      </div>
    </>
  );
}

export default AboutMe;
