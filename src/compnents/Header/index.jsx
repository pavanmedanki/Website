import React from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "../constant";

export const HeaderComponent = () => {
  return (
    <div className="topnav">
      {/* <div
        style={{
          display: "inline-block",
          marginRight: "30px",
          cursor: "pointer",
          padding: "10px",
        }}
      > */}
      <Link to="/">
        <span
          style={{
            display: "inline-block",
            marginRight: "30px",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          Home
        </span>
      </Link>
      <Link to="/education">
        <span
          style={{
            display: "inline-block",
            marginRight: "30px",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          Education
        </span>
      </Link>
      <Link to="/skills">
        <span
          style={{
            display: "inline-block",
            marginRight: "30px",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          Skills
        </span>
      </Link>
      <Link to="/experience">
        <span
          style={{
            display: "inline-block",
            marginRight: "30px",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          Experience
        </span>
      </Link>
      <Link to="/projects">
        <span
          style={{
            display: "inline-block",
            marginRight: "30px",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          Projects
        </span>
      </Link>
      <Link to="/resume">
        <span
          style={{
            display: "inline-block",
            marginRight: "30px",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          Resume
        </span>
      </Link>
      <Link to="/contact">
        <span
          style={{
            display: "inline-block",
            marginRight: "30px",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          Contact
        </span>
      </Link>
      {/* </div> */}
    </div>
  );
};

export default HeaderComponent();
