import React from "react";
import Topbar from "../components/TopBar";


const MainLayout = ({ children }) => {

  return (
    <>
        <Topbar />
        {children}
    </>
  );
};

export default MainLayout;
