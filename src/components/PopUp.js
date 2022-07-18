import React from 'react'
import "../styleSheets/PopUp.css"
import { MOVIES } from '../data/movies'

function PopUp(props) {

    return (props.trigger)? (
        <div className='popup'>
            <button className='close_btn' onClick={()=>props.setTrigger(false)}>X</button>
            <div className="background">
                <img className='image' src={MOVIES[props.value].image}/>
                <h1 className='name'>{MOVIES[props.value].name}</h1>
            </div>            
            <audio className="audio" controls autoPlay>
  
                <source src={MOVIES[props.value].music} type="audio/mpeg"/>
                OOps!!! Your browser does not support the audio element.
            </audio> 
        
            {props.children}
        </div>
    ):""
}

export default PopUp
