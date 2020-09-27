import React, { Component } from "react";


class AddTodo extends Component {

  state = {
    title: ''
  }
  
  onChange = (e) => {
    this.setState({ title: e.target.value }); //done
  };
  
  onsubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: '' });
  };

  

  render() {
    return (
      <form className="form-container" onSubmit={this.onsubmit}> 
        <input
          className="input-field"
          type="text"
          placeholder="Add your todo"
          
          value={this.state.title} //done
          onChange={this.onChange}
        />

        <input 
        className="input-btn" 
        type="submit"
        value="submit" />
      </form>
    );
  }
}

export default AddTodo;
