import React from "react";
import AppTitle from "../AppLayout/AppTitle";
import Browse from "../Browse";
import AppFooter from "../AppLayout/AppFooter";
import Env from "../../utils/Services/Env";
import withRouter from "../Router/withRouter";



import {
  List,
  ListItem,
  ListItemText,
  Button,
  Input,
  InputAdornment,
  Select,
  MenuItem,
  Card,
  CardContent,
  Divider,
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
import Container from "@mui/material/Container";
import Searchimg from "../../Assets/Static/banner-search.svg";

class Providers extends React.Component {
  
 
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      parameters: {
        count: 50,
        speciality: "",
        filterbyalphabet: "",
        page: 0,
        pageSize: 15,
      },
      stateList: [],
      providerData: [],
      providerOptions: [],
      alphabets: [],
      stateName: "",
      providerName: "",
      hospitalName: "",
      selectedAlphabet: "All",
      searchClose: false,
      optionDisplay: false,
      selectedItem: "",
    };
  }
  

  componentDidMount() {
    this.getStates();
    this.getAllProviderData();

    // this.providerValue();
  }

  providerValue = (e) => {
    this.setState({
      providerName: e.target.value,
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
      const getSearchProvider = Env.get(
        `provider/name-autocomplete?q=${e.target.value}`
      );

      getSearchProvider.then(
        (response) => {
          this.setState({
            providerOptions: response.data.suggession,
            optionDisplay: true,
          });
          // setProvider(response.data.suggession);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  getAllProviderData = (pageNo, alphabet, state) => {
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
        : alphabet === ""
        ? "all"
        : alphabet;

    state =
      this.state.stateName !== "All" && state !== undefined
        ? this.state.stateName
        : state === undefined
        ? this.state.stateName
        : state;

    let url = `provider/list?`;

    // console.log("pageNo", pageNo);
    // console.log("alphabet", alphabet);
    // console.log("this.state.providerName", this.state.providerName);
    // console.log("this.state.stateName", this.state.stateName);
    // console.log("state", state);

    if (
      this.state.providerName !== "" &&
      alphabet === "" &&
      pageNo !== "" &&
      state === "All States"
    ) {
      // console.log("0");
      url = `${url}q=${
        this.state.providerName
      }&state=${state}&filterbyalphabet=${
        alphabet === "" ? "all" : alphabet
      }&page=${pageNo === undefined ? 1 : pageNo}&pageSize=30`;
    } else if (
      this.state.providerName === "" &&
      alphabet !== "" &&
      pageNo !== "" &&
      alphabet !== "All" &&
      state !== "All States"
    ) {
      // console.log("1");
      url = `${url}q=&state=${state}&filterbyalphabet=${alphabet}&page=${pageNo}&pageSize=30`;
    } else if (
      this.state.providerName === "" &&
      alphabet !== "" &&
      pageNo !== "" &&
      alphabet !== "All" &&
      state !== "All States"
    ) {
      // console.log("2");
      url = `${url}q=&state=${state}&filterbyalphabet=${alphabet}&page=${pageNo}&pageSize=30`;
    } else if (
      this.state.providerName === "" &&
      alphabet === "All" &&
      pageNo !== "" &&
      state !== "All States"
    ) {
      // console.log("3");
      url = `${url}q=&state=${state}&filterbyalphabet=all&page=${
        pageNo === undefined ? "1" : pageNo
      }&pageSize=30`;
    } else if (
      this.state.providerName === "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo === "" &&
      state === "All States"
    ) {
      // console.log("4");
      url = `${url}q=&state=all&filterbyalphabet=${alphabet}&page=1&pageSize=30`;
    } else if (
      this.state.providerName !== "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo === "" &&
      state === "All States"
    ) {
      // console.log("5");
      url = `${url}q=${this.state.providerName}&state=all&filterbyalphabet=${alphabet}&page=1&pageSize=30`;
    } else if (
      this.state.providerName !== "" &&
      alphabet !== "" &&
      pageNo !== "" &&
      state === "All States"
    ) {
      // console.log("6");
      url = `${url}q=${this.state.providerName}&state=all&filterbyalphabet=all&page=${pageNo}&pageSize=30`;
    } else if (
      this.state.providerName === "" &&
      alphabet !== "" &&
      alphabet !== "All" &&
      pageNo !== "" &&
      pageNo !== undefined &&
      state === "All States"
    ) {
      // console.log("7");
      url = `${url}q=&state=all&filterbyalphabet=${alphabet}&page=${pageNo}&pageSize=30`;
    } else if (
      this.state.providerName !== "" &&
      alphabet !== "All" &&
      pageNo === ""
    ) {
      // console.log("8");
      url = `${url}q=${this.state.providerName}&filterbyalphabet=${
        alphabet !== "All" ? "all" : alphabet
      }&page=1&pageSize=30`;
    } else if (
      this.state.providerName !== "" &&
      alphabet === "All" &&
      pageNo === ""
    ) {
      // console.log("9");
      url = `${url}q=${this.state.providerName}&filterbyalphabet=all&page=1&pageSize=30`;
    } else if (
      this.state.providerName !== "" &&
      alphabet === "All" &&
      pageNo === undefined &&
      state !== "All States"
    ) {
      // console.log("10");
      url = `${url}q=${this.state.providerName}&state=${state}&filterbyalphabet=all&page=1&pageSize=30`;
    } else if (
      this.state.providerName === "" &&
      alphabet === "All" &&
      pageNo !== "" &&
      pageNo !== undefined &&
      state === "All States"
    ) {
      // console.log("11");
      url = `${url}q=${this.state.providerName}&state=all&filterbyalphabet=all&page=${pageNo}&pageSize=30`;
    } else {
      // console.log("12");
      url = `${url}q=&state=all&filterbyalphabet=all&page=1&pageSize=30`;
    }

    const getProviderData = Env.get(url);

    getProviderData.then((response) => {
      const getData = response.data;
      this.setState({
        providerData: getData.results,
        alphabets: getData.parameters.alphabets,
        parameters: getData.parameters,
        selectedAlphabet:
          getData.parameters.filterbyalphabet === "all"
            ? "All"
            : getData.parameters.filterbyalphabet,
      });
    });
  };

  getStates = () => {
    const getAllStateData = Env.get("location/states");

    getAllStateData.then(
      (response) => {
        const getStatesVal = response.data.states;
        let addAll = { code: "All States", display: "All States" };
        let allStates = [addAll, ...getStatesVal];
        this.setState(
          {
            stateList: allStates,
          },
          () => {
            if (this.state.stateList.length > 0) {
              this.setState({ stateName: this.state.stateList[0].code });
            }
          }
        );
      },
      (err) => {
        console.error(err);
      }
    );
  };

  handleStateChange = (e) => {
    this.setState(
      {
        stateName: e.target.value,
      },
      () => {
        this.getAllProviderData("", "", this.state.stateName);
      }
    );
  };

  handleProviderOptionClick = (option) => {
    this.setState({
      providerName: option.data,
      optionDisplay: false,
    });
  };

  handleProviderItemClick = (item) => {
    
    console.log("Item", item);
     this.props.navigate(`/providerinfo/${item.display}`);  
    
    // setSelectedItem(item.display);
    // setSpecialityValue(item.display);
    // searchProvider(item.display);
    // navigate("/comingSoon");
  };

  selectedProviderAlphabet = (data) => {
    this.setState(
      {
        selectedAlphabet: data,
      },
      () => {
        this.getAllProviderData("", this.state.selectedAlphabet);
      }
    );
  };

  handlePageChange = (event, value) => {
    this.getAllProviderData(value);
  };

  clearAll = () => {
    this.setState(
      {
        providerName: "",
        searchClose: false,
        optionDisplay: false,
        selectedAlphabet: "All",
        stateName: "All States",
      },
      () => {
        this.getAllProviderData("1", "All");
      }
    );
  };

  render() {
    return (
      <>
        <AppTitle value={false} />
        <div style={{ backgroundColor: "#F5F5F5", width: "100%" }}>
          <Container className="container-common">
            <Browse selectTab={1} />
            <div className="input-container__search">
              <Input
               id="banner-input"
                sx={{ width: "700px" }}
                disableUnderline
                placeholder="Enter provider or hospital code..."
                value={this.state.providerName}
                onChange={(e) => this.providerValue(e)}
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
                    this.getAllProviderData();
                  }
                }}
              />
              {this.state.providerOptions.length > 0 &&
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
                    width: "800px",
                  }}
                >
                  {this.state.providerOptions?.map((option, index) => (
                    <ListItem
                      sx={{ fontFamily: "poppins regular" }}
                      key={index}
                      button
                      onClick={() => this.handleProviderOptionClick(option)}
                    >
                      <ListItemText primary={option.data} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                ""
              )}

              <Divider
                orientation="vertical"
                sx={{ marginTop: "3px", height: "30px", color: "#000" }}
              />
              <Select
                className="select-state"
                value={this.state.stateName}
                onChange={(e) => this.handleStateChange(e)}
                sx={{
                  height: "40px",
                  width: "269px",
                  fontFamily: "poppins regular",
                }}
              >
                {this.state.stateList?.map((item, index) => (
                  <MenuItem
                    sx={{ fontFamily: "poppins regular" }}
                    key={index}
                    value={item.code}
                    name={item.display}
                  >
                    {item.display}
                  </MenuItem>
                ))}
              </Select>
              <Button
                className="search-ppp-pages" 
                onClick={() => this.getAllProviderData()}
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
                      onClick={() => this.selectedProviderAlphabet("All")}
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
                        onClick={() =>
                          this.selectedProviderAlphabet(letter.letter)
                        }
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
                      {this.state.providerData.length > 0 ? (
                        this.state.providerData.map((item, index) => (
                          <Grid item xs={2} sm={4} md={4} key={index}>
                            <Paper
                              key={item.npi}
                              onClick={() => this.handleProviderItemClick(item)}
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
                              {item.display === null ? "NULL" : item.display}
                            </Paper>
                          </Grid>
                        ))
                      ) : (
                        <>
                          <Grid
                            item
                            xs={12}
                            sx={{ textAlign: "center", color: "#59B04B" }}
                          >
                            NO DATA FOUND
                          </Grid>
                        </>
                      )}
                    </Grid>
                  </Box>
                </CardContent>
                {this.state.providerData.length > 0 ? (
                  <Pagination
                    count={Math.ceil(
                      this.state.parameters?.count /
                        this.state.parameters?.pageSize
                    )}
                    page={this.state.parameters?.page}
                    onChange={this.handlePageChange}
                  />
                ) : (
                  ""
                )}
              </Card>
            </Container>
          </div>
        </div>
        <AppFooter value={false} />
      </>
    );
  }
}

export default withRouter(Providers);

