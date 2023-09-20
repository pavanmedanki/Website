import React from "react";
import { EducationData } from "./education";
import "./education.css";
import { HeaderComponent } from "../../compnents/Header";

export const EducationPage = () => {
  return (
    // <div>
    <>
      <div>
        <HeaderComponent />
      </div>
      <div className="card-container">
        {EducationData?.map((edu) => (
          <div className="card" key={edu.study}>
            <h3>{edu.study}</h3>
            <p>{edu.branch}</p>
            <p>{edu.score}</p>
            <p>{edu.title}</p>
          </div>
        ))}
      </div>
    </>
    // </div>
  );
};

export default EducationPage;
