import React from "react";
import "./contact.css";
import { HeaderComponent } from "../../compnents/Header";

export const ContactPage = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div className="home" id="home">
        <div className="home-body">
          <div className="home-description">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
