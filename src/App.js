import React, { Component } from "react";
import "./styles.css";
import Todo from "./components/Todo";
import Header from "./layout/Header";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Pick up flowers",
        completed: false
      },
      {
        id: 2,
        title: "Code for 12hrs",
        completed: false
      },
      {
        id: 3,
        title: "Read 40 pages ",
        completed: false
      },
      
    ]
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    });
  };

  AddTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo AddTodo={this.AddTodo} />
          <Todo
            todo={this.state.todos}
            markComplete={this.markComplete}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
