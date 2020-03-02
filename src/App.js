import React from 'react';
import {Component} from 'react'
import './App.css';

class App extends Component {


  state ={

    userInput : ''
  }

  render(){

  
  return (
    <div className="App">

      <input type ='text' onChange ={this.userInputHandler}/>
     
    </div>
  );

  }
}

export default App;
