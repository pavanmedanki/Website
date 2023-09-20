import React from "react";
import "./experience.css";
import { HeaderComponent } from "../../compnents/Header";

export const ExperiencePage = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="home" id="home">
        <div className="home-body">
          <div className="home-description">Experience</div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
