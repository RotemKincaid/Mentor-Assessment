import {
  getAllTasks,
  createTask,
  deleteTask,
  completeTask,
  editTask
} from "./middleware";
const initialState = {
  tasks: [],
  loading: false
};

export const SET_TASKS = "SET_TASKS";

export const GET_TASKS = "GET_TASKS";
export const GET_TASKS_PENDING = "GET_TASKS_PENDING";
export const GET_TASKS_FULFILLED = "GET_TASKS_FULFILLED";

export const DELETE_TASK = "DELETE_TASK";
export const DELETE_TASK_PENDING = "DELETE_TASK_PENDING";
export const DELETE_TASK_FULFILLED = "GET_TASK_FULLFILLED";

export const COMPLETE_TASK = "COMPLETE_TASK";
export const COMPLETE_TASK_PENDING = "COMPLETE_TASK_PENDING";
export const COMPLETE_TASK_FULFILLED = "COMPLETE_TASK_FULFILLED";

export const EDIT_TASK = "EDIT_TASK";
export const EDIT_TASK_PENDING = "EDIT_TASK_PENDING";
export const EDIT_TASK_FULFILLED = "EDIT_TASK_FULFILLED";

export const CREATE_TASK = "CREATE_TASK";
export const CREATE_TASK_PENDING = "CREATE_TASK_PENDING";
export const CREATE_TASK_FULFILLED = "CREATE_TASK_FULFILLED";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, loading: false, tasks: action.payload };

    case GET_TASKS_PENDING:
    case DELETE_TASK_PENDING:
    case COMPLETE_TASK_PENDING:
    case CREATE_TASK_PENDING:
    case EDIT_TASK_PENDING:
      return { ...state, loading: true };

    case GET_TASKS_FULFILLED:
    case DELETE_TASK_FULFILLED:
    case COMPLETE_TASK_FULFILLED:
    case EDIT_TASK_FULFILLED:
    case CREATE_TASK_FULFILLED:
      return { ...state, loading: false, tasks: action.payload };

    default:
      return state;
  }
}

export function setTasks(newTasks) {
  return {
    type: SET_TASKS,
    payload: newTasks
  };
}

export const getAll = () => {
  return {
    type: GET_TASKS,
    payload: getAllTasks()
  };
};

export function addTask(newTask) {
  return {
    type: CREATE_TASK,
    payload: createTask(newTask)
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_TASK,
    payload: deleteTask(id)
  };
}

export function complete(id) {
  return {
    type: COMPLETE_TASK,
    payload: completeTask
  };
}

export function edit(id, edits) {
  return {
    type: EDIT_TASK,
    payload: editTask(id, edits)
  };
}
