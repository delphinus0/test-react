import React, { Component } from 'react';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
    <Todo
    name="sunrise" 
    age={23} user="sunrise" 
    done={true} 
    description="cleaning my room on weekends">
    </Todo>
    )
  }
}

export default App;
