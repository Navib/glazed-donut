import { takeLatest, put, call, all, takeEvery } from "redux-saga/effects";
import { signup } from "../containers/Auth/Signup/sagas";
import { SIGNUP_ACTION } from "../containers/Auth/Signup/actions";

export function* sagas() {
  yield all([yield takeLatest(SIGNUP_ACTION, signup)]);
}
