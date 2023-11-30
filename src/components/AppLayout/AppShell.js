import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { AppShell as MineralAppShell, styled } from "@mineral/core";
import HcdAppBar from "./AppBar";
import Footer from "./AppFooter";
// import LoginPortal from "pages/admin/Login/LoginPortal";
// import ErrorPage from "components/ErrorPage/ErrorPage";
// import { connect } from "react-redux";

const AppShell = (props) => {
  const StyledAppShell = styled(MineralAppShell)(() => ({
    flexDirection: "column",
  }));

  //   if (props.userGroup?.length < 1 && window.location.href.includes("admin")) {
  //     return (
  //       <React.Fragment data-testid="appShellTest">
  //         <Helmet titleTemplate="%s | SEO Broadcom" defaultTitle="SEO Broadcom" />
  //         <StyledAppShell
  //           appBar={<HcdAppBar />}
  //           footer={<Footer />}
  //           sx={{
  //             "& .css-xzpouq-MnrlAppShell-toolbar": {
  //               minHeight: "0px",
  //             },
  //             "& .MuiContainer-root": {
  //               padding: 0,
  //             },
  //           }}
  //         >
  //           <ErrorPage error={undefined} />
  //         </StyledAppShell>
  //       </React.Fragment>
  //     );
  //   } else {
  return (
    <>
      <Helmet titleTemplate="%s | SEO Broadcom" defaultTitle="SEO Broadcom" />
      <StyledAppShell
        appBar={<HcdAppBar />}
        footer={<Footer />}
        sx={{
          "& .css-xzpouq-MnrlAppShell-toolbar": {
            minHeight: "0px",
          },
          "& .MuiContainer-root": {
            padding: 0,
          },
        }}
      >
        <Outlet />
      </StyledAppShell>
    </>
  );
  //   }
};

// function mapDispatchToProps(state) {
//   return {
//     isLoggedIn: state.isLoggedIn,
//     userGroup: state.userGroup,
//   };
// }

// export default connect(mapDispatchToProps)(AppShell);

export default AppShell;
