import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";

const todos = [];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: todos, 
      todo: {
        task: '',
        id: Date.now(),
        completed: false,
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
    if (!this.state.todo.task) return;
    this.setState({
      toDoList: [...this.state.toDoList, this.state.todo],
      todo: {
        task: "",
        id: Date.now(),
        completed: false,
      }
    });
  };

  toggleComplete = id => {
    this.setState({
      toDoList: this.state.toDoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };

  clearCompleted = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h2>TO-DO LIST</h2>
        </div>
        <div className="list-container">
          <TodoList
            listProp={this.state}
            toggleComplete={this.toggleComplete}
          />
        </div>
        <div className="form-container">
          <ToDoForm
            handleProp={this.handleChanges}
            addProp={this.addToDo}
            formProp={this.state}
            clearProp={this.clearCompleted}
          />
        </div>
      </div> //container
    );
  }
}

export default App;
