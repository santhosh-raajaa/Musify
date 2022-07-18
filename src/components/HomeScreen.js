import React,{useState} from 'react'
import Nav from './Nav'
import '../styleSheets/homeScreen.css'
import Banner from './Banner'
import Row from './Row'
import "../styleSheets/rowFlex.css"

const HomeScreen = () => {

    return (
        <div className='homeScreen'>
            <Nav/>
            <Banner/>
            <div className='rowFlex'>
                <Row title="Anime" id={0}/>
                {/* <Row title="Intro" id={5}/> */}
                <Row title="Geek" id={5}/> 
                <Row title="Random" id={10}/>
            </div>
            
        </div>
        
    )
}

export default HomeScreen
