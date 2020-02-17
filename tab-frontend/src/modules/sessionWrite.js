// import { createAction, handleActions } from 'redux-acdtions';
// import createRequestSage, {
//   createRequestActionTypes,
// } from '../lib/createRequestSaga';
// import * as sessionAPI from '../lib/api/sessions';
// import { takeLatest } from 'redux-saga/effects';
// import write from './write';

// const INITIALIZE = 'sessionWrite/INITIALIZE'; // 모든 내용 초기화
// const CHANGE_FIELD = 'sessionWrite/CHANGE_FIELD'; // 특정 key 값 바꾸기
// const [
//   SESSIONWRITE_POST,
//   SESSIONWRITE_SUCCESS,
//   SESSIONWRITE_POST_FAILURE,
// ] = createRequestActionTypes('sessionWrite/SESSIONWRITE_POST'); // 포스트 작성

// export const initialize = createAction(INITIALIZE);
// export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
//   key,
//   value,
// }));

// export const sessionWritePost = createAction(
//   SESSIONWRITE_POST,
//   ({ title, body, tags }) => ({
//     title,
//     body,
//     tags,
//   }),
// );

// // 사가 생성
// const sessionWritePostSaga = createRequestSage(
//   SESSIONWRITE_POST,
//   sessionAPI.sessionWritePost,
// );
// export function* sessionWriteSaga() {
//   yield takeLatest(SESSIONWRITE_POST, sessionWritePostSaga);
// }

// const initialState = {
//   title: '',
//   body: '',
//   tags: [],
//   post: null,
//   postError: null,
// };

// const sessionWrite = handleActions(
//   {
//     [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
//     [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
//       ...state,
//       [key]: value, // 특정 key 값을 업데이트
//     }),
//     [SESSIONWRITE_POST]: state => ({
//       ...state,
//       // session과 sessionError를 초기화
//       post: null,
//       postError: null,
//     }),
//     // 포스트 작성 성공
//     [SESSIONWRITE_SUCCESS]: (state, { payload: post }) => ({
//       ...state,
//       post,
//     }),
//     // 포스트 작성 실패
//     [SESSIONWRITE_POST_FAILURE]: (state, { payload: postError }) => ({
//       ...state,
//       postError,
//     }),
//   },
//   initialState,
// );

// export default sessionWrite;
