import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import "../Assets/css/Pagination.css";
// import PageNumbers from "./Pagination";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Pagination } from "@mui/material";

function FilterResult({ items, selectedAlphabet }) {
  const [currentPage, setCurrentPage] = useState(1); //
  const itemsPerPage = 30; //

  const indexOfLastItem = currentPage * itemsPerPage; //
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //

  const [selectedItem, setSelectedItem] = useState(items[0]); //
  const theme = useTheme();
  const filteredItems =
    selectedAlphabet !== "All"
      ? items.filter((item) =>
          item.name.toUpperCase().startsWith(selectedAlphabet)
        )
      : items;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem); //
  useEffect(() => {
    if (filteredItems.length !== 0) {
      setSelectedItem(filteredItems[0]); // Select the first item
    } else {
      setSelectedItem({ name: "" });
    }
  }, [setSelectedItem, filteredItems]);

  function handleItemClick(item) {
    setSelectedItem(item);
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  function ResponsiveGrid() {
    return (
      <>
        {currentItems.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Paper
              key={index}
              onClick={() => handleItemClick(item)}
              sx={{
                "&:hover": {
                  backgroundColor: "#E3F2E1",
                  color: "#59B04B",
                },
                // backgroundColor:
                //   selectedItem.name === item.name
                //     ? "#E3F2E1"
                //     : (theme) =>
                //         theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                // color:
                //   selectedItem.name === item.name
                //     ? "#59B04B"
                //     : (theme) => theme.palette.text.secondary,
                ...theme.typography.body2,
                padding: theme.spacing(1.5),
                height: "32px",
              }}
            >
              {item.name}
            </Paper>
          </Grid>
        ))}
      </>
    );
  }

  return (
    <>
      <Card
        variant="outlined"
        className="card-listing__topHandler"
        style={{ margin: "auto", width: "1200px" }}
      >
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <ResponsiveGrid />
            </Grid>
          </Box>
        </CardContent>
        <Pagination
          count={Math.ceil(filteredItems.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
        {/* <PageNumbers /> */}
      </Card>
    </>
  );
}

export default FilterResult;
