const express = require("express");
const app = express();
require("dotenv").config();
// const massive = require("massive");
app.use(express.json());
const controller = require("./controller");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

// massive(CONNECTION_STRING).then(db => {
//   app.set("db", db);
//   console.log("connected to db");
// });

// GET -
app.get("https://practiceapi.devmountain.com/api/tasks", controller.getTasks);
// Returns an array of all tasks.

// POST -
app.post(
  "https://practiceapi.devmountain.com/api/tasks",
  controller.createTask
);
// Creates a new task.
// Requires a title property on the request body that equals a string.
// Returns an array of all tasks.

// PATCH -
app.patch(
  "https://practiceapi.devmountain.com/api/tasks/:id",
  controller.updateTask
);
// Updates a task.
// Requires an id parameter of the task you want to patch.
// Requires a request body with a property or properties you want to update.
// Valid properties: title - string, description - string, completed - boolean
// Returns an array of all tasks.

// DELETE -
app.delete(
  "https://practiceapi.devmountain.com/api/tasks/:id",
  controller.deleteTask
);
// Deletes a task.
// Requires an id parameter of the task you want to delete.
// Returns an array of all tasks.

// PUT -
app.put(
  "https://practiceapi.devmountain.com/api/tasks/:id",
  controller.markComplete
);
// Marks a task as completed.
// Requires an id parameter of the task you want to complete.
// Returns an array of all tasks.

app.listen(SERVER_PORT, console.log(`Server listening on port ${SERVER_PORT}`));
