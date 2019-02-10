import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import GridX from "../common/GridX";
import Cell from "../common/Cell";
import styles from "./Header.scss";

const defaultProps = {
  logged: false,
  username: null
};

const propTypes = {
  logged: PropTypes.bool,
  username: PropTypes.string
};
const Header = ({ logged, username }) => {
  return (
    <GridX className={classnames(styles.headerWrapper)}>
      <Cell className={classnames(styles.leftSide, "large-4")}>User Name</Cell>
      <Cell className={classnames(styles.rightSide, "large-4 large-offset-4")}>
        Logged
      </Cell>
    </GridX>
  );
};

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;
