import React from 'react';

function Todo (props) {
    return (
        <div className = 'task-card'>
        <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;