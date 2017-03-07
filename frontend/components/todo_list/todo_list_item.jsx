import React from 'react';
import merge from 'lodash/merge';
import TodoDetailViewContainer from './todo_detail_view_container';
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    }
    this.handleChangeTodo = this.handleChangeTodo.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  }

  handleChangeTodo(e) {
    e.preventDefault();
    let newTodo = merge({}, this.props.todo);
    if (newTodo.done) {
      newTodo.done = false;
    } else {
      newTodo.done = true;
    };
    this.props.receiveTodo(newTodo);
  }

  handleDetail(e) {
    e.preventDefault();
    this.setState({
      detail: !this.state.detail
    });
  }

  render () {
    let doneState = this.props.todo.done === true ? "done" : "undone";
    return (
      <div>
        <li onClick={ this.handleDetail }>{ this.props.todo.title }</li>
        <button onClick={ this.handleChangeTodo }>{ doneState }</button>
        { this.state.detail ? <TodoDetailViewContainer id={ this.props.todo.id }/> : "" }
      </div>
    );
  }
}

export default TodoListItem;
