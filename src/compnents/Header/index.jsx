import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderData } from "../constant/index";

export const HeaderComponent = () => {
  return (
    <div className="topnav">
      {HeaderData.map((item) => (
        <NavLink
          key={item.value}
          to={`/${item.value}`}
          activeClassName="active-link"
          className="active-link"
          isActive={(location) => {
            if (location.pathname === `/${item.value}`) {
              return true;
            } else {
              return false;
            }
          }}
        >
          <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};
