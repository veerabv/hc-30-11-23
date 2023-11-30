import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../Assets/Static/logo1.png";
import "../Assets/css/AppHeader.css";
import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";
function AppHeader() {
  return (
    <Grid style={{ backgroundColor: "#45A736" }}>
      <Toolbar
        sx={{ margin: "auto", width: "1200px", backgroundColor: "#45A736" }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <img src={logo} alt="logo" />
        </IconButton>

        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Typography> */}
        <div>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "16px",
              color: "white",
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{
              ml: "15px",
              mr: "5px",
              textTransform: "none",
              fontSize: "16px",
              color: "white",
            }}
          >
            About Us
          </Button>
        </div>
      </Toolbar>
    </Grid>
  );
}

export default AppHeader;
