import React from "react";
import List from "./List";
import Sidenav from "../../component/Sidenav";
import { Box } from "@mui/material";
const Settings = () => {
  return (
    <>
      <div className="bgcolor">
        <Sidenav />
        <Box height={70}>
          <Box sx={{ display: "flex" }}>
            <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
              <List />
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Settings;
