import React, { Component } from "react";
import { connect } from "react-redux";
import { setTask } from "../../ducks/store";
import { Link } from "react-router-dom";
import Task from "../Task/Task";
import "../TodoList/TodoList.scss";
import axios from "axios";
import Form from "../Form/Form";
import TaskEdit from "../TaskEdit/TaskEdit";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      addedTask: "",
      isComplete: false
    };
  }
  componentDidMount() {
    this.getAllTasks();
  }
  deleteTask = id => {
    axios
      .delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
      .then(tasks => {
        this.props.setTask(tasks.data);
        this.setState({
          tasks: tasks.data
        });
      });
  };

  completeTask = id => {
    axios
      .put(`https://practiceapi.devmountain.com/api/tasks/${id}`)
      .then(tasks => {
        // const completed =
        this.props.setTask(tasks.data);

        this.setState({
          isComplete: true
        });
      });
  };

  EditTask = () => {
    const { id, title, description, isComplete } = this.props;
    // const { id } = this.props.task;
    axios
      .patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
        id: id,
        title: title,
        desciption: description,
        completed: isComplete
      })
      .then(task => {
        this.props.setTask(task.data);
        //   this.setState({

        //   })
      });
  };

  getAllTasks = () => {
    axios.get("https://practiceapi.devmountain.com/api/tasks").then(tasks => {
      this.props.setTask(tasks.data);
      this.setState({
        tasks: tasks.data
      });
    });
  };

  render() {
    console.log("This dot props", this.props.task);
    const { tasks } = this.state;

    const mappedTasks = tasks.map(task => {
      return (
        <div key={task.id}>
          <Task
            title={task.title}
            description={task.description}
            completed={task.completed}
            id={task.id}
            deleteTask={this.deleteTask}
            completeTask={this.completeTask}
          />
        </div>
      );
    });

    return (
      <div className="todo-main">
        {console.log("tasks below")}
        {console.log(this.state.tasks)}
        <Form getAllTasks={this.getAllTasks} />
        <div className="todo-inner">
          {/* <TaskEdit editTask={this.editTask} /> */}
          {/* <button>
            <Link to="/taskedit">Add new To-do</Link>
          </button> */}
          <div className="list">{mappedTasks}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
const mapDispatchToProps = {
  setTask: setTask
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
