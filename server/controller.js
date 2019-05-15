const tasks = [];

module.exports = {
  getTasks: (req, res) => {
    // const db = req.app.get("db");

    // db.get_tasks()
    // .then(tasks => {
    res.status(200).send(tasks);
    // })
    // .catch(err => console.log("catched", err));
  },

  createTask: (req, res) => {
    // const db = req.app.get("db");
    const { title, description, completed } = req.body;

    const newTask = { title, description, completed };

    tasks.push(newTask);
    id++;

    // db.create_task([title, description, completed])
    //   .then(tasks => {
    res.status(200).send(tasks);
    // })
    // .catch(err, console.log("errorrrrr", err));
  },

  updateTask: (req, res) => {
    // const db = req.app.get("db");
    const { id } = req.params;
    const { title, description, completed } = req.query;
    let index = tasks.findIndex(el => el.id === +id);

    if (index !== 1) {
      tasks[index].title = title;
      tasks[index].description = description;
      tasks[index].completed = completed;
    } else {
      res.status(404).send("ID not found");
    }

    // if (!id) {
    //   return res
    //     .status(400)
    //     .send({ message: "Invalid or missing 'id' on request" });
    // }

    // db.update_task([title, description, completed, id])
    //   .then(tasks => {
    //     res.status(200).send(tasks);
    //   })
    //   .catch(err => {
    //     console.log("error in sql file", err);
    //     res.status(500).send({ message: "an error occured on the server" });
    //   });
  },
  deleteTask: (req, res) => {
    const { id } = req.params;
    let index = tasks.findIndex(el => el.id === +id);

    if (index !== -1) {
      tasks.splice(index, 1);
      res.status(200).send(tasks);
    } else {
      res.status(404).send("could not find id");
    }

    // if (!parseInt(id)) {
    //   return res
    //     .status(400)
    //     .send({ message: "invalid or missing id on request" });
    // }
    // id = parseInt(id);
    // const db = req.app.get("db");

    // db.delete_task([id])
    //   .then(tasks => {
    //     res.status(200).send(tasks);
    //   })
    //   .catch(err => {
    //     console.log("an error on SQL file", err);
    //     res.status(500).send({ message: "an error on the serverrrr" });
    //   });
  },
  markComplete: (req, res) => {
    const { id } = req.params;
    // const db = req.app.get("db");
    const { completed } = req.query;

    // db.mark_complete([id])
    // .then(task => {
    if (id !== -1) {
      completed = true;
      res.status(200).send(task);
    } else {
      res.status(500).send("Something went wrong.");
    }

    // })
    // .catch(err => {
    //   console.log("---->>> error on the server", err);
    // });
  }
};
