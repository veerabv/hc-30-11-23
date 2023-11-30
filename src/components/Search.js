import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
import "../Assets/css/Search.css";
import { List, ListItem, ListItemText, Button } from "@mui/material";
// import { Divider } from "@mui/material";
import Env from "../utils/Services/Env";
// import { useNavigate } from "react-router-dom";
import "../Assets/css/AlphabetFilter.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Pagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
// import "../Assets/css/menusList.css";

const Search = ({
  data,
  alphabets,
  setSelectedAlphabet,
  items,
  selectedAlphabet,
  parameters,
  onPageChange,
  procedureSearcval,
}) => {
  const theme = useTheme();
  // const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(1);
  const [specialityValue, setSpecialityValue] = useState("");
  const [procedureName, setProcedureName] = useState("");
  const [procedure, setProcedure] = useState([]);
  const [procedureOptions, setProcedureOptions] = useState(false);
  const [dropdown, setDropdown] = useState(true);
  const [close, setClose] = useState(false);
  // const [pageNo, setPageNo] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      setSpecialityValue(data[0].display);
    }
  }, [data]);

  // const handleChange = (event) => {
  //   setSpecialityValue(event.target.value);
  // };

  // console.log("parametersss", parameters);
  // console.log("itemsss", items);

  const procedureValue = (e) => {
    console.log("e,t", e.target.value);
    console.log("length", procedureName);
    console.log("pppplength", procedureName.length);
    if (e.target.value.length > 0) {
      setClose(true);
    } else {
      setClose(false);
    }

    // console.log("EEEE", e.target.value);
    if (e.target.value.length > 2) {
      const getSearchProcedure = Env.get(
        `procedure/autocomplete?q=${e.target.value}`
      );

      getSearchProcedure.then(
        (response) => {
          setProcedure(response.data.suggession);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    setProcedureName(e.target.value);
    setProcedureOptions(e.target.value.length > 2 ? true : false);
  };

  const handleProcedureOptionClick = (option) => {
    // console.log("Option", option.data);
    setProcedureName(option.data);
    setProcedureOptions(false);
    // navigate("comingSoon");
  };

  // const itemsPerPage = 30;

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems =
    selectedAlphabet !== "All"
      ? items.filter((item) =>
          item.display.toUpperCase().startsWith(selectedAlphabet)
        )
      : items;
  // console.log("filteredItems", filteredItems);
  // const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = filteredItems;
  // console.log("currentItems", currentItems);
  const [selectedItem, setSelectedItem] = useState(currentItems);

  const handleItemClick = (item) => {
    debugger;
    console.log("Item", item);
    setSelectedItem(item.display);
    setSpecialityValue(item.display);
    searchProcedure(item.display);
    // navigate("/comingSoon");
  };

  const handlePageChange = (event, value) => {
    // debugger;
    console.log("valu", value);
    onPageChange(value);

    // onPageChange({ page: value, alphabets: alphabets });
    // props.page = value;
    // setCurrentPage(value);
  };

  const searchProcedure = (item) => {
    console.log("SECOND");
    console.log("item", item);
    if (procedureName) {
      procedureSearcval(procedureName);
    }

    let searchProcedureUrl = `procedure/list?$pageSize=30`;
    // let searchProcedureUrl = `procedure/list?q=&speciality=all&filterbyalphabet=all&page=1&pageSize=25`;

    // /procedure/list?  q=""&speciality=""&filterbyalphabet=''&page=0&pageSize=15

    if (procedureName !== "" && specialityValue === "") {
      console.log("11111");
      searchProcedureUrl = `${searchProcedureUrl}q=${procedureName}`;
    } else if (procedureName === "" && specialityValue !== "") {
      console.log("22222");
      searchProcedureUrl = `${searchProcedureUrl}q=&speciality=${
        specialityValue === "All specialties" ? "all" : specialityValue
      }`;
    } else {
      console.log("333333");
      searchProcedureUrl = `${searchProcedureUrl}q=${procedureName}&speciality=${
        specialityValue === "All specialties"
          ? "all"
          : specialityValue === ""
          ? "all"
          : specialityValue
      }`;
    }
    console.log("searchProcedureUrl", searchProcedureUrl);
    const getSearchValue = Env.get(searchProcedureUrl);

    getSearchValue.then(
      (response) => {
        setDropdown(false);
        console.log("rrrr", response);
        if (procedureName === "") {
          console.log("EMPTY");
        } else {
          console.log("NOT EMPTY");
          // const filteredAlp = response.data.parameters.alphabets[0].letter;
          // console.log("dhd", filteredAlp);
          // setSelectedAlphabet(filteredAlp);
        }

        // navigate(`/procedures?q=${procedureName}`);
        // if (item) {
        //   // searchProcedureUrl = `${searchProcedureUrl}q=${item}`;
        //   navigate(
        //     `/procedure/searchs?q=${item !== "" ? item : ""}&speciality=${
        //       specialityValue !== ""
        //         ? specialityValue === "All specialties"
        //           ? "all"
        //           : specialityValue
        //         : ""
        //     }`
        //   );
        //   return;
        // }
        // //  else {
        // navigate(
        //   `/procedure/searchs?q=${
        //     procedureName !== "" ? procedureName : ""
        //   }&speciality=${
        //     specialityValue !== ""
        //       ? specialityValue === "All specialties"
        //         ? "all"
        //         : specialityValue
        //       : ""
        //   }`
        // );
        // }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const clearAll = () => {
    console.log("dsg");
    setProcedureName("");
    setClose(false);
    setProcedureOptions(false);
  };

  return (
    <>
      {data !== "" ? (
        <div className="input-container__search">
          <Input
            sx={{ fontFamily: "poppins regular" }}
            className="inputField"
            disableUnderline
            placeholder="Enter procedure or code"
            value={procedureName}
            onChange={(e) => procedureValue(e)}
            startAdornment={
              <InputAdornment sx={{ paddingLeft: "6px" }} position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              // <InputAdornment sx={{ paddingLeft: "6px" }} position="start">
              //   <SearchIcon />
              // </InputAdornment>
              close ? (
                <Button onClick={clearAll} type="submit">
                  <CloseIcon sx={{ color: "#59B04B", fontStyle: "none" }} />
                </Button>
              ) : (
                ""
              )
            }
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                searchProcedure();
              }
            }}
          />
          {dropdown && procedureOptions && procedure?.length > 0 && (
            <List
              sx={{
                position: "absolute",
                top: "230px",
                // left: 0,
                backgroundColor: "#f5f5f5",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: "1px solid #ccc",
                borderTop: "none",
                // borderRadius: "0 0 5px 5px",
                borderRadius: "22px",
                // marginLeft: "10px",
                maxHeight: "150px",
                overflowY: "auto",
                color: "#000",
                width: "1000px",
              }}
            >
              {procedure?.map((option, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleProcedureOptionClick(option)}
                >
                  <ListItemText primary={option.data} />
                </ListItem>
              ))}
            </List>
          )}

          {/* <Divider
            orientation="vertical"
            sx={{ marginTop: "3px", height: "30px", color: "#000" }}
          /> */}
          {/* <Select
            className="select-procedure"
            value={specialityValue}
            onChange={handleChange}
            sx={{ height: "40px" }}
          >
            {data?.map((item) => (
              <MenuItem
                key={item.uuid}
                value={item.display}
                name={item.display}
              >
                {item.display}
              </MenuItem>
            ))}
          </Select> */}
          <Button
            sx={{
              //marginLeft: "20px",
              width: "201px",
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#000",
              },
              borderTopRightRadius: "41px",
              borderBottomRightRadius: "41px",
              textTransform: "none",
              fontFamily: "poppins semi",
              fontSize: "23px",
              minHeight: "72px",
            }}
            onClick={() => searchProcedure()}
          >
            Search
          </Button>
        </div>
      ) : (
        ""
      )}
      <div className="search-result__content">
        <div
          className="alphabet-search"
          style={{ margin: "auto", width: "1200px" }}
        >
          <Card variant="outlined" className="card-listing__bottomHandler">
            <CardContent>
              <button
                style={{
                  fontFamily: "poppins semi",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
                onClick={() => setSelectedAlphabet("All")}
                className={selectedAlphabet === "All" ? "active" : ""}
              >
                ALL
              </button>
              {alphabets.map((letter) => (
                <button
                  style={{
                    fontFamily: "poppins semi",
                    fontSize: "14px",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                  key={letter.letter}
                  onClick={() => setSelectedAlphabet(letter.letter)}
                  className={selectedAlphabet === letter ? "active" : ""}
                >
                  {letter.letter}
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
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
                      backgroundColor:
                        selectedItem && selectedItem.uuid === item.uuid
                          ? "#E3F2E1"
                          : (theme) =>
                              theme.palette.mode === "dark"
                                ? "#1A2027"
                                : "#fff",
                      // color:
                      //   selectedItem && selectedItem.uuid === item.uuid
                      //     ? "#59B04B"
                      //     : (theme) => theme.palette.text.secondary,
                      // ...theme.typography.body2,
                      fontFamily: "poppins regular",
                      fontSize: "14px",
                      fontWeight: 500,
                      padding: theme.spacing(1.5),
                      height: "32px",
                    }}
                  >
                    {item.display}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </CardContent>
        <Pagination
          count={Math.ceil(parameters?.count / parameters?.pageSize)}
          // count={parameters.count}
          // count={50}
          // page={currentPage}
          page={parameters.page}
          onChange={handlePageChange}
        />
      </Card>
    </>
  );
};

export default Search;
