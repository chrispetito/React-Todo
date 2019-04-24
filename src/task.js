import React from 'react';

function Task (props) {
    return (
        <div className = 'task-card'>
        <p>{props.task.name}</p>
        </div>
    )
}

export default Task;