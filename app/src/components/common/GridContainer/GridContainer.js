import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const defaultProps = {};

const propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
  gridWidth: PropTypes.oneOf(["fluid", "full"])
};

const GridContainer = ({ children, className, gridWidth }) => {
  return (
    <div className={classnames("grid-container", className, gridWidth)}>
      {children}
    </div>
  );
};

GridContainer.defaultProps = defaultProps;
GridContainer.propTypes = propTypes;

export default GridContainer;
