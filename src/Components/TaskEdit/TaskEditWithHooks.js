import React, { useState, useEffect } from "react";
import "../TaskEdit/TaskEditWithHooks.scss";
import { connect } from "react-redux";
import { setTasks, edit } from "../../ducks/reducer";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function TaskEditWithHooks(props) {
  // console.log("PROPS TITLE", props.task.title);
  // const selectedTitle = props.task.title;
  // console.log("PROPS TITLE", props.title);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  // const oldTitle = props.task.title;
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const { title, description, isComplete } = props;
  //     const { id } = props.task;
  //     const result = axios
  //       .patch(
  //         `https://practiceapi.devmountain.com/api/tasks/${id}?title=${title}?description=${description}?completed=${isComplete}`,
  //         {
  //           id: id,
  //           title: title,
  //           desciption: description,
  //           completed: isComplete
  //         }
  //       )
  //       .then(task => {
  //         console.log("task from TODOLIST", task);
  //         // this.props.setTask(task.data);
  //         setData(result.data);

  //         //   this.setState({
  //         //     tasks: task.data
  //         //   });
  //       });
  //   });

  return (
    <div className="with-hooks-main">
      <div className="with-hooks-inner">
        task:
        <h3> {titleInput} </h3>
        {/* console.log("PROPS TITLE", props.title); */}
        <input
          value={titleInput}
          onChange={event => setTitleInput(event.target.value)}
        />
        <button>complete</button>
        <h4>description:</h4>
        <h3>{descriptionInput}</h3>
        <input
          value={descriptionInput}
          onChange={event => setDescriptionInput(event.target.value)}
        />
        <button onClick={() => props.edit()}>save</button>
        <button>
          <Link to="/">cance</Link>l
        </button>
        <button>delete</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  setTasks: setTasks,
  edit: edit
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskEditWithHooks)
);
