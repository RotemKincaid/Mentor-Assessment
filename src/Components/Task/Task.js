import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "../Task/Task.scss";
import { connect } from "react-redux";
import { setTasks, complete, edit } from "../../ducks/reducer";
import axios from "axios";
import EditTaskWithHooks from "../TaskEdit/TaskEditWithHooks";

class Task extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      completed: false,
      isEditing: false
    };
  }
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
  completeTask = () => {
    // const { title, description, completed } = this.props;
    // const { id } = this.props.task;
    console.log("LABEL", this.props);

    this.props.complete();

    // axios
    //   .patch(
    //     `https://practiceapi.devmountain.com/api/tasks/${id}?title=${title}?description=${description}?completed=${completed}`,
    //     {
    //       id: id,
    //       title: title,
    //       desciption: description,
    //       completed: completed
    //     }
    //   )
    //   .then(task => {
    //     console.log("task from TODOLIST", task);
    //     this.props.setTask(task.data);
    this.setState({
      completed: !this.state.completed
    });
    // });
  };

  editTask = id => {
    this.props.edit();
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  //   axios
  //     .put(`https://practiceapi.devmountain.com/api/tasks/${id}`)
  //     .then(tasks => {
  //       // const completed =
  //       console.log("tasks from Task", tasks.data);
  //       this.props.setTasks(tasks.data);

  //       this.setState({
  //         completed: !this.state.completed
  //       });
  //       // this.editHandler();
  //     });
  // };
  editHandler = e => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  completeHandler = () => {
    this.setState({
      completed: !this.state.completed
    });
    console.log(this.state.completed);
  };

  // changeHandler = e => {
  //   this.setState({
  //     newVal: e.target.value
  //   });
  // };

  render() {
    // console.log(this.state.isEditing);

    const { id, title, completed } = this.props;
    // console.log(this.props.title);
    return (
      <div className="task-main" key={id}>
        {this.state.completed ? (
          <div
            style={{
              textDecoration: this.state.completed ? "lineThrough" : ""
            }}
            // onClick={this.props.completeTask}
          />
        ) : (
          <div />
        )}

        {completed ? (
          <span
            style={{
              textDecorationLine: "line-through",
              textDecorationStyle: "solid"
            }}
          >
            {title}
          </span>
        ) : (
          <div className="title" onClick={() => this.editHandler}>
            <Link to={`/newtaskedit/${id}`}>{title}</Link>
          </div>
        )}
        <div className="buttons">
          {this.state.isEditing ? (
            <EditTaskWithHooks editTask={this.editTask} />
          ) : null}
          {/* // <button>
          //   <Link to="/newtaskedit">to edit view ></Link>
          // </button>
          } */}
          {/* {this.state.isEditing ? (
            <button onClick={this.props.editTask()}>save edit</button>
          ) : (
            <button onClick={e => this.renderEditView()}>Edit</button>
          )}
          {!this.state.isEditing ? (
            <input className="task-edit" onChange={e => this.editHandler(e)} />
          ) : null} */}
          {/* <div
            className="task-main"
            style={completed ? { textDecoration: "line-through" } : {}}
          >
            Task{title}
            <button onClick={() => this.props.deleteTask(id)}>X</button> */}
          {/* </div> */}
          <button onClick={() => this.completeHandler()}>Complete</button>

          <button onClick={() => this.props.deleteTask(id)}>X</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  setTasks: setTasks,
  complete: complete,
  edit: edit
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
