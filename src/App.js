import React from "react";
import Todo from "./Todo";
import ToDoForm from "./Form";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: todos,
      todo: {
        task: "",
        id: 1,
        completed: false
      }
    };
  }

  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value
      }
    });
  };

  addToDo = event => {
    event.preventDefault();
    this.setState({
      toDoList: [...this.state.toDoList, this.state.todo],
      todo: {
        task: "",
        id: 1,
        completed: false
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        </div>

        <div className="to-do-list">
          {this.state.toDoList.map(todo => (
            <Todo todo={todo} />
          ))}
        </div>
        <ToDoForm
          handleProp={this.handleChanges}
          addProp={this.addToDo}
          formProp={this.state}
        />
      </div>
    );
  }
}

export default App;
