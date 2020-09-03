import { put, call } from "redux-saga/effects";
import { FETCH_POSTS_LIST_SUCCESS, FETCH_POSTS_LIST_FAILURE } from "../actions";

// const apiList = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json()) //JSON.parse
//     .then((result) => result);
// };

const apiList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

export function* sagaPostList() {
  try {
    //API
    const response = yield call(apiList);
    yield put({ type: FETCH_POSTS_LIST_SUCCESS, payload: response });
  } catch (e) {
    yield put({
      type: FETCH_POSTS_LIST_FAILURE,
      payload: { message: e.message },
    });
  }
}
