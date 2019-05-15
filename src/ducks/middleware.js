import axios from "axios";

export const getAllTasks = () => {
  axios
    .get("https://practiceapi.devmountain.com/api/tasks")
    .then(tasks => tasks.data);
};

export const createTask = title => {
  axios
    .post("https://practiceapi.devmountain.com/api/tasks", {
      title
    })
    .then(tasks => tasks.data);
};

export const deleteTask = id => {
  axios
    .delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    .then(tasks => tasks.data);
};

export const editTask = (id, payload) => {
  axios
    .patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, payload)
    .then(tasks => tasks.data);
};

export const completeTask = id => {
  axios
    .put(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    .then(tasks => tasks.data);
};
