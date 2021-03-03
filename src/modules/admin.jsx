import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import { adminAPI } from "@src/api/api";
import createRequestSaga, {
  createRequestActionTypes,
} from "@src/api/createRequestSaga";

const [
  READ_APPLY,
  READ_APPLY_SUCCESS,
  READ_APPLY_FAILURE,
] = createRequestActionTypes("admin/READ_APPLY");
const [
  READ_DRAW,
  READ_DRAW_SUCCESS,
  READ_DRAW_FAILURE,
] = createRequestActionTypes("admin/READ_DRAW");
const [
  TOGGLE_PAYMENT,
  TOGGLE_PAYMENT_SUCCESS,
  TOGGLE_PAYMENT_FAILURE,
] = createRequestActionTypes("admin/TOGGLE_PAYMENT");
const [
  RANDOM_DRAW,
  RANDOM_DRAW_SUCCESS,
  RANDOM_DRAW_FAILURE,
] = createRequestActionTypes("admin/RANDOM_DRAW");
const ADMIN_INITIALIZE = "admin/ADMIN_INITIALIZE";

export const readApplyList = createAction(READ_APPLY);
export const readDrawList = createAction(READ_DRAW);
export const togglePayment = createAction(TOGGLE_PAYMENT, (voterId) => voterId);
export const randomDraw = createAction(RANDOM_DRAW, (voterId) => voterId);
export const adminInitialize = createAction(ADMIN_INITIALIZE);

const readApplyListSaga = createRequestSaga(READ_APPLY, adminAPI.readApplyList);
const readDrawListSaga = createRequestSaga(READ_DRAW, adminAPI.readDrawList);
const tooglePaymentSaga = createRequestSaga(
  TOGGLE_PAYMENT,
  adminAPI.togglePayment
);
const randomDrawSaga = createRequestSaga(RANDOM_DRAW, adminAPI.randomDraw);

export function* adminSaga() {
  yield takeLatest(READ_APPLY, readApplyListSaga);
  yield takeLatest(READ_DRAW, readDrawListSaga);
  yield takeLatest(TOGGLE_PAYMENT, tooglePaymentSaga);
  yield takeLatest(RANDOM_DRAW, randomDrawSaga);
}

const initialState = {
  applyList: null,
  drawList: null,
  togglePayment: null,
  randomDraw: null,
  Error: {
    applyError: null,
    drawError: null,
    paymentError: null,
    randomError: null,
  },
};

export default handleActions(
  {
    [READ_APPLY_SUCCESS]: (state, { payload: applyList }) => ({
      ...state,
      applyList: applyList.result,
    }),
    [READ_APPLY_FAILURE]: (state, { payload: applyError }) => ({
      ...state,
      Error: {
        ...state.Error,
        applyError: applyError.response.data,
      },
    }),
    [READ_DRAW_SUCCESS]: (state, { payload: drawList }) => ({
      ...state,
      drawList: drawList.result,
    }),
    [READ_DRAW_FAILURE]: (state, { payload: drawError }) => ({
      ...state,
      Error: {
        ...state.Error,
        drawError: drawError.response.data,
      },
    }),
    [TOGGLE_PAYMENT_SUCCESS]: (state, { payload: togglePayment }) => ({
      ...state,
      togglePayment: togglePayment.result,
      drawList: state.drawList.map((draw) => {
        if (draw.id === togglePayment.result.voterId) {
          draw.payment = togglePayment.result.payment;
        }
        return draw;
      }),
    }),
    [TOGGLE_PAYMENT_FAILURE]: (state, { payload: paymentError }) => ({
      ...state,
      Error: {
        ...state.Error,
        paymentError: paymentError.response.data,
      },
    }),
    [RANDOM_DRAW_SUCCESS]: (state, { payload: randomDraw }) => ({
      ...state,
      randomDraw: randomDraw.result,
    }),
    [RANDOM_DRAW_FAILURE]: (state, { payload: randomError }) => ({
      ...state,
      Error: {
        ...state.Error,
        randomError: randomError.response.data,
      },
    }),
    [ADMIN_INITIALIZE]: () => initialState,
  },
  initialState
);
