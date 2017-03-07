import React from 'react';
import merge from 'lodash/merge';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleRemoveTodo(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.id);
  }

  render () {
    return (
      <div>
        <button onClick={ this.handleRemoveTodo }>Remove</button>
      </div>
    );
  }
}

export default TodoDetailView;
