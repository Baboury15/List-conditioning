import React from 'react'


const ValidationComponent =(props)=>{


    let validation = null 

    if (props.TLength < 5 ){

        validation = 'Text too short '
    } else  {

        validation =' Text too long  '
    }




    return (<div>
 
    <p>This is your paragraphe Length {props.TLength}</p>

                      {validation}

    </div>)
}

export default ValidationComponent;