import React, { useEffect, useState } from 'react'
import '../styleSheets/banner.css'
import { SONGS } from '../data/songs'


function Banner() {
    
    // Math.floor(Math.random() * 7)

    var [idNum,setIdNum]=useState(Math.floor(Math.random() * 7))

    const Prev=()=>{
        
        if (idNum <=0){
            idNum=SONGS.length
        };
        idNum--
        setIdNum(idNum);
    }
    const Next=()=>{
        idNum++;
        if (idNum >6){
            idNum=0
        };
        setIdNum(idNum);
    }

    function truncate(string,num){
        return string?.length > num ? string.substr(0,num-1) + '...' : string

    }

    //Actual Banner
    return (
        <div className="banner_head">
        <header 
        className="banner" 
        style= {{backgroundImage: 'url('+SONGS[idNum].image+')'}}
        > 
            <div className="banner_contents" >
                <h1 className="banner_title">
                    {SONGS[idNum].song}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button" onClick={Prev} >Previous</button>
                    <button className="banner_button" onClick={Next} >Next</button>
                </div>
                <h1 className="banner_description">
                    {
                    truncate(SONGS[idNum].info,100)
                    }
                </h1>
            </div>
            
            <div className="banner--fadeBottom"/>

        </header>
            
        </div>
        
    )
}

export default Banner
