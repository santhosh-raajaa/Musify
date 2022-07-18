import React from 'react'
import { MOVIES } from '../data/movies'


function NameRow(id) {
    return (
        <div className='nameRow'>
            <div>
                <h2>{MOVIES[id].name}</h2>
            </div>
            <div>
                <h2>{MOVIES[id+1].name}</h2>
            </div>
            <div>
                <h2>{MOVIES[id+2].name}</h2>
            </div>
            <div>
                <h2>{MOVIES[id+3].name}</h2>
            </div>
            <div>
                <h2>{MOVIES[id+4].name}</h2>
            </div>
        </div>
    )
}

export default NameRow
