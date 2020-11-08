import React from "react";
import Header from "../components/shared/header";
import { BrowserRouter } from "react-router-dom";

const RootComponentHOC = (RootComponent) => (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <RootComponent {...props} />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default RootComponentHOC;
