import React ,{useEffect,useState} from 'react'
import '../styleSheets/nav.css'

function Nav(){

    const [show, handleShow]=useState(false)

    const transitionNavBar=()=>{
        if (window.scrollY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return ()=> window.removeEventListener("scroll")
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents' >
                
                    <img 
                        className='nav__logo'
                        src="/images/musiFy.png"
                        alt="" 
                    />
            
                    <img className='nav__avatar'
                        src="/images/avatar.png"
                        alt=""
                    />
            </div>
            
        </div>
    )
}



export default Nav
