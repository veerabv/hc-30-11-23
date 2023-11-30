/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../Assets/css/Home.css";
import { useNavigate } from "react-router-dom";
import HomeWhiteBanner from "../Assets/Static/HomeWhiteBanner.png";
// import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
// import Ellipse from "../Assets/Static/Ellipse.png";
// import homeFooter from "../Assets/Static/homeFooter.png";
import FooterImage from "../Assets/Static/FooterImage.png";
// import imageA from "../Assets/Static/imageA.png";
import bgImage from "../Assets/Static/bgImage.png";
// import imageE from "../Assets/Static/imageE.png";
// import imageU from "../Assets/Static/imageU.png";
// import imageN from "../Assets/Static/imageN.png";
// import image_Luna from "../Assets/Static/image_Luna.png";
// import imageP from "../Assets/Static/imageP.png";
import VerifiedIcon from "@mui/icons-material/Verified";
// import gogoImage from "../Assets/Static/gogoImage.png";
// import SelfCareCafe from "../Assets/Static/SelfCareCafe.png";
// import AreaHealth from "../Assets/Static/AreaHealth.png";
// // import vitaHealth from "../Assets/Static/vitaHealth.png";
// //import yourFitIQ from "../Assets/Static/yourFitIQ.png";
// //import clearwellHealth from "../Assets/Static/clearwellHealth.png";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Env from "../utils/Services/Env";
import Container from '@mui/material/Container';

const CardGrid = () => {
  const navigate = useNavigate();

  const [procedure, setProcedure] = React.useState([]);
  const [provider, setProvider] = React.useState([]);
  const [payer, setPayer] = React.useState([]);

  // const [procedure] = React.useState({
  //   status: 200,
  //   popularServices: [
  //     {
  //       uuid: "1",
  //       name: "Basic metabolic panel",
  //       avgPrice: 120,
  //     },
  //     {
  //       uuid: "2",
  //       name: "Colonoscopy, diagnostic",
  //       avgPrice: 320,
  //     },
  //     {
  //       uuid: "3",
  //       name: "Tonsil Removal",
  //       avgPrice: 750,
  //     },
  //   ],
  // });

  // const [provider] = React.useState({
  //   status: 200,
  //   popularProvders: [
  //     {
  //       uuid: "1",
  //       name: "Luna Physical Therapy - NewYork Region",
  //       logo_url: image_Luna,
  //       location: "New York",
  //       verified: true,
  //     },
  //     {
  //       uuid: "2",
  //       name: "Paloma Health",
  //       logo_url: imageP,
  //       location: "New York",
  //       verified: true,
  //     },
  //     {
  //       uuid: "3",
  //       name: "NYU Langone Tisch",
  //       // logo_url: imageN,
  //       logo_url: "",
  //       location: "New York",
  //       verified: false,
  //     },
  //   ],
  // });

  // const [payer] = React.useState({
  //   status: 200,
  //   popularPayers: [
  //     {
  //       uuid: "1",
  //       name: "Aetna of NY",
  //       logo_url: "",
  //       location: "New York",
  //     },
  //     {
  //       uuid: "2",
  //       name: "Unified Health Group of NY",
  //       logo_url: "",
  //       location: "New York",
  //     },
  //     {
  //       uuid: "3",
  //       name: "Emblem Health",
  //       logo_url: "",
  //       location: "New York",
  //     },
  //   ],
  // });

  React.useEffect(() => {
    providerValue();
    procedureValue();
    payerValue();
  }, []);

  const payerValue = () => {
    const payerVal = Env.get(`payer/popular`);

    payerVal.then(
      (response) => {
        const data = response.data;

        setPayer(data);
        // this.setState({
        //   data: data,
        // });
        // console.log("data", data);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const providerValue = () => {
    const providerVal = Env.get(`provider/popular`);

    providerVal.then(
      (response) => {
        const data = response.data;

        setProvider(data);
        // this.setState({
        //   data: data,
        // });
        // console.log("data", data);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const procedureValue = () => {
    const procedureVal = Env.get(`procedure/popular`);

    procedureVal.then(
      (response) => {
        const data = response.data;
        setProcedure(data);
        // this.setState({
        //   data: data,
        // });
      },
      (error) => {
        console.error(error);
      }
    );

    // const procedureVal = {
    //   status: 200,
    //   popularServices: [
    //     {
    //       uuid: "1",
    //       name: "Basic metabolic panel",
    //       avgPrice: 120,
    //     },
    //     {
    //       uuid: "2",
    //       name: "Colonoscopy, diagnostic",
    //       avgPrice: 320,
    //     },
    //     {
    //       uuid: "3",
    //       name: "Tonsil Removal",
    //       avgPrice: 750,
    //     },
    //   ],
    // };

    // setProcedure(procedureVal);
  };

  return (
    <>
      <Box className="home-page">
        <Container className="container-common">
          <Grid container sx={{ position: "relative", padding: "4rem 0rem" }}>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <div>
                <p className="browse-procedure">
                  Browse <br /> by Procedure
                </p>
              </div>
              <div>
                <p className="browse-subtext">
                  lorem ipsum is a simple <br /> dummy text used
                </p>
              </div>
              <div>
                <Button className="view-more" onClick={() => navigate("/procedures")}>
                  View More <span style={{ marginLeft: "6px" }}>&gt;</span>
                </Button>
              </div>
            </Grid>
            <Grid item lg={9} md={12} sm={12} xs={12}>
              <Grid container spacing={2} sx={{ width: '100%', margin: '0px' }}>
                {procedure?.popularServices?.map((service) => (
                  <Grid
                    key={service.uuid}
                    item
                    lg={4} md={4} sm={12} xs={12}
                    className="list-name"
                    onClick={() => navigate(`/comingsoon?id=${service.uuid}`)}
                  >
                    <div className="brower-right">
                      <p className="service-name">
                        {service.name}
                      </p>
                      <p className="service-avgPrice">
                        $ {service.avgPrice}
                      </p>
                      <p className="service-CashPrice">Avg. Cash Price</p>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ background: '#fafafa', padding: "4rem 0rem", backgroundImage: `url(${HomeWhiteBanner})`, }}>
          <Container className="container-common">
            <Grid container>
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <div>
                  <p className="browse-procedure">
                    Browse <br /> by Provider
                  </p>
                </div>
                <div>
                  <p className="browse-subtext">
                    lorem ipsum is a simple <br /> dummy text used
                  </p>
                </div>
                <div>
                  <Button className="view-more" onClick={() => navigate("/providers")}>
                    View More <span style={{ marginLeft: "6px" }}>&gt;</span>
                  </Button>
                </div>
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={12}>
                <Grid container spacing={2} sx={{ width: '100%', margin: '0px' }}>
                  {provider?.popularProviders?.map((prov) => (
                    <Grid
                      key={prov.npi}
                      item
                      lg={4} md={4} sm={12} xs={12}
                      className="list-name"
                      onClick={() => navigate(`/comingsoon?id=${prov.npi}`)}
                    >
                      <div className="brower-right">
                        <div className="image-container">
                          {prov.logo_url === "" || prov.logo_url === null ? (
                            <>
                              <img
                                src={bgImage}
                                alt="bgImage "
                                className="overlay-image"
                              />
                              <p className="overlay-letter">{prov.name[0]}</p>
                            </>
                          ) : (
                            <img
                              src={prov.logo_url}
                              alt={prov.name}
                              className="overlay-image"
                            />
                          )}
                        </div>
                        <div>
                          <p className="prov-name">
                            {prov.name}
                            {prov.verified ? (
                              <VerifiedIcon
                                sx={{ textAlign: "center", color: "#45a736" }}
                              />
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="prov-location">
                            {prov.location}
                          </p>
                        </div>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ padding: "4rem 0rem", paddingBottom: '6rem', backgroundImage: `url(${HomeWhiteBanner})`, }}>
          <Container className="container-common">
            <Grid container>
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <div>
                  <p className="browse-procedure">
                    Browse <br /> by Payers
                  </p>
                </div>
                <div>
                  <p className="browse-subtext">
                    lorem ipsum is a simple <br /> dummy text used
                  </p>
                </div>
                <div>
                  <Button className="view-more" onClick={() => navigate("/payers")}>
                    View More <span style={{ marginLeft: "6px" }}>&gt;</span>
                  </Button>
                </div>
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={12}>
                <Grid container spacing={2} sx={{ width: '100%', margin: '0px' }}>
                  {payer.popularPayers?.map((payer) => (
                    <Grid
                      key={payer.uuid}
                      item
                      lg={4} md={4} sm={12} xs={12}
                      className="list-name"
                      onClick={() => navigate(`/comingsoon?id=${payer.uuid}`)}
                    >
                      <div className="brower-right">
                        <div className="image-container">
                          {payer.logo_url === "" || payer.logo_url === null ? (
                            <>
                              <img
                                src={bgImage}
                                alt="bgImage "
                                className="overlay-image"
                              />
                              <p className="overlay-letter">{payer.name[0]}</p>
                            </>
                          ) : (
                            <img
                              src={payer.logo_url}
                              alt={payer.name}
                              className="overlay-image"
                            />
                          )}
                        </div>
                        <div>
                          <p className="prov-name">
                            {payer.name}
                            {/* {payer.verified ? (
                        <VerifiedIcon
                          sx={{ textAlign: "center", color: "#45a736" }}
                        />
                      ) : (
                        ""
                      )} */}
                          </p>
                        </div>
                        <div>
                          <p className="prov-location">
                            {payer.location}
                          </p>
                        </div>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Container className="container-common home-footer">
        <div className="ads-container">
          <img
            src={FooterImage}
            alt="FooterImage"
            style={{ position: "absolute", top: "-73px" }}
          />
          <div className="ads-text">
            <p className="ads-subtext1">GET IN TOUCH</p>
            <p className="ads-subtext2">
              We Provide the best Medical Service for you
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CardGrid;