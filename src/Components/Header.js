import React from "react";
import { Link } from "react-router-dom";
import Animated from "../Animated";
import download from "../assets/gif.gif";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <Animated>
        <div className="header-wrapper">
          <div className="main-info">
            <h3>Hello, I am</h3>
            <h1>
              <strong>PRASANTH R</strong>
            </h1>
            <div className="typewriter mt-4">
              <h1>FRONT-END DEVELOPER.</h1>
            </div>
            <a
              href="https://drive.google.com/file/d/1NehxSzG-tBwFiPnKVDdmih7k0_TzxM1a/view?usp=sharing"
              target="_blank"
              className="btn-main-offer"
            >
              Get Resume{" "}
              <img
                className="icon"
                src={download}
                style={{ width: "20px", height: "20px" }}
              />{" "}
            </a>
            <Link class="btn btn-dark  mt-4 btns" to={"/about"} role="button">
              About me <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </Animated>
    </>
  );
}

export default Header;
