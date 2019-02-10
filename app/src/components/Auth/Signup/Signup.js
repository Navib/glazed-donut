import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

class Signup extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(formProps) {
    this.props.signup(formProps, () => {
      this.props.history.push("/admin");
    });
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          email
          <Field
            name="email"
            type="text"
            autoComplete="none"
            floatingLabelText="Email"
            fullWidth
            required
            component={renderField}
          />
        </fieldset>
        <fieldset>
          username
          <Field
            name="username"
            type="text"
            autoComplete="none"
            floatingLabelText="Username"
            fullWidth
            required
            component={renderField}
          />
        </fieldset>
        <fieldset>
          password
          <Field
            name="password"
            type="password"
            autoComplete="none"
            floatingLabelText="Password"
            fullWidth
            required
            component={renderField}
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button type="submit">Sign up!</button>
      </form>
    );
  }
}

export default Signup;
