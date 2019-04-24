import React from "react";
import Task from "./Task";
import Form from "./Form";

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
        completed: false
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
        name: "",
        id: "",
        completed: false
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
        <Form
          handleProp={this.handleChanges}
          addProp={this.addTask}
          formProp={this.state}
        />
      </div>
    );
  }
}

export default App;
