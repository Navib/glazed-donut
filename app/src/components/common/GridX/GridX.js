import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

const GridX = ({ children, className }) => {
  return <div className={classnames("grid-x", className)}>{children}</div>;
};

GridX.defaultProps = defaultProps;
GridX.propTypes = propTypes;

export default GridX;
