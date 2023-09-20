import React from "react";
import "./skill.css";
import { HeaderComponent } from "../../compnents/Header";

export const SkillPage = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="home" id="home">
        <div className="home-body">
          <div className="home-description">Skills</div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
