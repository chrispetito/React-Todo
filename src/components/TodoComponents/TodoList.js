// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo";

function TodoList (props) {
    return (
        <div className="to-do-list">
        {props.listProp.toDoList.map(todo => (
          <Todo todo={todo} />
        ))}
      </div>
    )
}

export default TodoList;