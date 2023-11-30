import React from "react";
import "../Assets/css/Pagination.css";
import Pagination from "@mui/material/Pagination";

function PageNumbers() {
  return (
    <>
      <Pagination count={30} boundaryCount={3} />
    </>
  );
}

export default PageNumbers;
