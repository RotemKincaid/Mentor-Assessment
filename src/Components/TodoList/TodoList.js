import React, { Component } from "react";
import { connect } from "react-redux";
import { setTasks, edit, complete, getAll } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import Task from "../Task/Task";
import "../TodoList/TodoList.scss";
import axios from "axios";
import Form from "../Form/Form";
import TaskEdit from "../TaskEdit/TaskEdit";
import TaskEditWithHooks from "../TaskEdit/TaskEditWithHooks";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      addedTask: "",
      isComplete: false,
      isEditing: false,
      newVal: ""
    };
  }
  componentDidMount() {
    this.getAllTasks();
  }

  changeEditMode = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  updateValue = e => {
    this.setState({
      isEditing: false,
      newVal: e.target.value
    });
  };

  renderEditView = () => {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          // onChange={event => setTitleInput(event.target.value)}
          // ref="theTextInput"
        />
        <button onClick={this.changeEditMode}>X</button>
        <button onClick={this.updateValue}>save edit</button>
      </div>
    );
  };

  renderDefaultView = () => {
    return (
      <div>
        <Task onDoubleClick={this.changeEditMode}>{this.state.value}</Task>
        {}
      </div>
    );
  };

  deleteTask = id => {
    axios
      .delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
      .then(tasks => {
        this.props.setTasks(tasks.data);
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

  editTask = (id, title, description, isComplete) => {
    this.props.edit(id, title, description, isComplete);
  };

  editHandler = e => {
    this.setState({
      isEditing: true
    });
  };

  getAllTasks = () => {
    axios.get("https://practiceapi.devmountain.com/api/tasks").then(tasks => {
      console.log("Where are my tasks???", tasks.data);
      // const taskList =
      this.props.setTasks(tasks.data);
      this.setState({
        tasks: tasks.data.reverse()
      });
    });
  };

  render() {
    console.log("This dot props", this.props);
    const { tasks } = this.state;
    const { task } = this.props;

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
            renderEditView={this.renderEditView}
            editTask={this.editTask}
            changeEditMode={this.changeEditMode}
          />
        </div>
      );
    });

    return (
      <div className="todo-main">
        {console.log("tasks below")}
        {console.log(this.state.tasks)}

        <div className="form-mappedtasks">
          <Form getAllTasks={this.getAllTasks} />
          <div className="todo-inner">
            <div className="list">{mappedTasks}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
const mapDispatchToProps = {
  setTasks: setTasks
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
