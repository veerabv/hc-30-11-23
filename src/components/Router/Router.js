import * as React from "react";
// import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import AppShell from "../AppLayout/AppShell";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Procedures from "../pages/Procedures";
import CountrySelect from "../Search/test";
import SearchPage from "../Search/SearchPage";
import ProcedureSearch from "../Search/ProcedureSearch";
import ProcedurePrice from "../pages/ProcedurePrice";
import Providers from "../pages/Providers";
import Payers from "../pages/Payers";
import PageNotFound from "../pages/PageNotFound";
import ComingSoon from "../pages/ComingSoon";
import ProviderInfo from "../pages/ProviderInfo";

// const MainPage = React.lazy(() => import("../pages/HCD-Main"));

export const Router = () => {
  return (
    // <React.Suspense fallback={null}>
    //   <Routes>
    //     <Route element={<AppShell />}>
    //       <Route path="/" element={<MainPage />} />
    //     </Route>
    //   </Routes>
    // </React.Suspense>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="procedure/searchs" element={<ProcedureSearch />} />
      <Route path="/test" element={<CountrySelect />} />
      <Route path="/procedures" element={<Procedures />} />
      <Route path="/providers" element={<Providers />} />
      <Route path="/payers" element={<Payers />} />
      <Route path="/ProcedureRate" element={<ProcedurePrice />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
      <Route path="/providerinfo/:display" element={<ProviderInfo />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
