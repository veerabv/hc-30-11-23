import React from "react";
import AppTitle from "../AppLayout/AppTitle";
import AppFooter from "../AppLayout/AppFooter";
import comingSoon from "../../Assets/Static/comingSoon.png";

const ComingSoon = () => {
  return (
    <>
      <AppTitle value={false} />
      <div style={{ textAlign: "center", margin: "50px 0px" }}>
        <img src={comingSoon} alt="comingsoon" height={500} />
      </div>
      <AppFooter value={false} />
    </>
  );
};

export default ComingSoon;
