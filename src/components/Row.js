
import React, { useState, } from 'react'
import '../styleSheets/row.css'
import {MOVIES} from '../data/movies'
import PopUp from './PopUp'

function Row({title,id}) {

    const [buttonPop,setButtonPop]=useState(false)
    const [value,setValue]=useState(null)

    const handleClick= (_id)=>{
        setButtonPop(true)
        setValue(_id)
    
    }
    
    return (
        <div className='row'>
            <h1 className='row_name'>{title}</h1>
            <div className='row_posters'>

                <img className='row_poster' onClick={()=>handleClick(id)} src={MOVIES[id].image }/>
                <img className='row_poster' onClick={()=>handleClick(id+1)} src={MOVIES[id+1].image }/>
                <img className='row_poster' onClick={()=>handleClick(id+2)} src={MOVIES[id+2].image }/>
                <img className='row_poster' onClick={()=>handleClick(id+3)} src={MOVIES[id+3].image }/>
                <img className='row_poster' onClick={()=>handleClick(id+4)} src={MOVIES[id+4].image }/>
                <PopUp value={value} trigger={buttonPop} setTrigger={setButtonPop}></PopUp>
            </div>
        </div>
    )
}


export default Row

