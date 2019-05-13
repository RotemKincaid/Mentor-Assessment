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
  deleteTask = id => {
    
    axios
      .delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
      .then(tasks => {
        const newTasks = this.props.setTask(tasks.data)
        this.setState({
          tasks: newTasks.payload
        })
  
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
          />
        </div>
      );
    });

    return (
      <div className="todo-main">
        {/* {console.log('tasks below')}
        {console.log(this.state.tasks)} */}
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
