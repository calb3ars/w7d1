import React from 'react';
import uniqueId from '../../util/unique_id.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleReceiveTodo = this.handleReceiveTodo.bind(this);
  }

  handleTitleChange(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  }

  handleBodyChange(e) {
    e.preventDefault();
    this.setState({
      body: e.target.value
    });
  }

  handleReceiveTodo(e) {
    e.preventDefault();
    this.props.receiveTodo({
      id: uniqueId(),
      body: this.state.body,
      title: this.state.title,
      done: false
    });
  }

  render() {
    return(
      <div>
        <br/>
        <form>
          <label>Title</label>
          <br/>
          <input type="text" onChange={this.handleTitleChange}></input>
          <br/>
          <label>Body</label>
          <br/>
          <input type="text" onChange={this.handleBodyChange}></input>
          <br/>
          <input type="submit" onClick={this.handleReceiveTodo}></input>
        </form>
      </div>
    )
  }
}

export default TodoForm;
