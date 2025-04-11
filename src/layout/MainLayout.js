import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/TopBar";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        width: "100vw",
        color: "text.primary",
        pt: '32px'
      }}
    >

      <Topbar />
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
