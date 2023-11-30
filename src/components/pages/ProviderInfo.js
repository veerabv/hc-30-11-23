import React, { useState } from "react";
import AppTitle from "../AppLayout/AppTitle";
import AddressMap from "../AddressMap";
import "../../Assets/css/ProviderInfo.css";
import cs from "../../Assets/Static/comingSoon.png";
import AppFooter from "../AppLayout/AppFooter";
import { useNavigate ,useParams} from "react-router-dom";

import { Box, Grid, Paper, Stack, Typography, Chip } from "@mui/material";

function ProviderInfo() {
  const data1 = ["Anasthesia","Evaluation and Management","Lab and Pathology","Medicine service and procedures","Non-Surgical Procedure","Physical Therapy","Radiology and imagine","Surgical procedure","Other Service",
  "Evaluation and Management","Lab and Pathology","Non-Surgical Procedure","Physical Therapy","Anasthesia","Hospital"];
  const data2 = ["Emergency Care","Hospital","Office visit","Psychology","speech","Physical Therapy","Radiology and imagine","Surgical procedure","Other Service","Hospital"];
  const dynamicData =[{id:1,
    display:"Acupuncture Associates",
    address:"4427 Junction Park Dr, Wilmington, NC 28412, United States",
  phone:"9107988181",
website:"https://happyacupuncture.com/",
lat:34.23791396920577, 
lng:-77.87779890332581,
nearby:[{display:"self Regional Healthcare",distance:"13miles"},
{display:"Greenwood Regional Rehabilitation Hospita",distance:"16miles"},
{display:"self Regional Healthcare",distance:"13miles"},
{display:"Greenwood Regional Rehabilitation Hospita",distance:"16miles"},
]},
{id:2,
  display:"Beth Israel Medical Center",
  address:"10 Union Square E #5p, New York, NY 10003, United States",
phone:"+12128448680",
website:"https://www.bidmc.org/",
lat:41.57558121831598, 
lng:-74.27221504307347, 
nearby:[{display:"self Regional Healthcare",distance:"13miles"},
{display:"Greenwood Regional Rehabilitation Hospita",distance:"16miles"},
{display:"self Regional Healthcare",distance:"13miles"},
{display:"Greenwood Regional Rehabilitation Hospita",distance:"16miles"},
]},
{id:3,
  display:"Advanced Sports Medicine",
  address:"4427 Junction Park Dr, Wilmington, NC 28412, United States",
phone:"9107988181",
website:"https://happyacupuncture.com/",
lat:34.23791396920577, 
lng:-77.87779890332581,
nearby:[{display:"self Regional Healthcare",distance:"13miles"},
{display:"Greenwood Regional Rehabilitation Hospita",distance:"16miles"},
{display:"self Regional Healthcare",distance:"13miles"},
{display:"Greenwood Regional Rehabilitation Hospita",distance:"16miles"},
]},
{id:4,
  display:"Alliance Mental Health Specialists Suba Park Cheng",
  address:"4270 S Decatur Blvd B6, Las Vegas, NV 89103, United States",
phone:"9107988181",
website:"https://alliancemhs.com/",
lat:36.11224831551716, 
lng:-115.2071086305477 ,
nearby:[{display:"self Regional Healthcare",distance:"13miles"},
{display:"Greenwood Regional Rehabilitation Hospita",distance:"16miles"},
{display:"self Regional Healthcare",distance:"13miles"},
{display:"Greenwood Regional Rehabilitation Hospita",distance:"16miles"},
]}]

  const {display} = useParams();
  
  const providerInfo = dynamicData.filter((data)=>data.display === display);
  // console.log("/////////",providerInfo);

  const [tab, setTab] = useState("pro-info");
  const [service ,setService] = useState(null);
  const serviceChangeHandler = () =>{
    setTab("pro-service")
    setService(null)
  }
  const navigate = useNavigate();
  const serviceList =  data1.map((data , i)=>( <Chip
    key ={i}
       sx={{
         color: "#858585",
         fontSize: "16px",
         border: "1px solid #858585",
         textAlign: "center",
         padding:"24px",
         width:"210px",
         borderRadius:"40px",
         whiteSpace:"normal",
         cursor: "pointer",
         "&:hover":{background:"#DBEED9 !important",color:"#45A736",border:"none"},
         "& span":{whiteSpace: 'normal',},
         
       }}
       label={data}
       variant="outlined"
       onClick={() => setService(data)}
     />))

     const subServiceList =data2.map((data , i)=>( <Chip
      key ={i}
         sx={{
           color: "#858585",
           fontSize: "16px",
           border: "1px solid #858585",
           textAlign: "center",
           padding:"24px",
           width:"210px",
           borderRadius:"40px",
           whiteSpace:"normal",
           cursor: "pointer",
           "& span":{whiteSpace: 'normal',},
           
         }}
         label={data}
         variant="outlined"
         onClick={() => navigate("/ProcedureRate")}
       
       />))
  

  return (
    <>
      <AppTitle value={false} />
      <Box sx={{ backgroundColor: "#F5F5F5" }}>
        <AddressMap data={providerInfo} />
      </Box>
      <Box sx={{ margin: "40px auto", width: "1300px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          className="info-buttons"
        >
          <button
            onClick={() => setTab("pro-info")}
            className={tab === "pro-info" ? "active" : ""}
          >
            Provider Info
          </button>
          <button
            onClick={serviceChangeHandler}
            className={tab === "pro-service" ? "active" : ""}
          >
            Provider Service
          </button>
          <button
            onClick={() => setTab("pro-mrf")}
            className={tab === "pro-mrf" ? "active" : ""}
          >
            MRF Transparency Scorecard
          </button>
        </Stack>
        <Paper
          sx={{
            margin: "40px auto",
            width: "1300px",
            backgroundColor: "rgb(69 167 54 / 5%)",
            padding: "40px 44px",
            boxSizing: "border-box",
          }}
          elevation={4}
        >
          {tab === "pro-info" && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#212220",
                  }}
                >
                  Provider Info
                </Typography>
                <table className="Provider-info__table">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Abraham Lincoln Memorial Hospital</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>200 Stahlhut Drive, Lincoln,IL, 62656</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td
                        style={{
                          color: "rgb(69, 167, 54)",
                          textDecoration: "underline",
                        }}
                      >
                        2126392000
                      </td>
                    </tr>
                    <tr>
                      <td>Medical Provider ID</td>
                      <td>141322</td>
                    </tr>
                    <tr>
                      <td>National Provider ID(NPI)</td>
                      <td>1154329753</td>
                    </tr>
                    <tr>
                      <td>website</td>
                      <td
                        style={{
                          color: "rgb(69, 167, 54)",
                          textDecoration: "underline",
                        }}
                      >
                        Visit
                      </td>
                    </tr>
                    <tr>
                      <td>Provider Type</td>
                      <td>Critical Access Hospital</td>
                    </tr>
                    <tr>
                      <td>Beds</td>
                      <td>25</td>
                    </tr>
                  </tbody>
                </table>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#212220",
                  }}
                >
                  Clinical Services
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="Acute Renal Dialysis"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="Acute"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="Dialysis"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="Audiology"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="CARF Inpatient Rehabilitation"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="CARF Inpatient Rehabilitation"
                    variant="outlined"
                  />
                </Box>
              </Grid>
            </Grid>
          )}
          {tab === "pro-service" && (<Box>
             <Typography
             variant="h2"
            
             sx={{
               fontSize: "32px",
              fontFamily: "poppins semi",
               color: "#212220",
               marginBottom: "18px",
             }}
           >
             Provider Service
           </Typography>
           <Stack direction="row" justifyContent="space-between" alignItems="center">
           
           <Typography
           variant="h4"
           gutterBottom
           
           
           sx={{
             fontSize: "20px",
            fontFamily: "poppins semi",
             color: "#212220",
             
           }}
           
         >
         <span style={{cursor: service ? "pointer" : "default",}} onClick ={() => setService(null)}>All Services</span>  {service && <span style={{margin:"0px 12px",color:"#D9DED9"}}>/</span>} {service && <span style={{color:"#45A736"}}>{service}</span>}
         </Typography>

         <input style ={{border:"2px solid #DADADA" , width:"280px" ,borderRadius:"8px", padding:"12px 12px",fontSize:"16px"}} placeholder="Enter service name or code..." type="text"  />
         </Stack>
         <Box sx={{ display: "flex", flexWrap: "wrap",marginTop:"18px",gap:"30px",alignItems:"center",}}>
          {!service && serviceList}
          {service && subServiceList}

         </Box>
         </Box>
          )}
          {tab === "pro-mrf" && (
            <Box sx={{display:"flex",justifyContent:"center"}}>
            <img src={cs} alt="coming soon"/>
            </Box>
          )}
        </Paper>

        {/* {tab === "pro-info" && (<Box sx={{ margin: "40px auto", width: "1300px" }}>
          <Grid></Grid> </Box>)} */}
      </Box>
      <AppFooter />
    </>
  );
}

export default ProviderInfo;
