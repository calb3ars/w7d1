import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <ul>
         { this.props.todos.map(todo => <TodoListItem
           todo={todo}
           key={todo.id}
           removeTodo={ this.props.removeTodo }
           receiveTodo={ this.props.receiveTodo }
           /> ) }
         <TodoForm receiveTodo={ this.props.receiveTodo } />
      </ul>
    )
  }
}
export default TodoList;
