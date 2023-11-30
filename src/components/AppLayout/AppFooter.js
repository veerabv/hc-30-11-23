import React from "react";
import "../../Assets/css/AppFooter.css";
import brandPic from "../../Assets/Static/Logo (2).png";
import facebook from "../../Assets/Static/facebook.png";
import instagram from "../../Assets/Static/instagram.png";
import linkedIn from "../../Assets/Static/linkedIn.png";
import x from "../../Assets/Static/x.png";
import youtube from "../../Assets/Static/youtube.png";
// import homeFooter from "../../Assets/Static/homeFooter.png";
import "../../Assets/css/HomeFooter.css";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";

const AppFooter = (props) => {
  const navigate = useNavigate();
  const [footer, setFooter] = React.useState(false);

  React.useEffect(() => {
    const foot = window.location.href.split("/")[3];

    if (foot === "" || props?.value !== false) {
      setFooter(true);
    } else {
      setFooter(false);
    }
  }, [props]);
  return (
    <>
      <Box
        className={footer ? "footer-main" : "footer-main other-page"}
        sx={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <Container className="container-common">
          <Grid container spacing={2} className="footerComp">
            <Grid item lg={3} md={12} className="footercomp-1">
              <div>
                <img src={brandPic} alt="Health care Dollar" />
                <p className="practice">
                  We are a family centered practice that incorporates compassion
                  and dedication to promote your well being
                </p>
              </div>
            </Grid>
            <Grid
              item
              lg={3}
              md={4}
              xs={12}
            >
              <div>
                <h4>Main Menu 1</h4>
                <ul
                  style={{ listStyleType: "none" }}
                  className="menulist-handle"
                >
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu1
                  </li>
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu2
                  </li>
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu3
                  </li>
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu4
                  </li>
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu5
                  </li>
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu6
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={3} md={4} xs={12}>
              <div>
                <h4>Main Menu 2</h4>
                <ul
                  style={{ listStyleType: "none" }}
                  className="menulist-handle"
                >
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu1
                  </li>
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu2
                  </li>
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu3
                  </li>
                  <li
                    onClick={() => {
                      navigate("/comingsoon");
                    }}
                  >
                    Sub Menu4
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={3} md={4} xs={12}>
              <div>
                <h4>Contacts</h4>
                <div className="socialMedia-handler">
                  <button>
                    <img src={facebook} alt="facebook_Link" />
                  </button>
                  <button>
                    <img src={x} alt="X_Link" />
                  </button>
                  <button>
                    <img src={youtube} alt="youtube_Link" />
                  </button>
                  <button>
                    <img src={instagram} alt="instagram_Link" />
                  </button>
                  <button>
                    <img src={linkedIn} alt="linkedIn_Link" />
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default AppFooter;
