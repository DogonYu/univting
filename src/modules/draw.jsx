import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import { drawAPI } from "@src/api/api";
import createRequestSaga, {
  createRequestActionTypes,
} from "@src/api/createRequestSaga";

const [
  DRAW_SUBMIT,
  DRAW_SUBMIT_SUCCESS,
  DRAW_SUBMIT_FAILURE,
] = createRequestActionTypes("draw/DRAW_SUBMIT");
const DRAW_INITIALIZE = "draw/DRAW_INITIALIZE";

export const drawSubmit = createAction(DRAW_SUBMIT, (values) => values);
export const drawInitialize = createAction(DRAW_INITIALIZE);

const drawSubmitSaga = createRequestSaga(DRAW_SUBMIT, drawAPI.drawSubmit);

export function* drawSaga() {
  yield takeLatest(DRAW_SUBMIT, drawSubmitSaga);
}

const initialState = {
  drawResult: null,
  drawError: null,
  draw: {
    name: "",
    phone: "",
    callTing: null,
    friendTing: null,
    accept: false,
  },
};

export default handleActions(
  {
    [DRAW_SUBMIT_SUCCESS]: (state, { payload: drawResult }) => ({
      ...state,
      drawResult,
    }),
    [DRAW_SUBMIT_FAILURE]: (state, { payload: drawError }) => ({
      ...state,
      drawError: drawError.response.data,
    }),
    [DRAW_INITIALIZE]: () => initialState,
  },
  initialState
);
