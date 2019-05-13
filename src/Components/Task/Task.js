import React, { Component } from "react";
import { connect } from "react-redux";
import { setTask } from "../../ducks/store";
import axios from "axios";

class Task extends Component {
  deleteTask = e => {
    const { id } = this.props.task;
    axios
      .delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
      .then(tasks => {
        console.log("tasks(response)", tasks);
        this.props.setTask(tasks.data);
      });
  };
  render() {
    const { id, title, completed } = this.props.task;
    console.log(this.props);

    return (
      <div className="task-main" key={id}>
        <h4>{title}</h4>
        <h4>{completed}</h4>
        <button onClick={e => this.deleteTask(e)}>X</button>
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
)(Task);
