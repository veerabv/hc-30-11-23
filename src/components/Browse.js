import React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

import "../Assets/css/Browse.css";

export default function Browse({ selectTab }) {
  const [value, setValue] = React.useState(selectTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let navigate = useNavigate();

  return (
    <div className="browse-headStyle" style={{ backgroundColor: "#F5F5F5" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="browse-handle__nav"
      >
        <h3 style={{ margin: 0 }}>Browse All</h3>
        <Tabs value={value} onChange={handleChange} className="nav-tabs" scrollButtons
        allowScrollButtonsMobile>
          <Tab
            onClick={() => navigate("/procedures")}
            label="Procedures"
            sx={{
              textTransform: "none",
              fontFamily: "poppins semi",
              fontSize: "16px",
              fontWeight: 400,
              color: "#02363D",
            }}
          />

          <Tab
            onClick={() => navigate("/providers")}
            label="Providers"
            sx={{
              textTransform: "none",
              fontFamily: "poppins semi",
              fontSize: "16px",
              fontWeight: 400,
              color: "#02363D",
            }}
          />

          {/* <Tab label="Health systems" /> */}

          <Tab
            onClick={() => navigate("/payers")}
            label="Payers"
            sx={{
              textTransform: "none",
              fontFamily: "poppins semi",
              fontSize: "16px",
              fontWeight: 400,
              color: "#02363D",
            }}
          />
        </Tabs>
      </Box>
    </div>
  );
}
