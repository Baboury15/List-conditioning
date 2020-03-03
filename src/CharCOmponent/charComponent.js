import React from 'react'


const CharComponent =(props)=>{
const  Style= {
    display :'inline-block',
    padding: '16px',
    textAlign:'center',
    margin: '16px',
    border: '1px solid black '
}

    return (
    <div style={Style} onClick={props.cliked}>

          {props.charactere}   {props.spray}

    </div>)

}

export default CharComponent;