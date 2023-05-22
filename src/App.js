import React, {Component } from 'react';
import './App.css';

class App extends Component{
  state={
    myString:"Hello",
    myStringOne:123,
    myStringTwo:true
  };
  render(){
    return(
      <div className='App'>
        <h1>Welcome</h1>
        <h1>{this.state.myString}</h1>
        <h1>{this.state.myStringOne}</h1>
        <h1>{this.state.myStringTwo}</h1>
      </div>
    );
  }
}

export default App;
