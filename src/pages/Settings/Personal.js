import React from "react";
import Sidenav from "../../component/Sidenav";
import { Box } from "@mui/material";
const Personal = () => {
  return (
    <>
      <Box sx={{ display: "flex", p: 3 }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1> Personal Info</h1>
        </Box>
      </Box>
    </>
  );
};

export default Personal;
