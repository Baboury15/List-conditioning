import React from 'react';
import {Component} from 'react'
import './App.css';
import ValidationComponent from './Validation/validationComponent'
import CharComponent from './CharCOmponent/charComponent'


class App extends Component {


  state = {
   userInput : ''
  }

  userInputHandler =(event) =>{

    this.setState({
      userInput :event.target.value
    })
  }

  delChar = ( index)=>{
    const chardel= this.state.userInput.split('');
    chardel.splice(index ,1)
    const updateText = chardel.join('')
    this.setState({
      userInput: updateText

    })

  }
  render(){
     const charList = this.state.userInput.split('').map((p, index) =>{
       return <CharComponent 
       charactere ={p}
       key={index}
       cliked={()=>this.delChar(index)}
       />
     })

    
  
    
  
  return (
    <div className="App">

      <input type ='text' onChange ={this.userInputHandler}/>

      <ValidationComponent TLength = {this.state.userInput.length}/>
      {charList }
     
     
    </div>
  );

  }
}

export default App;
