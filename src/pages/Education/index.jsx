import React from "react";
import { EducationData } from "./education";
import "./education.css";
import { HeaderComponent } from "../../compnents/Header";

export const EducationPage = () => {
  return (
    <>
      <div>
        <HeaderComponent />
      </div>
      <div className="card-container">
        {EducationData?.map((edu) => (
          <div className="card" key={edu.Course}>
            <h3>{edu.Course}</h3>
            <p>{edu.branch}</p>
            <p>{edu.score}</p>
            <p>{edu.Institution}</p>
            <p>{edu.startYear}-{edu.endYear}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EducationPage;
