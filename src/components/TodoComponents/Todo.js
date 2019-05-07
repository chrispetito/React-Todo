import React from "react";

function Todo(props) {
  let classNames = "todo";
  if (props.todo.completed === true) {
    classNames += " completed";
  }

  function updateStatus() {
    props.toggleComplete(props.todo.id);
  }
  return (
    <div id={props.todo.id} className={classNames} onClick={updateStatus}>
      <p>{props.todo.task}</p>
    </div>
  );
}

export default Todo;
