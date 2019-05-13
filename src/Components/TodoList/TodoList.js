import React, { Component } from "react";
import { connect } from "react-redux";
import { setTask } from "../../ducks/store";
import { Link } from "react-router-dom";
import Task from "../Task/Task";
import "../TodoList/TodoList.scss";
import axios from "axios";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      addedTask: ""
    };
  }
  componentDidMount() {
    this.getAllTasks();
  }

  getAllTasks = () => {
    axios.get("https://practiceapi.devmountain.com/api/tasks").then(tasks => {
      console.log("the tasks?", tasks);
      this.props.setTask(tasks.data);
      this.setState({
        tasks: tasks.data
      });
    });
  };

  render() {
    console.log(this.props);
    const { task } = this.props;

    const mappedTasks = task.map(task => {
      return (
        <div key={task.id}>
          <Task
            title={task.title}
            description={task.description}
            completed={task.completed}
          />
        </div>
      );
    });

    return (
      <div className="todo-main">
        <div className="todo-inner">
          <h1>TO-DO:</h1>
          <button>
            <Link to="/form">Add new To-do</Link>
          </button>
          <div className="list">{mappedTasks}todos here</div>
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
