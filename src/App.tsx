import React from "react";
import { useDispatch } from "react-redux";
import { FETCH_POSTS_LIST_REQUEST } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: FETCH_POSTS_LIST_REQUEST })}>
        DISPATCHONE
      </button>
    </div>
  );
}

export default App;
