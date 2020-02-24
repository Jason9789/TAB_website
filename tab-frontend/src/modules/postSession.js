import { createAction, handleActions } from 'redux-actions';
import createRequestSage, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as sessionsAPI from '../lib/api/session';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_SESISON,
  READ_SESISON_SUCCESS,
  READ_SESISON_FAILURE,
] = createRequestActionTypes('session/READ_SESISON');
const UNLOAD_SESISON = 'session/UNLOAD_SESISON'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readSession = createAction(READ_SESISON, id => id);
export const unloadSession = createAction(UNLOAD_SESISON);

const readSessionSaga = createRequestSage(
  READ_SESISON,
  sessionsAPI.readSession,
);
export function* sessionSaga() {
  yield takeLatest(READ_SESISON, readSessionSaga);
}

const initialState = {
  post: null,
  error: null,
};

const session = handleActions(
  {
    [READ_SESISON_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_SESISON_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POST]: () => initialState,
  },
  initialState,
);

export default session;
