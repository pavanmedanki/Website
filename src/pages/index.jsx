import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderComponent } from "../compnents/Header";
import HomePage from "./Home";
import EducationPage from "./Education";
import ExperiencePage from "./Experience";
import SkillPage from "./Skill";
import ResumePage from "./Resume";
import ProjectPage from "./Projects";
import ContactPage from "./Contact";

export const Website = () => {
  // const HeaderButtons = HeaderData?.map((a) => a?.value);
  return (
    <>
      <div>
        <div>
          {/* <HeaderComponent /> */}
          {/* <HomePage /> */}
        </div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HeaderComponent />} />
              <Route index element={<HomePage />} />
              <Route path="education" element={<EducationPage />} />
              <Route path="skills" element={<SkillPage />} />
              <Route path="experience" element={<ExperiencePage />} />
              <Route path="projects" element={<ProjectPage />} />
              <Route path="resume" element={<ResumePage />} />
              <Route path="contact" element={<ContactPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};
export default Website;
