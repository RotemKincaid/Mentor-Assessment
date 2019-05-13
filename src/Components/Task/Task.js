import React from "react";

export default function Task (props) {
    const { id, title, completed } = props;
    return (
      <div className="task-main" key={id}>
        <h4>{title}</h4>
        <h4>{completed}</h4>
        <button onClick={() => props.deleteTask(id)}>X</button>
      </div>
    );
}
