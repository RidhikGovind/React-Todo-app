import React, { Component } from "react";

class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "1px",
      fontWeight: "600",

      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todo-list">
        <div style={this.getStyle()}>
          <p style={{ textAlign: "left" }}>
            <input
              className=""
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
            />{" "}
            {title}{" "}
            <button
              className="delete-btn"
              onClick={this.props.deleteItem.bind(this, id)}
            >
              X
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default TodoItem;
