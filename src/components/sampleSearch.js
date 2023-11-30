import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "../Assets/css/Search.css";

const Dropdown = ({ data }) => {
  // console.log("myself dropdown", data);
  const [selectedValue, setSelectedValue] = useState(data[0]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Select
      className="select-procedure"
      value={selectedValue}
      onChange={handleChange}
    >
      {data.map((data, i) => (
        <MenuItem key={i} value={data}>
          {data}
        </MenuItem>
      ))}

      {/* <MenuItem value="All specialties">All specialties</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem> */}
    </Select>
  );
};

function SampleSearch({ data, placeholder }) {
  // console.log("myself Search", data);
  return (
    <>
      <div className="input-container__search">
        <Input
          className="inputField"
          disableUnderline
          placeholder={placeholder}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />

        <span></span>
        <Dropdown data={data} />
        <button className="search-btn">Search</button>
      </div>
    </>
  );
}

export default SampleSearch;
