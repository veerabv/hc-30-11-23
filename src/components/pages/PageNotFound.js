import React from "react";
import AppTitle from "../AppLayout/AppTitle";
import AppFooter from "../AppLayout/AppFooter";
import pagenotfound from "../../Assets/Static/pagenotfound.png";

const PageNotFound = () => {
  return (
    <>
      <AppTitle value={false} />
      <div style={{ textAlign: "center", margin: "50px 0px" }}>
        <img src={pagenotfound} alt="comingsoon" height={500} />
      </div>
      <AppFooter value={false} />
    </>
  );
};

export default PageNotFound;
