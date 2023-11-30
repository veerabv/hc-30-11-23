import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import "../Assets/css/PayerInfoTable.css";

import Pagination from "@mui/material/Pagination";

function PayerInfoTable({ title }) {
  const tableData = [
    { td1: "Athens Limestone", td2: "Athens,AL", td3: "Huntsville Hospital" },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
    {
      td1: "Baptist Medical center East",
      td2: "Montgomery,AL",
      td3: "Baptist Health(AL)",
    },
  ];
  const itemsPerPage = 10; //pagination
  const [currentPage, setCurrentPage] = useState(1); //
  const indexOfLastItem = currentPage * itemsPerPage; //
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  }; //
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "1200px",
            margin: "0px auto",
            padding: "0px 24px",
          }}
        >
          <h2>{title}</h2>
          <Paper
            elevation={6}
            sx={{ borderRadius: "16px", overflow: "hidden" }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                <tr
                  style={{
                    backgroundColor: "#6AB95E",
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  <th style={{ paddingLeft: "40px" }}>PROVIDER</th>
                  <th>LOCATION</th>
                  <th>HEALTH SYSTEM</th>
                </tr>
                {currentItems.map((data, i) => (
                  <tr key={i}>
                    <td>{data.td1}</td>
                    <td>{data.td2}</td>
                    <td>{data.td3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              sx={{
                padding: "18px",
                display: "flex",
                justifyContent: "center",
              }}
              count={Math.ceil(tableData.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default PayerInfoTable;
