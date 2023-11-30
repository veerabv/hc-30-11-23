import { Grid } from "@mui/material";
import React from "react";
import AppTitle from "../AppLayout/AppTitle";
import { Box, Input, Divider, Button, Select, MenuItem } from "@mui/material";
import Autocomplete from "@mui/joy/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import AppFooter from "../AppLayout/AppFooter";
// import "../../Assets/css/Search.css";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../Assets/css/PaginationStyle.css";

class ProcedureSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      top100Films: [],
      data: [],
      pageCount: 0,
      currentPage: 1,
      pageSize: 15,
    };

    // this.isEdit = window.location.href.includes("edit");
  }
  componentDidMount() {
    this.getData();
    this.setState({
      top100Films: [
        { label: "Manhattan", year: 1994 },
        { label: "Brooklyn", year: 1972 },
        { label: "Queens", year: 1974 },
        { label: "yonkers", year: 2008 },
        { label: "bronx", year: 1957 },
        { label: "Utica", year: 1993 },
        { label: "Syracuse", year: 1994 },
      ],
    });
  }

  // getData = () => {
  //   let url = "service/search?q=term&service_name=term&location=term";

  //   const getData = Env.get(url);

  //   getData.then(
  //     (response) => {
  //       const data = response.data.results;
  //       this.setState({
  //         data: data,
  //       });
  //       // console.log("data", data);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // };

  getData = () => {
    const data = {
      status: 200,
      count: 1,
      page: 1,
      pageSize: 15,
      results: [
        {
          service: {
            uuid: 1,
            code: 99397,
            name: "Periodic Primary Re-Evaluation Patient 65 And Other",
          },
          location: {
            uuid: 1,
            name: "NYU LANGLONE TISCH",
            address: "550 First Avenue, New York, NY, 10016",
          },
          cashPrice: {
            min: 0.0,
            avg: 356.12,
            max: 0.0,
          },
          distance: 0,
        },
        {
          service: {
            uuid: 2,
            code: 99348,
            name: "Periodic Primary Re-Evaluation Patient 65 And Other",
          },
          location: {
            uuid: 2,
            name: "HHC Bellevue Hospital Center",
            address: "462 First Avenue, New York, NY, 10016",
          },
          cashPrice: {
            min: 0.0,
            avg: 297.42,
            max: 0.0,
          },
          distance: 0,
        },
        {
          service: {
            uuid: 3,
            code: 99348,
            name: "Periodic Primary Re-Evaluation Patient 65 And Other",
          },
          location: {
            uuid: 3,
            name: "NYU Langone Orthopedic Hospital",
            address: "301 E 17th St, New York, NY, 10003",
          },
          cashPrice: {
            min: 0.0,
            avg: 152.44,
            max: 0.0,
          },
          distance: 0,
        },
      ],
    };
    this.setState({
      data: data.results,
      pageCount: data.count,
      pageSize: data.pageSize,
    });
  };

  handleChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  render() {
    return (
      <Grid>
        <AppTitle value={false} />
        <Grid container sx={{ backgroundColor: "#F5F5F5", minHeight: "266px" }}>
          {/* Welcome to Procedure search */}
          <Grid item sm={12}>
            <Box
              sx={{
                margin: "auto",
                backgroundColor: "#fff",
                width: "1300px",
                height: "80px",
                borderRadius: "41px",
                display: "flex",
                marginTop: "50px",
              }}
            >
              <Input
                id="input-with-icon-textfield"
                style={{ color: "#000", fontWeight: "bold" }}
                sx={{
                  marginTop: "2px",
                  paddingLeft: "34px",
                  border: "none",
                  color: "#000",
                  width: "763px",
                  //"&::placeholder": {
                  //color: "red", // Change the color to your desired color
                  //},
                  display: "flex",
                }}
                disableUnderline
                placeholder="Enter service name or Code..."
                // label="TextField"
                // InputProps={{
                startAdornment={
                  <InputAdornment position="start" sx={{ color: "#000" }}>
                    <SearchIcon />
                  </InputAdornment>
                }
              />
              <Divider
                orientation="vertical"
                sx={{ marginTop: "23px", height: "30px", color: "#000" }}
              />
              <Autocomplete
                style={{ color: "#000", fontWeight: "bold", border: "none" }}
                sx={{
                  marginTop: "2px",
                  marginLeft: "34px",
                  color: "#000",
                  width: "600px",
                  "&:focus": {
                    outline: "none", // Remove the default focus outline if needed
                    backgroundColor: "none", // Set your focused highlight style
                  },
                }}
                startDecorator={<FmdGoodOutlinedIcon sx={{ color: "#000" }} />}
                placeholder="Enter Location"
                options={this.state.top100Films}
              />
              <Button
                sx={{
                  //   marginLeft: "20px",
                  width: "200px",
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#000",
                  },
                  borderTopRightRadius: "41px",
                  borderBottomRightRadius: "41px",
                  textTransform: "none",
                  fontSize: "23px",
                }}
              >
                Search
              </Button>
            </Box>
          </Grid>
          <Grid container sx={{ margin: "auto", width: "1300px" }}>
            <Grid item sm={0.7}>
              <p style={{ fontSize: "24px" }}>Filter</p>
            </Grid>
            <Grid item sm={3.7} sx={{ marginTop: "20px" }}>
              <Select
                sx={{
                  width: "380px",
                  height: "45px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  // borderColor: "transparent",
                  // border: "none",
                }}
                value={this.state.age === "" ? 1 : this.state.age}
                onChange={this.handleChange}
              >
                <MenuItem value={1} style={{ display: "none" }}>
                  Filtering by Service
                </MenuItem>
                <MenuItem value={2}>All Services</MenuItem>
              </Select>
            </Grid>
            <Grid item sm={3.7} sx={{ marginTop: "20px" }}>
              <Select
                sx={{
                  width: "380px",
                  height: "45px",
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "10px",
                }}
                value={this.state.age === "" ? 1 : this.state.age}
                onChange={this.handleChange}
              >
                <MenuItem value={1} style={{ display: "none" }}>
                  Medicare Care Quality
                </MenuItem>
                <MenuItem value={2}>Any Rating</MenuItem>
                <MenuItem value={3}>5-starts</MenuItem>
                <MenuItem value={4}>4-starts and above</MenuItem>
                <MenuItem value={5}>3-starts and above</MenuItem>
                <MenuItem value={6}>2-starts and above</MenuItem>
                <MenuItem value={7}>1-start and above</MenuItem>
              </Select>
            </Grid>
            <Grid item sm={3.7} sx={{ marginTop: "20px" }}>
              <Select
                sx={{
                  width: "380px",
                  height: "45px",
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "10px",
                }}
                value={this.state.age === "" ? 1 : this.state.age}
                onChange={this.handleChange}
              >
                <MenuItem value={1} style={{ display: "none" }}>
                  Verified Provider
                </MenuItem>
                <MenuItem value={2}>Any Status</MenuItem>
                <MenuItem value={3}>Verified</MenuItem>
                <MenuItem value={3}>Not Verified</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            margin: "auto",
            width: "1290px",
          }}
        >
          <Grid
            item
            sm={8}
            sx={{
              marginTop: "20px",
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "inter regular",
            }}
          >
            <p>
              97 Results of HCPCS 99397 | Periodic primary re-evaluation for an
              <br />
              established patient 65 and older
            </p>
          </Grid>

          <Grid
            item
            sm={4}
            sx={{
              marginTop: "40px",
              // width: "130px",
              // fontSize: "24px",
              // fontWeight: "bold",
              // fontFamily: "inter regular",
            }}
          >
            <Select
              placeholder="Sort by Pricing"
              sx={{
                width: "380px",
                height: "45px",
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "10px",
              }}
              value={this.state.age === "" ? 1 : this.state.age}
              onChange={this.handleChange}
            >
              <MenuItem value={1} style={{ display: "none" }}>
                Sort by Pricing
              </MenuItem>
              <MenuItem value={2}>High to Low</MenuItem>
              <MenuItem value={3}>Low to High</MenuItem>
            </Select>
          </Grid>

          {this.state.data?.map((item, index) => (
            <Grid
              key={index}
              item
              sm={12}
              sx={{
                marginTop: index === 0 ? "20px" : "15px",
                marginBottom:
                  this.state.data?.length - 1 === index ? "20px" : "0",
                backgroundColor: "#F5FAF5",
                minHeight: "190px",
                borderRadius: "9px",
                border: "1px solid #E3E3E3",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Grid
                container
                key={index}
                sx={{ marginTop: "2px", marginLeft: "28px" }}
              >
                <Grid item sm={10.8} sx={{ marginBottom: "20px" }}>
                  <p
                    style={{
                      fontFamily: "poppins light",
                      fontWeight: "bold",
                      marginBottom: 0,
                    }}
                  >
                    HCPCS {item.service.code}
                  </p>
                  <p
                    style={{
                      color: "#45A736",
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {item.service.name}
                  </p>
                </Grid>
                <Grid item sm={1.2}>
                  <p
                    style={{
                      color: "#45A736",
                      fontWeight: "500",
                      fontSize: "22px",
                      marginBottom: 0,
                    }}
                  >
                    ${item.cashPrice.avg.toFixed(2)}
                  </p>
                  <p style={{ marginTop: 0 }}>Cash Price</p>
                </Grid>
                <Grid
                  item
                  sm={11.5}
                  sx={{
                    backgroundColor: "#fff",
                    height: "75px",
                    border: "1px solid #E3E3E3",
                    borderRadius: "11px",
                  }}
                >
                  <Grid container sx={{ height: "75px" }}>
                    <Grid item sm={0.6} sx={{ height: "75px" }}>
                      <PlaceIcon
                        sx={{
                          color: "#45A736 !important",
                          width: "42px",
                          height: "68px",
                          alignItems: "center",
                          marginLeft: "14px",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      sm={9.6}
                      sx={{
                        height: "75px",
                        fontSize: "14px",
                        fontWeight: 600,
                        marginTop: "8px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#45A736",
                          fontWeight: 600,
                        }}
                      >
                        <u>{item.location.name}</u>
                      </p>
                      <p style={{ margin: 0 }}>{`${item.location.address.slice(
                        0,
                        item.location.address.lastIndexOf(",") - 12
                      )}`}</p>
                      <p style={{ margin: 0 }}>{`${item.location.address.slice(
                        item.location.address.lastIndexOf(",") - 12
                      )}`}</p>
                    </Grid>
                    <Grid item sm={1.8} sx={{ height: "75px" }}>
                      <Button
                        sx={{
                          backgroundColor: "#45A736",
                          color: "#fff",
                          textTransform: "none",
                          width: "160px",
                          mt: "17px",
                          "&:hover": {
                            backgroundColor: "#45A736",
                          },
                        }}
                      >
                        View Profile
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={this.state.pageCount}
          // count={Math.ceil(this.state.data.length / this.state.data.pageSize)}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                backgroundColor: item.selected ? "red" : "transparent",
                color: item.selected ? "black" : "inherit",
                "&:hover": {
                  backgroundColor: item.selected ? "#0056b3" : "#f0f0f0",
                },
              }}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
        <AppFooter value={false} />
      </Grid>
    );
  }
}

export default ProcedureSearch;
