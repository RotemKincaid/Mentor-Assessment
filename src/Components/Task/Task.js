import React from "react";
import { Link } from "react-router-dom";
import "../Task/Task.scss";

export default function Task(props) {
  const { id, title, completed } = props;
  return (
    <div className="task-main" key={id}>
      {completed ? <div style={{ textDecoration: "lineThrough" }} /> : null}
      <h4 className="title">
        <Link to={`/taskedit/${id}`}>{title}</Link>
      </h4>
      <div className="buttons">
        <button
          onClick={id => props.completeTask(id)}
          style={{ textDecoration: "lineThrough" }}
        >
          Complete
        </button>

        <button onClick={() => props.deleteTask(id)}>X</button>
      </div>
    </div>
  );
}
