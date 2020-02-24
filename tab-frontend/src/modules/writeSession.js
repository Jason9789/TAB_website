import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as sessionsAPI from '../lib/api/sessions';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'writeSession/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'writeSession/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_SESSION,
  WRITE_SESSION_SUCCESS,
  WRITE_SESSION_FAILURE,
] = createRequestActionTypes('writeSession/WRITE_SESSION'); // 포스트 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const writeSession = createAction(
  WRITE_SESSION,
  ({ title, body, tags }) => ({
    title,
    body,
    tags,
  }),
);

// 사가 생성
const writeSessionSaga = createRequestSaga(
  WRITE_SESSION,
  sessionsAPI.writeSession,
);
export function* writeSaga() {
  yield takeLatest(WRITE_SESSION, writeSessionSaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_SESSION]: state => ({
      ...state,
      post: null,
      postError: null,
    }),
    [WRITE_SESSION_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_SESSION_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;
