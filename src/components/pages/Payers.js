import React from "react";
import AppTitle from "../AppLayout/AppTitle";
import AppFooter from "../AppLayout/AppFooter";
import Browse from "../Browse";
import Env from "../../utils/Services/Env";
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
import Container from '@mui/material/Container';
import Searchimg from "../../Assets/Static/banner-search.svg";

class Payers extends React.Component {
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
      statesList: [],
      payerData: [],
      payerOptions: [],
      statesData: [],
      alphabets: [],
      payerName: "",
      stateName: "",
      hospitalName: "",
      selectedAlphabet: "All",
      searchClose: false,
      optionDisplay: false,
      selectedItem: "",
    };
  }

  componentDidMount() {
    this.getAllStates();
    this.getAllPayerData();
  }

  payerValue = (e) => {
    this.setState({
      payerName: e.target.value,
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
      // const getSearchPayer = Env.get(`payer/autocomplete?q=${e.target.value}`);

      // getSearchPayer.then(
      //   (response) => {
      //     this.setState({
      //       payerOptions: response.data.suggession,
      //       optionDisplay: true,
      //     });
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );

      let sampleDAta = [
        { uuid: 1, name: "Absolute Total Care of SC" },
        { uuid: 2, name: "Aetna" },
        { uuid: 3, name: "Aetna Better Health Florida of FL" },
        { uuid: 4, name: "Aetna of AK" },
        { uuid: 5, name: "Aetna of AL" },
        { uuid: 6, name: "Aetna of AR" },
        { uuid: 7, name: "Aetna of AZ" },
        { uuid: 8, name: "Aetna of CA" },
        { uuid: 9, name: "Aetna of CO" },
        { uuid: 10, name: "Aetna of CT" },
        { uuid: 11, name: "Aetna of DC" },
        { uuid: 12, name: "Aetna of DE" },
        { uuid: 13, name: "Aetna of Fl" },
        { uuid: 14, name: "Aetna of FL" },
        { uuid: 15, name: "Aetna of GA" },
        { uuid: 16, name: "Aetna of IA" },
        { uuid: 17, name: "Aetna of ID" },
        { uuid: 18, name: "Aetna of IL" },
        { uuid: 19, name: "Aetna of IN" },
        { uuid: 20, name: "Aetna of KC" },
        { uuid: 21, name: "Aetna of KS" },
        { uuid: 22, name: "Aetna of KY" },
        { uuid: 23, name: "Aetna of LA" },
        { uuid: 24, name: "Aetna of MA" },
        { uuid: 25, name: "Aetna of MD" },
        { uuid: 26, name: "Aetna of ME" },
        { uuid: 27, name: "Aetna of MI" },
        { uuid: 28, name: "Aetna of MN" },
        { uuid: 29, name: "Aetna of MO" },
        { uuid: 30, name: "Aetna of MO,IL" },
        { uuid: 31, name: "Aetna of MS" },
        { uuid: 32, name: "Aetna of NC" },
        { uuid: 33, name: "Aetna of NC,SC" },
        { uuid: 34, name: "Aetna of ND" },
        { uuid: 35, name: "Aetna of NE" },
        { uuid: 36, name: "Aetna of TX" },
        { uuid: 37, name: "Aetna of UT" },
        { uuid: 38, name: "Aetna of VA" },
        { uuid: 39, name: "Aetna of WA" },
        { uuid: 40, name: "Aetna of WI" },
        { uuid: 41, name: "Aetna of WV" },
        { uuid: 42, name: "Affinity of NY" },
        { uuid: 43, name: "Ageright Advantage" },
        { uuid: 44, name: "AgeRight Advantage of OR" },
        { uuid: 45, name: "AgeWell of NY" },
        { uuid: 46, name: "AHF of CA" },
        { uuid: 47, name: "AHF of FL" },
        { uuid: 48, name: "Alignment Health Plan" },
        { uuid: 49, name: "Alignment Health Plan of CA" },
        { uuid: 50, name: "Alignment Health Plan of TX" },
        { uuid: 51, name: "Align Senior Care of CA" },
        { uuid: 52, name: "Align Senior Care of MI" },
        { uuid: 53, name: "Align Senior Care of VA" },
        { uuid: 54, name: "Allegiance Direct Network" },
        { uuid: 55, name: "Allegiance of MT" },
        { uuid: 56, name: "BCBS of AL" },
        { uuid: 57, name: "BCBS of AR" },
        { uuid: 58, name: "BCBS of AZ" },
        { uuid: 59, name: "BCBS" },
        { uuid: 60, name: "BCBS of FL" },
        { uuid: 61, name: "CalOptima of CA" },
        { uuid: 62, name: "CalViva Health of CA" },
        { uuid: 63, name: "Cambia Health Solutions" },
        { uuid: 64, name: "Cambia Health Solutions of OR" },
        {
          uuid: 65,
          name: "California Department of Health Care Services of CA",
        },
        { uuid: 66, name: "Davis Vision" },
        { uuid: 67, name: "Decent" },
        { uuid: 68, name: "Delta Dental" },
        { uuid: 69, name: "Delta Dental of NY" },
        { uuid: 70, name: "Dental Health Alliance of NY" },
        { uuid: 71, name: "Eastpointe of NC" },
        { uuid: 72, name: "Eddy Senior Care of NY" },
        { uuid: 73, name: "Edlerwood Health Plan of NY" },
        { uuid: 74, name: "Elderplan of NY" },
        { uuid: 75, name: "EmblemHealth" },
        { uuid: 76, name: "Fallon Health of MA" },
        { uuid: 77, name: "Fallon Health Weinberg of NY" },
        { uuid: 78, name: "Fidelis Care" },
        { uuid: 79, name: "Fidelis Care of NY" },
        { uuid: 80, name: "Fidelis Care of OH" },
        { uuid: 81, name: "Fidelity Security Life Insurance of NY" },
        { uuid: 82, name: "Gateway Health Medicare Assured of PA" },
        { uuid: 83, name: "Hamaspik Choice of NY" },
        { uuid: 84, name: "ICare" },
        { uuid: 85, name: "John Hopkins Advantage MD" },
        { uuid: 86, name: "Kaiser Foundation Health Plan of Washington" },
        { uuid: 87, name: "L.A. Care Health Plan of CA" },
        { uuid: 88, name: "Magellan" },
        { uuid: 89, name: "Nascentia Health Plus of NY" },
        { uuid: 90, name: "of IL" },
        { uuid: 91, name: "PACE CNY of NY" },
        { uuid: 92, name: "QualCare of NJ" },
        { uuid: 93, name: "Regence BlueCross BlueShield" },
        { uuid: 94, name: "Sanford Health Plan of ND" },
        { uuid: 95, name: "test of VA" },
        { uuid: 96, name: "Ucare" },
        { uuid: 97, name: "Valley Health Plan of CA" },
        { uuid: 98, name: "WellCare" },
        { uuid: 99, name: "YourCare of NY" },
        { uuid: 100, name: "Zing Health" },
      ];

      this.setState({
        payerOptions: sampleDAta,
        optionDisplay: true,
      });
      // const states_US = [
      //   "None",
      //   "Alabama",
      //   "Alaska",
      //   "Arizona",
      //   "Arkansas",
      //   "California",
      //   "Colorado",
      //   "Connecticut",
      //   "Delaware",
      //   "District of Columbia",
      //   "Florida",
      //   "Georgia",
      //   "Hawaii",
      //   "Idaho",
      //   "Illinois",
      //   "Indiana",
      //   "Iowa",
      //   "Kansas",
      //   "Kentucky",
      //   "Louisiana",
      //   "Maine",
      //   "Montana",
      //   "Nebraska",
      //   "Nevada",
      //   "New Hampshire",
      //   "New Jersey",
      //   "New Mexico",
      //   "New York",
      //   "North Carolina",
      //   "North Dakota",
      //   "Ohio",
      //   "Oklahoma",
      //   "Oregon",
      //   "Maryland",
      //   "Massachusetts",
      //   "Michigan",
      //   "Minnesota",
      //   "Mississippi",
      //   "Missouri",
      //   "Pennsylvania",
      //   "Rhode Island",
      //   "South Carolina",
      //   "South Dakota",
      //   "Tennessee",
      //   "Texas",
      //   "Utah",
      //   "Vermont",
      //   "Virginia",
      //   "Washington",
      //   "West Virginia",
      //   "Wisconsin",
      //   "Wyoming",
      // ];
    }
  };

  getAllPayerData = (pageNo, alphabet, state) => {
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
      (this.state.stateName !== "All States" ||
        this.state.stateName !== "None") &&
        state !== undefined
        ? this.state.stateName === "None"
          ? "all"
          : this.state.stateName
        : state === undefined
          ? this.state.stateName === "None"
            ? "all"
            : this.state.stateName
          : state;

    let url = `payer/list?`;

    // console.log("pageNo", pageNo);
    // console.log("alphabet", alphabet);
    // console.log("this.state.payerName", this.state.payerName);
    // console.log("this.state.stateName", this.state.stateName);
    // console.log("state", state);

    if (
      this.state.payerName !== "" &&
      alphabet === "" &&
      pageNo !== "" &&
      state === "All States"
    ) {
      // console.log("1");
      url = `${url}q=${this.state.payerName
        }&state=${state}&filterbyalphabet=all&page=${pageNo === undefined ? 1 : pageNo
        }&pageSize=30`;
    } else if (
      this.state.payerName === "" &&
      alphabet !== "" &&
      pageNo !== "" &&
      alphabet !== "All" &&
      state !== "All States"
    ) {
      // console.log("2");
      url = `${url}q=&state=${state}&filterbyalphabet=${alphabet}&page=${pageNo}&pageSize=30`;
    } else if (
      this.state.payerName === "" &&
      alphabet === "All" &&
      pageNo !== "" &&
      state !== "All States"
    ) {
      // console.log("3");
      url = `${url}q=&state=${state}&filterbyalphabet=all&page=${pageNo === undefined ? "1" : pageNo
        }&pageSize=30`;
    } else if (
      this.state.payerName === "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo === "" &&
      state !== "All States"
    ) {
      // console.log("4");
      url = `${url}q=&state=${state}&filterbyalphabet=${alphabet}&page=1&pageSize=30`;
    } else if (
      this.state.payerName === "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo === "" &&
      state === "All States"
    ) {
      // console.log("5");
      url = `${url}q=&state=all&filterbyalphabet=${alphabet}&page=1&pageSize=30`;
    } else if (
      this.state.payerName !== "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo === "" &&
      state !== "" &&
      state !== "All States"
    ) {
      // console.log("6");
      url = `${url}q=${this.state.payerName}&state=${state}&filterbyalphabet=${alphabet}&page=1&pageSize=30`;
    } else if (
      this.state.payerName !== "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo === "" &&
      state === "All States"
    ) {
      // console.log("7");
      url = `${url}q=${this.state.payerName}&state=&filterbyalphabet=${alphabet}&page=1&pageSize=30`;
    } else if (
      this.state.payerName !== "" &&
      alphabet !== "" &&
      pageNo !== "" &&
      state === "All States"
    ) {
      // console.log("8");
      url = `${url}q=${this.state.payerName}&state=all&filterbyalphabet=all&page=${pageNo}&pageSize=30`;
    } else if (
      this.state.payerName !== "" &&
      alphabet !== "All" &&
      pageNo === "" &&
      state !== "" &&
      state !== "All States"
    ) {
      // console.log("9");
      url = `${url}q=${this.state.payerName}&state=${state}filterbyalphabet=${alphabet !== "All" ? "all" : alphabet
        }&page=1&pageSize=30`;
    } else if (
      this.state.payerName !== "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo === "" &&
      state === "All States"
    ) {
      // console.log("10");
      url = `${url}q=${this.state.payerName}&state=all&filterbyalphabet=${alphabet}&page=1&pageSize=30`;
    } else if (
      this.state.payerName !== "" &&
      alphabet === "All" &&
      pageNo === undefined &&
      state !== "All States"
    ) {
      // console.log("11");
      url = `${url}q=${this.state.payerName}&state=${state}&filterbyalphabet=all&page=1&pageSize=30`;
    } else if (
      this.state.payerName === "" &&
      alphabet === "All" &&
      pageNo !== "" &&
      pageNo !== undefined &&
      state === "All States"
    ) {
      // console.log("12");
      url = `${url}q=${this.state.payerName}&state=all&filterbyalphabet=all&page=${pageNo}&pageSize=30`;
    } else if (
      this.state.payerName === "" &&
      alphabet === "All" &&
      pageNo === "" &&
      state !== "All States" &&
      state !== ""
    ) {
      // console.log("13");
      url = `${url}q=&state=${state}&filterbyalphabet=all&page=1&pageSize=30`;
    } else if (
      this.state.payerName !== "" &&
      alphabet === "All" &&
      pageNo === "" &&
      state === "All States"
    ) {
      // console.log("14");
      url = `${url}q=${this.state.payerName}&state=all&filterbyalphabet=all&page=1&pageSize=30`;
    } else if (
      this.state.payerName === "" &&
      alphabet !== "All" &&
      alphabet !== "" &&
      pageNo !== "" &&
      pageNo !== undefined &&
      state === "All States"
    ) {
      // console.log("15");
      url = `${url}q=&state=all&filterbyalphabet=${alphabet}&page=${pageNo}&pageSize=30`;
    } else if (
      this.state.payerName !== "" &&
      alphabet === "All" &&
      pageNo === "" &&
      pageNo !== undefined &&
      state !== "All States" &&
      state !== ""
    ) {
      // console.log("16");
      url = `${url}q=${this.state.payerName}&state=${state}&filterbyalphabet=all&page=1&pageSize=30`;
    } else {
      // console.log("17");
      url = `${url}q=&state=all&filterbyalphabet=all&page=1&pageSize=30`;
    }

    const getPayerData = Env.get(url);

    getPayerData.then((response) => {
      const getData = response.data;
      this.setState({
        payerData: getData.results,
        alphabets: getData.parameters.alphabets,
        parameters: getData.parameters,
        selectedAlphabet:
          getData.parameters.filterbyalphabet === "all"
            ? "All"
            : getData.parameters.filterbyalphabet,
      });
    });
  };

  getAllStates = () => {
    const getAllStateData = Env.get("location/states");

    getAllStateData.then(
      (response) => {
        const getStatesVal = response.data.states;
        let addAll = { code: "All States", display: "All States" };
        let addNone = { code: "None", display: "None" };
        let allState = [addAll, ...getStatesVal];
        let allStates = [...allState, addNone];
        this.setState(
          {
            statesList: allStates,
          },
          () => {
            if (this.state.statesList.length > 0) {
              this.setState({
                stateName:
                  this.state.statesList[this.state.statesList.length - 1].code,
              });
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
        this.getAllPayerData("", "", this.state.stateName);
      }
    );
  };

  handlePayerOptionClick = (option) => {
    this.setState({
      payerName: option.data,
      optionDisplay: false,
    });
  };

  handlePayerItemClick = (item) => {
    console.log("Item", item);
    // setSelectedItem(item.display);
    // setSpecialityValue(item.display);
    // searchPayer(item.display);
    // navigate("/comingSoon");
  };

  selectedPayerAlphabet = (data) => {
    this.setState(
      {
        selectedAlphabet: data,
      },
      () => {
        this.getAllPayerData("", this.state.selectedAlphabet);
      }
    );
  };

  handlePageChange = (event, value) => {
    this.getAllPayerData(value);
  };

  clearAll = () => {
    this.setState(
      {
        payerName: "",
        searchClose: false,
        optionDisplay: false,
        selectedAlphabet: "All",
        stateName: "None",
      },
      () => {
        this.getAllPayerData("1", "All");
      }
    );
  };

  render() {
    return (
      <>
        <AppTitle value={false} />
        <div style={{ backgroundColor: "#F5F5F5", width: "100%" }}>
          <Container className="container-common">
            <Browse selectTab={2} />
            <div className="input-container__search">
              <Input
               id="banner-input"
                sx={{ width: "700px" }}
                disableUnderline
                placeholder="Enter a payer name..."
                value={this.state.payerName}
                onChange={(e) => this.payerValue(e)}
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
                    this.getAllPayerData();
                  }
                }}
              />
              {this.state.payerOptions.length > 0 && this.state.optionDisplay ? (
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
                  {this.state.payerOptions?.map((option, index) => (
                    <ListItem
                      sx={{ fontFamily: "poppins regular" }}
                      key={index}
                      button
                      onClick={() => this.handlePayerOptionClick(option)}
                    >
                      <ListItemText primary={option.display} />
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
                {this.state.statesList?.map((item, index) => (
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
                onClick={() => this.getAllPayerData()}
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
                      onClick={() => this.selectedPayerAlphabet("All")}
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
                        onClick={() => this.selectedPayerAlphabet(letter.letter)}
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
              <Card
                variant="outlined"
                className="card-listing__topHandler"                
              >
                <CardContent>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      {this.state.payerData.length > 0 ? (
                        this.state.payerData.map((item, index) => (
                          <Grid item xs={2} sm={4} md={4} key={index}>
                            <Paper
                              key={item.npi}
                              onClick={() => this.handlePayerItemClick(item)}
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
                {this.state.payerData.length > 0 ? (
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

export default Payers;
