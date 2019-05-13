import { createStore } from "redux";
// import promiseMiddleware from "redux-promise-middleware";
// import reducer from "./ducks/reducer";

const initialState = {
  task: []
};

export const SET_TASK = "SET_TASK";

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASK:
      return { ...state, task: action.payload };

    default:
      return state;
  }
}

export function setTask(task) {
  return {
    type: SET_TASK,
    payload: task
  };
}

export default createStore(reducer);
