import React, { useState } from "react";
import Animated from "../Animated";
import link from "../assets/link..gif";
import { Offcanvas, OffcanvasBody } from "reactstrap";
import github from "../assets/github.png";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import ContactMailSharpIcon from "@mui/icons-material/ContactMailSharp";

function Contact() {
  const [show, setShow] = useState(false);
  const handleOffCanvas = () => {
    setShow(!show);
  };
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
                  About me
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
        <div
          class="container col-sm-6 col-md-12 col-lg-6 col-xxl-6 col-xl-6"
          style={{
            backgroundColor: "#A9A7A74C",
            boxSizing: "border-box",
            borderRadius: "20px",
            boxShadow: "2px 2px 4px #fffff",
            marginTop: "100px",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "cursive",
              fontSize: "20px",
              marginLeft: "50px",
              marginRight: "20px",
              letterSpacing: "1px",
              paddingTop: "20px",
            }}
          >
            I am interested in working with any company that thinks my skills
            and enthusiasm towards this industry will make myself as a good
            asset to any team. If you are looking for someone like me, please
            let me know.
          </p>

          <div
            className="githubLink"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://github.com/prasanth-ravichandran">
              {" "}
              <img src={link} width={"30px"} height={"30px"} alt="link gif" />
            </a>
            <img src={github} alt="github gif" />
          </div>

          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              marginTop: "20px",
              marginBottom: "10px",
              fontFamily: "cursive",
            }}
          >
            <ContactMailSharpIcon /> prasanth732604@gmail.com
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              marginTop: "20px",
              marginBottom: "10px",
              letterSpacing: "1px",
              fontFamily: "cursive",
            }}
          >
            <LocalPhoneSharpIcon /> +91 6381775603
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              marginTop: "20px",
              fontSize: "15px",
              letterSpacing: "2px",
              fontFamily: "cursive",
              paddingBottom: "20px",
            }}
          >
            <LocationOnSharpIcon /> CHEYYUR, CHENGALPATU-603302
          </p>
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
              id="cross"
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
    </>
  );
}
export default Contact;
