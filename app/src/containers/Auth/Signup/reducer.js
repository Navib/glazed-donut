import { SIGNUP_ACTION_SUCCESS, SIGNUP_ACTION_ERROR } from "./actions";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_ACTION_SUCCESS:
      return {
        ...state,
        authenticated: action.response.data.token,
        errorMessage: ""
      };

    case SIGNUP_ACTION_ERROR:
      return { ...state, errorMessage: action.error };

    default:
      return state;
  }
};

export default signUpReducer;
