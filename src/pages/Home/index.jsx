import React from "react";
import "./home.css";
import { homeData } from "./home";
import { HeaderComponent } from "../../compnents/Header";

export const HomePage = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="home" id="home">
        <div className="home-body">
          <div className="home-description">
            <h3>{homeData.title}</h3>
            <p>
              {homeData.description}
              <br />
              <br />
              {homeData.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
