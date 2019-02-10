import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import auth from "../containers/Auth/Signup/reducer";

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: auth
});

export default rootReducer;
