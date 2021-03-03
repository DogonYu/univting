import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import { applyAPI } from "@src/api/api";
import createRequestSaga, {
  createRequestActionTypes,
} from "@src/api/createRequestSaga";

const [
  APPLY_SUBMIT,
  APPLY_SUBMIT_SUCCESS,
  APPLY_SUBMIT_FAILURE,
] = createRequestActionTypes("apply/APPLY_SUBMIT");
const APPLY_INITIALIZE = "apply/APPLY_INITIALIZE";

export const applySubmit = createAction(APPLY_SUBMIT, (values) => values);
export const applyInitialize = createAction(APPLY_INITIALIZE);

const applySubmitSaga = createRequestSaga(APPLY_SUBMIT, applyAPI.applySubmit);

export function* applySaga() {
  yield takeLatest(APPLY_SUBMIT, applySubmitSaga);
}

const initialState = {
  applyResult: null,
  applyError: null,
  apply: {
    name: "",
    phone: "",
    callTing: null,
    friendTing: null,
    accept: false,
  },
};

export default handleActions(
  {
    [APPLY_SUBMIT_SUCCESS]: (state, { payload: applyResult }) => ({
      ...state,
      applyResult,
    }),
    [APPLY_SUBMIT_FAILURE]: (state, { payload: applyError }) => ({
      ...state,
      applyError: applyError.response.data,
    }),
    [APPLY_INITIALIZE]: () => initialState,
  },
  initialState
);
