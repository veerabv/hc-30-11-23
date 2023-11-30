import React from "react";
import AppHeader from "../AppHeader";
import AppFooter from "../AppLayout/AppFooter";

import Box from "@mui/material/Box";
import { Avatar, Divider, Paper, Typography, Stack } from "@mui/material";

import PayerInfoTable from "../PayerInfoTable";
import idCard from "../../Assets/Static/id 1.svg";
import building from "../../Assets/Static/building 1.svg";
import provider from "../../Assets/Static/hand-holding-medical 1.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import business from "../../Assets/Static/doctor 1.svg";

function PayersInfo() {
  return (
    <>
      <AppHeader />
      <Box sx={{ backgroundColor: "#F5F5F5" }}>
        <Box
          sx={{
            width: "1200px",
            backgroundColor: "#F5F5F5",
            margin: "0px auto",
            padding: "0px 12px",
          }}
        >
          <h4
            style={{
              margin: "0px",
              padding: "18px 12px",
              letterSpacing: "1.2px",
            }}
          >
            Payer Info
          </h4>
          <div
            style={{
              padding: "0px 12px 18px 12px",
              display: "flex",
              gap: "30px",
              marginBottom: "5px",
            }}
          >
            <Paper
              elevation={6}
              sx={{
                borderRadius: "50%",
                width: "90px",
                height: "90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#45A736",
                  width: "60px",
                  height: "60px",
                }}
              >
                A
              </Avatar>
            </Paper>
            <Box sx={{ paddingTop: "15px" }}>
              <Typography
                variant="h6"
                sx={{ marginBottom: "3px", fontWeight: 600 }}
              >
                Aetna of AL
              </Typography>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                sx={{
                  lineHeight: "0px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textTransform: "none",
                }}
              >
                Alabama
              </Typography>
            </Box>
          </div>
          <Divider />
          <Stack
            direction="row"
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ height: "81px" }}
              />
            }
            justifyContent="space-between"
            sx={{ padding: "20px 12px" }}
          >
            <div style={{ display: "flex", gap: "18px" }}>
              <img src={idCard} alt="Address icon" width={30} height={30} />
              <Box sx={{ paddingTop: "6px" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontWeight: "500" }}
                >
                  HIOS ISSUER ID
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ marginTop: "15px" }}
                >
                  44006
                </Typography>
              </Box>
            </div>
            <div style={{ display: "flex", gap: "18px" }}>
              <img src={building} alt="Address icon" width={30} height={30} />
              <Box sx={{ paddingTop: "6px" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontWeight: "500" }}
                >
                  HEALTH SYSTEM
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ marginTop: "15px" }}
                >
                  15
                </Typography>
              </Box>
            </div>
            <div style={{ display: "flex", gap: "18px" }}>
              <LocationOnOutlinedIcon
                sx={{ color: "#45A736", fontSize: "40px" }}
              />
              <Box sx={{ paddingTop: "6px" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontWeight: "500" }}
                >
                  MARKET
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ marginTop: "15px" }}
                >
                  AL
                </Typography>
              </Box>
            </div>
            <div style={{ display: "flex", gap: "18px" }}>
              <img src={provider} alt="Address icon" width={30} height={30} />
              <Box sx={{ paddingTop: "6px" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontWeight: "500" }}
                >
                  PROVIDERS
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ marginTop: "15px" }}
                >
                  54
                </Typography>
              </Box>
            </div>
            <div style={{ display: "flex", gap: "18px" }}>
              <img src={business} alt="Address icon" width={30} height={30} />
              <Box sx={{ paddingTop: "6px" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontWeight: "500" }}
                >
                  LINE OF BUSINESS
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ marginTop: "7px" }}
                >
                  Commercial
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ marginTop: "7px" }}
                >
                  Medicare
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ marginTop: "7px" }}
                >
                  Workers' Compensation
                </Typography>
              </Box>
            </div>
          </Stack>
        </Box>
      </Box>
      <PayerInfoTable title="Contracted Providers" />
      <Divider
        sx={{ width: "1200px", margin: "0px auto", marginTop: "50px" }}
      />
      <PayerInfoTable title="Insurance Products" />
      <AppFooter value={false} />
    </>
  );
}

export default PayersInfo;
