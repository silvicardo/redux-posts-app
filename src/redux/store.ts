import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducerPosts } from "./reducers/reducerPosts";
import { reducerSelectedPost } from "./reducers/reducerSelectedPost";
import { reducerIsFetching } from "./reducers/reducerIsFetching";
import { middlewares } from "./middlewares";
import { middlewareSaga } from "./middlewares/middlewareSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import { takeLatest } from "redux-saga/effects";
import { FETCH_POSTS_LIST_REQUEST } from "./actions";
import { sagaPostList } from "./sagas";

const initialState = {
  posts: {
    list: [],
    likedIds: [],
  },
  selectedPost: {
    id: 0,
    comments: {
      list: [],
      likedIds: [],
    },
  },
  isFetching: {
    posts: false,
    comments: false,
  },
};

const rootReducer = combineReducers({
  posts: reducerPosts,
  selectedPost: reducerSelectedPost,
  isFetching: reducerIsFetching,
});

function* rootSaga() {
  yield takeLatest(FETCH_POSTS_LIST_REQUEST, sagaPostList);
}

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  middlewareSaga.run(rootSaga);

  return store;
};
