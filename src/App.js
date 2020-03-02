import React from 'react';
import {Component} from 'react'
import './App.css';
import ValidationComponent from './Validation/validationComponent'

class App extends Component {


  state ={
   userInput : ''
  }

  userInputHandler =(e) =>{

    this.setState({
      userInput : e.target.value
    })
  }
  render(){

  
  return (
    <div className="App">

      <input type ='text' onChange ={this.userInputHandler}/>

      <ValidationComponent TLength = {this.state.userInput.length}/>
     
    </div>
  );

  }
}

export default App;
