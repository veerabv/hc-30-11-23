import { Box, Typography, Button, Grid, Paper, Divider,Tooltip } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';

import { Link } from "react-router-dom";

import React, { useState } from "react";
import "../Assets/css/AddressMap.css";
import shareIcon from "../Assets/Static/shareIcon.svg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import map from "../Assets/Static/map.png";

function AddressMap({data}) {
  const apiKey = "AIzaSyAzHzsyIq0Exln-QjwtTyNG2AAF0q39eEU";
  const [options ,setOptions] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const handleCopyClick = () => {
    const currentUrl = window.location.href;  
    const tempInput = document.createElement('textarea');
    tempInput.value = currentUrl;
    document.body.appendChild(tempInput);
    tempInput.select();   
    document.execCommand('copy');
    document.body.removeChild(tempInput);  
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipOpen(false);
    }, 400);
 }

  // const mapStyles = [
  //   {
  //     featureType: "all",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         saturation: 36,
  //       },
  //       {
  //         color: "#fff",
  //       },
  //       {
  //         lightness: 100,
  //       },
  //     ],
  //   },
  // ];
  // console.log(data,"///////////");
  return (
    <>
      <Box sx={{ margin: "auto", width: "1300px", padding: "20px 0px" ,position:"relative",}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: "32px",
              fontFamily: "popins",
              fontWeight: "900",
              color: "#212220",
              textDecoration: "underline",
            }}
          >
            {data[0].display}
            {/* Abraham Lincoln Memorial Hospital */}
          </Typography>

          <Button
            onMouseEnter={() => setOptions(true)}
            onMouseLeave={() => setOptions(false)}
            variant="outlined"
            sx={{
              border: "1px solid #45A736",
              color: "#45A736",
              padding: "5px 16px",
              borderRadius: "40px",
              fontFamily: "popins",
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
       
              "&:hover": {
                backgroundColor: "inherit",
                border: "1px solid #45A736",
              },
             
            }}
           
          >
            Share {<img src={shareIcon} alt="icon" />}
          </Button>
          {options && (<Paper sx={{position:"absolute",right:"0px",top:"65px",zIndex:"3",width:"160px",padding:"14px",height:"max-content"}}  onMouseEnter={() => setOptions(true)} onMouseLeave={() => setOptions(false)}>
          <Tooltip open={tooltipOpen} title="Copied!" placement="top" arrow>
          <Button variant="text" sx={{color:"#45A736"}} onClick={handleCopyClick}> <LinkIcon sx={{marginRight:"16px"}}/> Copy Link</Button>
          </Tooltip>
          <Divider></Divider>
          </Paper>)}
          
        </Box>
        
        <Grid container sx={{ marginTop: "18px" }}>
          <Grid item xs={12} sm={3} >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                width: "75%",
                marginBottom: "12px",
              }}
            >
              <p
                style={{margin:"0px",
                  width: "70px",
                  color: "#02363D",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
                
              >
                Address
              </p>
              <p  
                style={{margin:"0px",
                  color: "#45A736",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontWeight: "500",
                }}

              >
                Get Directions
              </p>
            </Box>
            <p
              style={{margin:"0px",
                marginBottom: "12px",
                color: "#02363D",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {/* 200 Stahlhut Drive, Lincoln, IL,62656 */}
              {data[0].address}
            </p>
            <Box
              sx={{
                display: "flex",
                gap: "50px",
                width: "75%",
                marginBottom: "12px",
                alignItems: "center",
              }}
            >
              <p  
                style={{margin:"0px",
                  width: "70px",
                  color: "#02363D",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Phone
              </p>
              <p
                style={{margin:"0px",
                  color: "#45A736",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {/* 212639200 */}
                {data[0].phone}
              </p>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "50px",
                width: "75%",
                marginBottom: "12px",
                alignItems: "center",
              }}
            >
              <p
                style={{margin:"0px",
                  width: "70px",
                  color: "#02363D",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Website
              </p>
              <Link to={data[0].website} target="_blank">
              <p
                style={{margin:"0px",
                  color: "#45A736",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Visit
              </p>
              </Link>
            </Box>
            <p
              style={{margin:"0px",
                color: "#02363D",
                marginBottom: "6px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Nearby Providers
            </p>
            {data[0].nearby.map((location,i)=>(<Typography
              key={i}
              sx={{
                color: "#45A736",
                marginRight: "2px",
                fontSize: "10px",
                lineHeight: "0px",
                letterSpacing: "0.02px",
              }}
              variant="caption"
              display="inline"
            >
              {location.display}{" "}
              <span style={{ color: "black" }}>({location.distance})</span>
            </Typography>))}
            {/* <Typography
              sx={{
                color: "#45A736",
                marginRight: "2px",
                fontSize: "10px",
                lineHeight: "0px",
                letterSpacing: "0.02px",
              }}
              variant="caption"
              display="inline"
            >
              self Regional Healthcare{" "}
              <span style={{ color: "black" }}>(13 miles)</span>
            </Typography> */}
            {/* <Typography
              sx={{
                color: "#45A736",
                marginRight: "2px",
                fontSize: "10px",
                lineHeight: "0px",
                letterSpacing: "0.02px",
              }}
              variant="caption"
              display="inline"
            >
              Greenwood Regional Rehabilitation Hospital
              <span style={{ color: "black" }}>(13 miles)</span>
            </Typography> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            sx={{ boxSizing: "border-box", paddingLeft: "36px" }}
          >
            {/* <img
              src={map}
              alt="location"
              width="100%"
              style={{ aspectRatio: "4/1", objectFit: "initial" }}
            /> */}
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={{ height: "250px", width: "100%" }}
                center={{ lat: data[0].lat, lng: data[0].lng }}
                zoom={12}
                options={{
                  zoomControl: false,
                  fullscreenControl: false,
                  // styles: mapStyles,
                }}
              >
                <Marker position={{ lat: data[0].lat, lng: data[0].lng }} />
                {/* {!location && (
                  <Marker position={{ lat: 11.0920163, lng: 79.796041 }} />
                )} */}
              </GoogleMap>
            </LoadScript>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AddressMap;
