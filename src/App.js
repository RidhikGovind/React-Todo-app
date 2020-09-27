import React, { Component } from "react";
import "./styles.css";
import Todo from "./components/Todo";
import Header from "./layout/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Read a book ",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Code for 2 hrs",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Workout ",
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
      id: uuidv4(),
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
