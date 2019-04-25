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
          className='task-input'
        />
        <button className = 'add-button'>ADD TASK</button>
        <button className='clear-button' onClick={props.clearProp}>CLEAR COMPLETED</button>
      </form>
    </div>
  );
}

export default ToDoForm;
