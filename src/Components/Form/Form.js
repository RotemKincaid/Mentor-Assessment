import React, { Component } from "react";
import { connect } from "react-redux";
import { setTask } from "../../ducks/store";
import "../Form/Form.scss";
import axios from "axios";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      isComplete: false
    };
  }

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

  createTask = () => {
    const { title, description, isComplete } = this.state;
    console.log(this.props);

    const { id } = this.props.task;
    axios
      .post("https://practiceapi.devmountain.com/api/tasks", {
        id: id,
        title: title,
        desciption: description,
        completed: isComplete
      })
      .then(tasks => {
        this.props.setTask(tasks.data);

        this.setState({
          title: "",
          description: ""
        });
      });
  };
  render() {
    return (
      <div className="form-main">
        <div className="form-inner">
          <h3>
            <Link to="/">Back to Tasks</Link>
          </h3>
          <h6>Task</h6>
          <input
            placeholder="enter new task here..."
            value={this.state.title}
            className="title-input"
            onChange={this.titleHandler}
          />
          <button
            className="complete-btn"
            onClick={e => this.completeHandler(e)}
          >
            Complete
          </button>
          <h6>Description</h6>
          <input
            placeholder="task description..."
            value={this.state.description}
            className="desc-input"
            onChange={this.descriptionHandler}
          />
          <br />
          <div className="btns">
            <button onClick={e => this.createTask(e)} className="save-btn">
              Save
            </button>
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
  setTask: setTask
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);