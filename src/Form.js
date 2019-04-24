import React from "react";

function Form(props) {
  return (
    <div>
      <form onSubmit={props.addProp}>
        <input
          placeholder="name"
          value={props.formProp.task.name}
          onChange={props.handleProp}
          name="name"
        />
        <button>ADD TASK</button>
      </form>
    </div>
  );
}

export default Form;
