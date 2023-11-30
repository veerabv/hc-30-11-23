import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../Assets/Static/logo1.png";
import HomeBanner from "../../Assets/Static/HomeBanner.png";
// import Doctor from "../../Assets/Static/Doctor.png";
import FemaleBannerImage from "../../Assets/Static/FemaleBannerImage.png";
import { Grid } from "@mui/material";
import HomeSearch from "../Search/HomeSearch";
import { useNavigate } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from '@mui/material/Container';

const AppTitle = (props) => {
  const navigate = useNavigate();
  const [header, setHeader] = React.useState(false);

  React.useEffect(() => {
    const head = window.location.href.split("/")[3];

    if (head === "" || props?.value !== false) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }, [props]);

  return (
    <Box>
      {header ? (
        <AppBar
          style={{
            backgroundImage: `url(${HomeBanner})`,
            backgroundSize: "cover",
            width: "100%",
            backgroundColor: header ? "#45a736" : "#45a736",
            padding: '0.5rem 0rem 0rem',
            position: 'relative',
            boxShadow: 'none'
          }}
        >
          <Container className="container-common">
            <Toolbar sx={{ padding: '15px 0px 0px !important', justifyContent: 'space-between', display: { xs: 'block', sm: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => navigate("/")}
                sx={{ padding: '0px !important' }}
              >
                <img src={logo} alt="logo" />
              </IconButton>
              <div className="header-menu">
                <Button onClick={() => navigate("/")}>
                  Home
                </Button>
                <Button>
                  About Us
                </Button>
              </div>
            </Toolbar>
          </Container>
          <Grid container sx={{position:'relative'}}>
            <Container className="container-common banner-seaction" sx={{ display: 'flex', paddingTop: '3rem', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
              <div>
                <p className="your-path">
                  Your Path <br /> to Wellness
                </p>
                <p className="Commited">
                  Commited to Wellness - where Your <br /> wellbeing Comes
                  First
                </p>
              </div>
              <div>
                <img src={FemaleBannerImage} alt="logo" className="banner-img" />
              </div>
              <div>
                <p
                  className="your-path path-right"
                  style={{
                    textAlign: "right",
                  }}
                >
                  <span>We Care for</span>
                  <br />
                  <span>Your</span>
                  <br />
                  <span>Health</span>
                </p>
              </div>
            </Container>
            <Container className="container-common">
              <div
              className="banner-search-inner"
                style={{
                  position: "absolute",                 
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom:"5rem"
                }}
              >
                <HomeSearch />
              </div>
            </Container>
          </Grid>
        </AppBar>
      ) : (
        <AppBar
          style={{
            width: "100%",
            backgroundColor: "#45A736",
            padding: '0.6rem 0rem',
            position: 'relative',
            boxShadow: 'none'
          }}
        >
          <Container className="container-common">
            <Toolbar sx={{ padding: '0px !important', justifyContent: 'space-between', display: { xs: 'block', sm: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => navigate("/")}
                sx={{ padding: '0px !important' }}
              >
                <img src={logo} alt="logo" />
              </IconButton>
              <div className="header-menu">
                <Button onClick={() => navigate("/")}>
                  Home
                </Button>
                <Button>
                  About Us
                </Button>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </Box>
  );
};

export default AppTitle;