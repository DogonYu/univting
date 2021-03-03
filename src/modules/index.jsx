import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import apply, { applySaga } from "./apply";
import draw, { drawSaga } from "./draw";
import admin, { adminSaga } from "./admin";

export function* rootSaga() {
  yield all([applySaga(), drawSaga(), adminSaga()]);
}

export default combineReducers({
  loading,
  apply,
  draw,
  admin,
});
