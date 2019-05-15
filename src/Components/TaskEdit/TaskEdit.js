import React, { Component } from "react";
import { connect } from "react-redux";
import { setTasks } from "../../ducks/reducer";
import "../TaskEdit/TaskEdit.scss";

import axios from "axios";
import { Link } from "react-router-dom";

class TaskEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      isComplete: false
    };
  }

  componentDidMount() {}

  titleHandler = e => {
    this.setState({
      title: e.target.value
    });
  };

  descriptionHandler = e => {
    this.setState({
      description: e.target.value
    });
  };

  completeHandler = e => {
    this.setState({
      isComplete: true
    });
  };

  editTask = id => {
    const { title, description, isComplete } = this.state;
    // const { id } = this.props.task;
    let updatedTask = {
      title: title,
      description: description,
      isComplete: isComplete
    };
    axios
      .patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, updatedTask)
      .then(task => {
        this.props.setTasks(task.data);
        //   this.setState({

        //   })
      });
  };

  //   createTask = () => {
  //     const { title, description, isComplete } = this.state;
  //     const { id } = this.props.task;
  //     axios
  //       .post("https://practiceapi.devmountain.com/api/tasks", {
  //         id: id,
  //         title: title,
  //         desciption: description,
  //         completed: isComplete
  //       })
  //       .then(tasks => {
  //         this.props.setTask(tasks.data);

  //         this.setState({
  //           title: "",
  //           description: ""
  //         });
  //       });
  //   };

  render() {
    // var required = true;
    const { title, description } = this.props.task;
    console.log(this.props);

    return (
      <div className="form-main">
        <div className="form-inner">
          <h3>
            <Link to="/">Back to Tasks</Link>
          </h3>
          <h6>Task</h6>
          {title}
          <input
            // ref={title}
            value={title}
            className="title-input"
            onChange={this.titleHandler}
            // required={required}
          />
          <button
            className="complete-btn"
            onClick={e => this.completeHandler(e)}
          >
            Complete
          </button>
          <h6>Description</h6>
          <input
            placeholder="add description..."
            // ref={this.props.description}
            value={description}
            className="desc-input"
            onChange={this.descriptionHandler}
          />
          <br />
          <div className="btns">
            {this.state.title ? (
              <button
                onClick={() => this.editTask(this.props.id)}
                className="save-btn"
              >
                <Link to="/">Save</Link>
              </button>
            ) : (
              <div>Please insert a title</div>
            )}
            <button className="cancel-btn">Cancel</button>
            <button onClick={this.deleteTask} className="delete-btn">
              Delete
            </button>
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
)(TaskEdit);
