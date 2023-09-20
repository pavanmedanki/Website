import React from "react";
import "./resume.css";
import { HeaderComponent } from "../../compnents/Header";

export const ResumePage = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="home" id="home">
        <div className="home-body">
          <div className="home-description">Resume</div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
