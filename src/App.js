import React from "react";
import Task from "./task";

const tasks = [{ name: "example", id: "example", completed: "test" }];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasksList: tasks,
      task: {
        name: "",
        id: "",
        completed: ""
      }
    };
  }

  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      task: {
        ...this.state.task,
        [event.target.name]: event.target.value
      }
    });
  };

  addTask = event => {
    event.preventDefault();
    this.setState({
      tasksList: [...this.state.tasksList, this.state.task],
      task: {
        name: ' ',
        id: '',
        completed: ''
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <div className="to-do-list">
          {this.state.tasksList.map(task => (
            <Task task={task} />
          ))}
        </div>
        <form onSubmit={this.addTask}>
          <input
            placeholder="name"
            value={this.state.task.name}
            onChange={this.handleChanges}
            name="name"
          />
          <button>ADD TASK</button>
        </form>
      </div>
    );
  }
}

export default App;
