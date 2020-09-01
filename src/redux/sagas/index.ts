import { put } from "redux-saga/effects";
import { FETCH_POSTS_LIST_SUCCESS } from "../actions";

export function* sagaPostList() {
  yield put({ type: FETCH_POSTS_LIST_SUCCESS, payload: { posts: [] } });
}
