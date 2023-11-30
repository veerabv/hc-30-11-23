import React, { useState } from "react";
import AppHeader from "../AppHeader";
import AppFooter from "../AppLayout/AppFooter";
import "../../Assets/css/ProductPrice.css";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function ProcedurePrice() {
  const [content, setContent] = useState("rate");

  return (
    <>
      <AppHeader />
      <Box sx={{ backgroundColor: "#F5F5F5" }}>
        <Box sx={{ width: "1200px", margin: "auto", padding: "30px 24px" }}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: "4px", fontFamily: "Poppons" }}
          >
            3D Mammogram Screening (Tomosynthesis)
          </Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{ fontFamily: "Poppons semi", fontSize: "14px" }}
          >
            Hospital Reported Price for NYU Langone Tisch
          </Typography>
          <p
            style={{
              fontSize: "11px",
              fontFamily: "Poppons semi",
              letterSpacing: "0.3px",
              marginBottom: "25px",
            }}
          >
            The price that NYU Langone Tisch has reported for 3D Mammogram
            Screening (Tomosynthesis) varies depending on if you would be paying
            in cash or if you are part of an insurance plan that has a
            pre-negotiated rate. Choose whether to view cash prices or insurance
            prices to get started.
          </p>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button
              variant="outlined"
              onClick={() => setContent("rate")}
              sx={{
                fontSize: "12px",
                border: "1px solid #45A736",
                padding: "0px 10px 0px 0px",
                color: content === "rate" ? "white" : "#45A736",
                borderRadius: "10px",
                textTransform: "none",
                letterSpacing: "0px",
                height: "38px",
                backgroundColor: content === "rate" ? "#45A736" : "white",
                "&:hover": {
                  border: "1px solid #45A736",
                  color: "#45A736",
                },
              }}
            >
              <Checkbox
                inputProps={{ "aria-label": "checkbox" }}
                checked={content === "rate"}
                sx={{
                  color: "#45A736",
                }}
                size="small"
              />
              View cash rate
            </Button>

            <Button
              variant="outlined"
              onClick={() => setContent("insurance")}
              sx={{
                fontSize: "12px",
                border: "1px solid #45A736",
                padding: "0px 10px 0px 0px",
                color: content === "insurance" ? "white" : "#45A736",
                borderRadius: "10px",
                textTransform: "none",
                letterSpacing: "0px",
                height: "38px",
                backgroundColor: content === "insurance" ? "#45A736" : "white",
                "&:hover": {
                  border: "1px solid #45A736",
                  color: "#45A736",
                },
              }}
            >
              <Checkbox
                inputProps={{ "aria-label": "checkbox" }}
                checked={content === "insurance"}
                sx={{
                  color: "#45A736",
                }}
                size="small"
              />
              View Insurance Rates
            </Button>
          </Box>
          {content === "insurance" && (
            <>
              <Box className="userData__handle">
                <Select
                  sx={{
                    width: "20%",
                    padding: "0px",
                    height: "35px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    fontSize: "13px",
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <input
                  type="text"
                  placeholder="Remaining deductible this year"
                />
                <input type="number" placeholder="Copay Amount" />
                <input type="text" placeholder="Coinsurance Percentage" />
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box sx={{ padding: "24px 0" }}>
        <Paper
          sx={{
            width: "1200px",
            margin: "0 auto",
            borderRadius: "15px",
            textAlign: "center",
            padding: "20px 0px",
          }}
          elevation={3}
        >
          <Typography variant="subtitle1" sx={{ fontFamily: "Poppons" }}>
            Hospital Reported Cash Price
          </Typography>
          {content === "rate" && (
            <>
              <p
                style={{
                  color: "#45A736",
                  fontSize: "50px",
                  margin: "30px 0px",
                  fontWeight: "500",
                }}
              >
                $30.72
              </p>
            </>
          )}
          {content === "insurance" && (
            <>
              <table className="priceTable">
                <tr>
                  <td style={{ width: "90%" }}>
                    Hospital Reported Insurer Rate
                  </td>
                  <td style={{ textAlign: "right", paddingRight: "15px" }}>
                    $30.64
                  </td>
                </tr>
                <tr>
                  <td>Your Deductible</td>
                  <td style={{ textAlign: "right", paddingRight: "15px" }}>
                    $0.00
                  </td>
                </tr>
                <tr>
                  <td>Your Copay</td>
                  <td style={{ textAlign: "right", paddingRight: "15px" }}>
                    $0.00
                  </td>
                </tr>
                <tr>
                  <td>Your Coinsurance</td>
                  <td style={{ textAlign: "right", paddingRight: "15px" }}>
                    $0.00
                  </td>
                </tr>
                <tr>
                  <td>Insurance Company Pays</td>
                  <td style={{ textAlign: "right", paddingRight: "15px" }}>
                    $30.64
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#F3F8F2" }}>
                  <td>Your Estimated Charge</td>
                  <td style={{ textAlign: "right", paddingRight: "15px" }}>
                    $0.00
                  </td>
                </tr>
              </table>
            </>
          )}

          <Button
            variant="filled"
            sx={{
              fontSize: "13px",
              border: "1px solid #45A736",
              backgroundColor: "#45A736",
              padding: "2px 15px",
              color: "white",
              borderRadius: "10px",
              textTransform: "none",
              letterSpacing: "0.3px",
              height: "38px",
            }}
          >
            Verify Hospital Reported Cash Price
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InfoOutlinedIcon sx={{ color: "#45A736", fontSize: "15px" }} />{" "}
            <p style={{ fontSize: "13px" }}>Where does this price come from?</p>
          </Box>
        </Paper>
      </Box>

      <AppFooter value={false} />
    </>
  );
}

export default ProcedurePrice;
