import React from "react";
import AppFooter from "../AppLayout/AppFooter";
import AppTitle from "../AppLayout/AppTitle";
import Browse from "../Browse";
import Env from "../../utils/Services/Env";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Input,
  InputAdornment,
  // Select,
  // MenuItem,
  Card,
  CardContent,
  // Divider,
  Pagination,
  Box,
  Grid,
  Paper,
} from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "../../Assets/css/Search.css";
import "../../Assets/css/AlphabetFilter.css";
import "../../Assets/css/Pagination.css";
import "../../Assets/css/PaginationStyle.css";
import Container from '@mui/material/Container';
import Searchimg from "../../Assets/Static/banner-search.svg";

class Procedures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parameters: {
        count: 50,
        speciality: "",
        filterbyalphabet: "",
        page: 0,
        pageSize: 15,
      },
      procedureDatas: [],
      procedureOptions: [],
      specialtyData: [],
      alphabets: [],
      procedureName: "",
      selectedAlphabet: "All",
      searchClose: false,
      optionDisplay: false,
      selectedItem: "",
    };
  }

  componentDidMount() {
    // this.allSpecialties();
    this.getAllProcedureData();
    // this.filteredItems();
  }

  allSpecialties = () => {
    const getSpecialities = Env.get("speciality/list");

    getSpecialities.then(
      (res) => {
        const specialtiesData = res.data.specialities;
        const DefaultVal = {
          uuid: "ffbc61e5-92dd-405f-8c38-c26b0sdjhjjk",
          display: "All Specialities",
        };

        const specialties = [DefaultVal, ...specialtiesData];

        this.setState({
          specialtyData: specialties,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  selectedAlphabet = (data) => {
    this.setState(
      {
        selectedAlphabet: data,
      },
      () => {
        this.getAllProcedureData("", this.state.selectedAlphabet);
      }
    );
  };

  handleProcedureItemClick = (item) => {
    console.log("Item", item);
  };

  handlePageChange = (event, value) => {
    this.getAllProcedureData(value);
  };

  getAllProcedureData = (pageNo, alphabet) => {
    // console.log("page", pageNo);
    // console.log("alphabet", alphabet);
    // console.log("this.state.procedureName", this.state.procedureName);

    if (this.state.optionDisplay) {
      this.setState({
        optionDisplay: false,
      });
    }

    alphabet =
      this.state.selectedAlphabet !== "All" && alphabet !== undefined
        ? this.state.selectedAlphabet
        : alphabet === undefined
        ? this.state.selectedAlphabet
        : alphabet;

    let url = `procedure/list?`;

    if (this.state.procedureName !== "" && alphabet === "" && pageNo !== "") {
      // console.log("1");
      url = `${url}q=${this.state.procedureName}&filterbyalphabet=${
        alphabet === "" ? "all" : alphabet
      }&page=${pageNo === undefined ? 1 : pageNo}&pageSize=30`;
    } else if (
      this.state.procedureName === "" &&
      alphabet !== "" &&
      pageNo !== "" &&
      alphabet !== "All"
    ) {
      // console.log("2");
      url = `${url}q=&filterbyalphabet=${alphabet}&page=${pageNo}&pageSize=30`;
    } else if (
      this.state.procedureName === "" &&
      alphabet === "All" &&
      pageNo !== ""
    ) {
      // console.log("3");
      url = `${url}q=&filterbyalphabet=all&page=${
        pageNo === undefined ? "1" : pageNo
      }&pageSize=30`;
    } else if (
      this.state.procedureName === "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo === ""
    ) {
      // console.log("4");
      url = `${url}q=&filterbyalphabet=${alphabet}&page=1&pageSize=30`;
    } else if (
      this.state.procedureName !== "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo === ""
    ) {
      // console.log("5");
      url = `${url}q=${this.state.procedureName}&filterbyalphabet=${alphabet}&page=1&pageSize=30`;
    } else if (
      this.state.procedureName !== "" &&
      alphabet !== "" &&
      pageNo !== ""
    ) {
      // console.log("6");
      url = `${url}q=${this.state.procedureName}&filterbyalphabet=all&page=${
        pageNo === undefined ? "1" : pageNo
      }&pageSize=30`;
    } else if (
      this.state.procedureName !== "" &&
      alphabet !== "All" &&
      pageNo === ""
    ) {
      // console.log("7");
      url = `${url}q=${this.state.procedureName}&filterbyalphabet=${
        alphabet !== "All" ? "all" : alphabet
      }&page=1&pageSize=30`;
    } else if (
      this.state.procedureName !== "" &&
      alphabet === "All" &&
      pageNo === ""
    ) {
      // console.log("8");
      url = `${url}q=${this.state.procedureName}&filterbyalphabet=all&page=1&pageSize=30`;
    } else {
      // console.log("9");
      url = `${url}q=&page=1&pageSize=30`;
    }

    const getProcedureData = Env.get(url);

    getProcedureData.then(
      (res) => {
        const data = res.data;
        this.setState({
          alphabets: data.parameters.alphabets,
          parameters: data.parameters,
          procedureDatas: data.results,
          selectedAlphabet:
            data.parameters.filterbyalphabet === "all"
              ? "All"
              : data.parameters.filterbyalphabet,
        });

        // const specialtiesData = res.data.specialities;
        // const DefaultVal = {
        //   uuid: "ffbc61e5-92dd-405f-8c38-c26b0sdjhjjk",
        //   display: "All Specialities",
        // };

        // const specialties = [DefaultVal, ...specialtiesData];

        // this.setState({
        //   specialtyData: specialties,
        // });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  procedureValue = (e) => {
    this.setState({
      procedureName: e.target.value,
      optionDisplay: e.target.value.length > 2 ? true : false,
    });
    if (e.target.value.length > 0) {
      this.setState({
        searchClose: true,
      });
    } else {
      this.setState({
        searchClose: false,
      });
    }

    if (e.target.value.length > 2) {
      const getSearchProcedure = Env.get(
        `procedure/autocomplete?q=${e.target.value}`
      );

      getSearchProcedure.then(
        (response) => {
          this.setState({
            procedureOptions: response.data.suggession,
            optionDisplay: true,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  handleProcedureOptionClick = (option) => {
    this.setState({
      procedureName: option.data,
      optionDisplay: false,
    });
  };

  clearAll = () => {
    this.setState(
      {
        procedureName: "",
        searchClose: false,
        optionDisplay: false,
        selectedAlphabet: "All",
      },
      () => {
        this.getAllProcedureData("1", "All");
      }
    );
  };

  render() {
    return (
      <>
        <AppTitle value={false} />
        <div style={{ backgroundColor: "#F5F5F5", width: "100%" }}>
          <Container className="container-common">
            <Browse selectTab={0}></Browse>
            <div className="input-container__search">
              <Input
               id="banner-input"
                className="inputField"
                disableUnderline
                placeholder="Enter procedure or code"
                value={this.state.procedureName}
                onChange={(e) => this.procedureValue(e)}
                startAdornment={
                  <InputAdornment sx={{ paddingLeft: "6px" }} position="start">
                   <img src={Searchimg} alt="search" style={{width:'100%'}}/>
                  </InputAdornment>
                }
                endAdornment={
                  this.state.searchClose ? (
                    <Button onClick={() => this.clearAll()} type="submit">
                      <CloseIcon sx={{ color: "#59B04B", fontStyle: "none" }} />
                    </Button>
                  ) : (
                    ""
                  )
                }
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    this.getAllProcedureData();
                  }
                }}
              />
              {this.state.procedureOptions.length > 0 &&
              this.state.optionDisplay ? (
                <List
                  sx={{
                    fontFamily: "poppins regular",
                    position: "absolute",
                    top: "230px",
                    backgroundColor: "#f5f5f5",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #ccc",
                    borderTop: "none",
                    // borderRadius: "0 0 5px 5px",
                    borderRadius: "22px",
                    maxHeight: "150px",
                    overflowY: "auto",
                    color: "#000",
                    width: "1000px",
                  }}
                >
                  {this.state.procedureOptions?.map((option, index) => (
                    <ListItem
                      sx={{ fontFamily: "poppins regular" }}
                      key={index}
                      button
                      onClick={() => this.handleProcedureOptionClick(option)}
                    >
                      <ListItemText primary={option.data} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                ""
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
              className="search-ppp-pages"               
                onClick={() => this.getAllProcedureData()}
              >
                Search
              </Button>
            </div>
            <div className="search-result__content">
              <div className="alphabet-search">
                <Card
                  variant="outlined"
                  className="card-listing__bottomHandler"
                >
                  <CardContent>
                    <button
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                      onClick={() => this.selectedAlphabet("All")}
                      className={
                        this.state.selectedAlphabet === "All" ? "active" : ""
                      }
                    >
                      ALL
                    </button>
                    {this.state.alphabets.map((letter) => (
                      <button
                        style={{
                          fontSize: "14px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                        key={letter.letter}
                        onClick={() => this.selectedAlphabet(letter.letter)}
                        className={
                          this.state.selectedAlphabet === letter.letter
                            ? "active"
                            : ""
                        }
                      >
                        {letter.letter}
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>

          <div style={{ background: "#fff" }}>
            <Container className="container-common">
              <Card variant="outlined" className="card-listing__topHandler">
                <CardContent>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      {this.state.procedureDatas.map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                          <Paper
                            key={index}
                            onClick={() => this.handleProcedureItemClick(item)}
                            sx={{
                              "&:hover": {
                                backgroundColor: "#E3F2E1",
                                color: "#59B04B",
                              },
                              border: "1px solid #dadada",
                              borderRadius: "4px",
                              backgroundColor: "#fff",
                              fontFamily: "poppins regular",
                              fontSize: "14px",
                              fontWeight: 500,
                              height: "44px",
                              display: "flex",
                              flexWrap: "wrap",
                              padding: "12px",
                              letterSpacing: "0.01071em",
                              lineHeight: 1.43,
                              transition: "box-shadow 300ms",
                              boxShadow:
                                "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
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
                  count={Math.ceil(
                    this.state.parameters?.count /
                      this.state.parameters?.pageSize
                  )}
                  page={this.state.parameters?.page}
                  onChange={this.handlePageChange}
                />
              </Card>
            </Container>
          </div>
        </div>
        <AppFooter value={false} />
      </>
    );
  }
}

export default Procedures;
