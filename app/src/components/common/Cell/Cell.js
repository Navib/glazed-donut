import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

const Cell = ({ children, className }) => {
  return <div className={classnames("cell", className)}>{children}</div>;
};

Cell.defaultProps = defaultProps;
Cell.propTypes = propTypes;

export default Cell;
