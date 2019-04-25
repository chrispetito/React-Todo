import React from "react";

function ToDoForm(props) {
  return (
    <div className="button-form">
      <form onSubmit={props.addProp}>
        <input
          placeholder="Compose Task"
          value={props.formProp.todo.task}
          onChange={props.handleProp}
          name="task"
          key="task"
        />
        <button>ADD TASK</button>
        <button onClick={props.clearProp}>Clear Completed</button>
      </form>
    </div>
  );
}

export default ToDoForm;
