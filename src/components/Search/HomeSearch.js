/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React from "react";
import {
  Box,
  Input,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import Searchimg from "../../Assets/Static/banner-search.svg";
import "../../Assets/css/Search.css";
// import Autocomplete from "@mui/joy/Autocomplete";
// import LiveTv from "@mui/icons-material/LiveTv";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
// import { useNavigate } from "react-router-dom";
import withRouter from "../Router/withRouter";
import Env from "../../utils/Services/Env";

class HomeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      procedureName: "",
      providerName: "10003",
      procedureList: [],
      providerList: [],
      procedureOptions: false,
      providerOptions: false,
    };
  }

  componentDidMount() {
    // this.procedure();
    // this.provider();
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

  procedure = () => {
    const getProcedure = Env.get("procedure/autocomplete");

    getProcedure.then(
      (response) => {
        this.setState({
          procedureList: response.data.suggession,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  provider = () => {
    const getProvider = Env.get("provider/autocomplete");

    getProvider.then(
      (response) => {
        this.setState({
          providerList: response.data.suggession,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  procedureValue = (e) => {
    if (e.target.value.length > 2) {
      const getSearchProcedure = Env.get(
        `procedure/autocomplete?q=${e.target.value}`
      );

      getSearchProcedure.then(
        (response) => {
          // console.log("RESPONSE", response.data);
          this.setState({
            procedureList: response.data.suggession,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
    this.setState({
      procedureName: e.target.value,
      procedureOptions: e.target.value.length > 2 ? true : false,
    });
  };

  handleProcedureOptionClick = (option) => {
    this.setState({
      procedureName: option.data,
      procedureOptions: false,
    });
  };

  providerValue = (e) => {
    if (e.target.value.length > 2) {
      const getSearchProvider = Env.get(
        `provider/autocomplete?q=${e.target.value}`
      );

      getSearchProvider.then(
        (response) => {
          // console.log("RESPONSE", response.data);
          this.setState({
            providerList: response.data.suggession,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
    this.setState({
      providerName: e.target.value,
      providerOptions: e.target.value.length > 2 ? true : false,
    });
  };

  handleProviderOptionClick = (option) => {
    this.setState({
      providerName: option.data,
      providerOptions: false,
    });
    // setProcedureName(option.label);
    // setShowprocedureOptions(false);
  };

  // const locationValue = (e) => {
  //   console.log("e", e.target.value);
  //   // {  status: 200, suggession: [ data: '' ] }
  //   this.setState({
  //     locationName: e.target.value,
  //   });

  // };

  searchValue = () => {
    let searchUrl = `service/search?`;

    // if (this.state.procedureName === "" && this.state.providerName === "") {
    //   // toaster("Select any one option");
    //   // return;
    //   searchUrl = `${searchUrl}q=&service_name=&location=&provider_name=`;
    // } else
    if (this.state.procedureName !== "" && this.state.providerName === "") {
      searchUrl = `${searchUrl}q=term&service_name=${this.state.procedureName}term&location=term`;
    } else if (
      this.state.procedureName === "" &&
      this.state.providerName !== ""
    ) {
      searchUrl = `${searchUrl}q=term&service_name=term&location=term${this.state.providerName}`;
    } else {
      searchUrl = `${searchUrl}q=term&service_name=${this.state.procedureName}term&location=term${this.state.providerName}`;
    }
    // console.log("searchUrl", searchUrl);
    const getSearchValue = Env.get(searchUrl);

    getSearchValue.then(
      () => {
        this.props.navigate(
          `/search?q=term&service_name=${
            this.state.procedureName !== "" ? this.state.procedureName : ""
          }term&location=${
            this.state.providerName !== "" ? this.state.providerName : ""
          }`
        );
      },
      (error) => {
        console.error(error);
      }
    );
  };

  render() {
    return (
      <Box
        className="banner-search"
        sx={{
          margin: "auto",
          backgroundColor: "#fff",
          width: "900px",
          height: "70px",
          borderRadius: "41px",
          display: "flex",
        }}
      >
        <Input
          id="banner-input"
          sx={{
            marginTop: "2px",
            paddingLeft: "34px",
            border: "none",
            color: "#000",
            width: "600px",
            display: "flex",
          }}
          disableUnderline
          value={this.state.procedureName}
          onChange={(e) => this.procedureValue(e)}
          placeholder="Enter service name or Code..."
          startAdornment={
            <InputAdornment position="start" sx={{ color: "#000" }}>
              <img src={Searchimg} alt="search" style={{width:'100%'}}/>
            </InputAdornment>
          }
        />
        {this.state.procedureOptions &&
          this.state.procedureList?.length > 0 && (
            <List
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "#f5f5f5",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: "1px solid #ccc",
                borderTop: "none",
                // borderRadius: "0 0 5px 5px",
                borderRadius: "22px",
                marginLeft: "10px",
                maxHeight: "150px",
                overflowY: "auto",
                color: "#000",
                width: "370px",
              }}
            >
              {this.state.procedureList?.map((option, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => this.handleProcedureOptionClick(option)}
                >
                  <ListItemText primary={option.data} />
                </ListItem>
              ))}
            </List>
          )}

        <Divider
          orientation="vertical"
          sx={{ marginTop: "23px", height: "30px", color: "#000" }}
        />
        <Input
          id="input-with-icon-textfield"
          sx={{
            marginTop: "2px",
            paddingLeft: "34px",
            border: "none !important",
            color: "#000",
            width: "350px",
            fontWeight:"500"
          }}
          disableUnderline
          value={this.state.providerName}
          onChange={(e) => this.providerValue(e)}
          placeholder="Location"
          startAdornment={
            <InputAdornment position="start" sx={{ color: "#000" }}>
              <FmdGoodOutlinedIcon sx={{ color: "#000" }} />
            </InputAdornment>
          }
        />
        {this.state.providerOptions && this.state.providerList?.length > 0 && (
          <List
            sx={{
              position: "absolute",
              top: "100%",
              left: "377px",
              backgroundColor: "#f5f5f5",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "1px solid #ccc",
              borderTop: "none",
              // borderRadius: "0 0 5px 5px",
              borderRadius: "22px",
              marginLeft: "10px",
              maxHeight: "150px",
              overflowY: "auto",
              color: "#000",
              width: "362px",
            }}
          >
            {this.state.providerList?.map((option, index) => (
              <ListItem
                key={index}
                button
                onClick={() => this.handleProviderOptionClick(option)}
              >
                <ListItemText primary={option.data} />
              </ListItem>
            ))}
          </List>
        )}

        <Button
          sx={{
            //marginLeft: "20px",
            width: "201px",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#212220 !important" ,
            },
            textTransform: "none",            
            fontSize: "23px",
            borderRadius: '0px 50px 50px 0px',
            background: '#212220',
            fontWeight:'600' 
          }}
          onClick={this.searchValue}
        >
          Search
        </Button>
      </Box>
    );
  }
}
export default withRouter(HomeSearch);
