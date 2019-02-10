import React from "react";
import PropTypes from "prop-types";
import GridContainer from "./common/GridContainer";
import GridX from "./common/GridX";
import Cell from "./common/Cell";
import Header from "./Header";
import Signup from "../containers/Auth/Signup";

export default ({ children, history }) => {
  return (
    <GridContainer gridWidth="full">
      <Header />
      <GridContainer>
        {children}
        <GridX>
          <Cell className="large-8">Eight</Cell>
          <Cell className="large-4">Four</Cell>
          <Signup />
        </GridX>
      </GridContainer>
    </GridContainer>
  );
};
