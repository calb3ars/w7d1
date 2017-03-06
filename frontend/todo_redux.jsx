import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  render() {
    return (
      <h1>Todos App</h1>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let rootEl = document.getElementById('content');
  ReactDOM.render(<Root />, rootEl);
})
