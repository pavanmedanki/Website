import React from "react";
import { Outlet, Link } from "react-router-dom";
import { HeaderData } from "../compnents/constant";

const Layout = () => {
  return (
    <>
      <nav>
        {HeaderData?.map((item) => (
          <Link to={item?.href}>{item.name}</Link>
        ))}
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
