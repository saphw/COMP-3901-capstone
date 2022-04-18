import React from "react";
import { RouteWithLayout } from "Components";
import { MainLayout } from "Layout";
import { Route } from "react-router-dom";

const UploadPage = React.lazy(() => import("./Upload"));

const ExploreRoutes = {
  main: (
    <Route
      exact
      path="/"
      key="upload-page"
      element={
        <RouteWithLayout
          component={UploadPage}
          layout={MainLayout}
          path="/"
          key="upload-page"
        />
      }
    />
  ),
};

export default ExploreRoutes;
