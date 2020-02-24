// import { combineReducers } from 'redux';
// import { all } from 'redux-saga/effects';
// import auth, { authSaga } from './auth';
// import loading from './loading';
// import user, { userSaga } from './user';
// import write, { writeSaga } from './writeSession';

// const rootReducer = combineReducers({
//   auth,
//   loading,
//   user,
//   write,
// });

// export function* rootSaga() {
//   yield all([authSaga(), userSaga(), writeSaga()]);
// }

// export default rootReducer;
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as sessionsAPI from '../lib/api/sessions';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_SESSIONS,
  LIST_SESSIONS_SUCCESS,
  LIST_SESSIONS_FAILURE,
] = createRequestActionTypes('sessions/LIST_SESSIONS');

export const listSessions = createAction(
  LIST_SESSIONS,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listSessionsSaga = createRequestSaga(
  LIST_SESSIONS,
  sessionsAPI.listSession,
);
export function* postsSaga() {
  yield takeLatest(LIST_SESSIONS, listSessionsSaga);
}

const initialState = {
  sessions: null,
  error: null,
  lastPage: 1,
};

const sessions = handleActions(
  {
    [LIST_SESSIONS_SUCCESS]: (
      state,
      { payload: sessions, meta: response },
    ) => ({
      ...state,
      sessions,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_SESSIONS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default sessions;
