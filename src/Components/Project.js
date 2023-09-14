import React, { useState } from "react";
import { Offcanvas, OffcanvasBody } from "reactstrap";
import Mynotes from "../assets/Mynotes.png";
import Gym from "../assets/Gym.png";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import ECOMMERCE from "../assets/ECOMMERCE.png";
import Form_Validation from "../assets/Form_Validation.png";
import CRUDOperation from "../assets/CRUD-Operation.png";
import convertor from "../assets/Currency-Convertor.png";
import Animated from "../Animated";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
function Project() {
  const [show, setShow] = useState(false);
  const handleOffCanvas = () => {
    setShow(!show);
  };
  let projectList = [
    {
      image: Mynotes,
      title: "Google-Notes Clone",
      description: "To-Do-List Using JAVASCRIPT & REACT",
      weblink: "https://notes-prasanth.netlify.app",
    },
    {
      image: CRUDOperation,
      title: "Admin Portal",
      description: "Student Admin Portal JAVASCRIPT & REACT",
      weblink: "https://student-portal-site.vercel.app",
    },
    {
      image: ECOMMERCE,
      title: "E-Commerce_site",
      description: "E-Commerce site using JAVASCRIPT & REACT",
      weblink: "https://e-commerce-shop-prasanth.netlify.app",
    },
    {
      image: convertor,
      title: "Currency-Convertor",
      description: "Currency-Convertor using HTML, CSS & JAVASCRIPT",
      weblink: "https://github.com/prasanth-ravichandran/CurrencyConvertor",
    },
    {
      image: Form_Validation,
      title: "Form-Validation",
      description: "Form-Validation using HTML, CSS & JAVASCRIPT",
      weblink: "https://github.com/prasanth-ravichandran/Form-Validation",
    },
    {
      image: Gym,
      title: "Gym-Catalogue",
      description: "Gym-Catalogue using HTML,CSS & BOOTSTRAP",
      weblink: "https://github.com/prasanth-ravichandran/GYM",
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
        <div className="container" style={{ display: "flex" }}>
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
                  About{" "}
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
        <div
          className="container"
          style={{
            backgroundColor: "#A9A7A74C",
            boxSizing: "border-box",
            borderRadius: "20px",
            width: "auto",
            boxShadow: "2px 2px 4px #0000",
            marginBottom: "60px",
            marginTop: "30px",
          }}
        >
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="top">
              <p
                className="text-center mt-4"
                style={{ fontFamily: "initial", fontSize: "35px" }}
              >
                <u>PROJECTS</u>
                <AutoAwesomeMotionIcon color="white" fontSize="large" />
              </p>

              <div className="container project">
                <div className="text-center"></div>
              </div>
            </div>
            <div className="next-page">
              <div
                className="arrows"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Link
                  className="btn btn-dark rounded-circle ml-4"
                  to={"/skill"}
                >
                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </Link>
                <Link
                  className="btn btn-dark rounded-circle ml-4"
                  to={"/contact"}
                >
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="row mt-5">
                <div className="row">
                  {projectList.map((card) => {
                    return <ProjectCard card={card} />;
                  })}
                </div>
              </div>
            </div>{" "}
          </div>{" "}
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
    </>
  );
}
export default Project;
