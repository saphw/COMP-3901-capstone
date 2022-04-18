import React from "react";
import { Route, Routes } from "react-router-dom";

import { UploadRoutes } from "./Views";

const generalRoutes = [ UploadRoutes.main, <Route></Route>]
const AppRoutes = () => {
  const routes = generalRoutes;

  return <Routes>{routes}</Routes>;
};

export default AppRoutes;
