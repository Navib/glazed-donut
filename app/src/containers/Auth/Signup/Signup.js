import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { compose } from "redux";
import { SIGNUP_ACTION } from "./actions";
import TheComponent from "../../../components/Auth/Signup";

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: (data, callback) => {
      dispatch({ type: SIGNUP_ACTION, payload: data, callback: callback });
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: "signup" })
)(TheComponent);
