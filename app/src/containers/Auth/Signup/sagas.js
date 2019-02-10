import { takeLatest, put, call, all } from "redux-saga/effects";
import { SIGNUP_ACTION_SUCCESS, SIGNUP_ACTION_ERROR } from "./actions";
import api from "./api";

export function* signup(data) {
  try {
    const response = yield call(api.signup, data);
    yield put({ type: SIGNUP_ACTION_SUCCESS, response });
    localStorage.setItem("token", response.data.token);
    data.callback();
  } catch (error) {
    console.log("signup error", error.response.data.error);
    yield put({ type: SIGNUP_ACTION_ERROR, error: error.response.data.error });
  }
}
