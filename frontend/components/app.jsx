import React from 'react';
import TodoList from './todo_list/todo_list';
import TodoListContainer from './todo_list/todo_list_container';

class App extends React.Component {
  debugger
  render() {
    return(
      <div>
        <h1>Todo List (Inside App Component)</h1>
        <TodoListContainer />
      </div>
    )
  }
}

export default App;
