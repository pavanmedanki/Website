import React from "react";
import "./project.css";
import { HeaderComponent } from "../../compnents/Header";

export const ProjectPage = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="home" id="home">
        <div className="home-body">
          <div className="home-description">Projects</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
