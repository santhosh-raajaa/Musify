import React from 'react'
import styled from 'styled-components'

function Home(props) {

    return (
        <Container>
            <Image className='image' src='./images/musify.png' alt='' />
            <ButtonGroup>
                <Login>
                    Login
                </Login>
                <Signup>
                    SignUp
                </Signup>
            </ButtonGroup>

        </Container>
    )
}

export default Home

const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center; //horizontal 
    justify-content:center; //vertical
    background: linear-gradient(#000000, #030e1b);
    height: 100vh;
    width:100vw;
`
const Image = styled.img`
    animation:animateDown infinite 1.5s;
`

const ButtonGroup=styled.div`
    display:flex;
    margin-bottom:80px;

    @media (max-width:460px){
        flex-direction:column;
        
    }

`
const Login=styled.a`
    color:black;
    box-sizing: border-box;
    border: 1px solid burlywood;
    font-weight:600;
    font-size:25px;
    /* padding:0 0 10px; */
    min-height:50px;
    min-width:180px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    background-color: rgb(207, 28, 11);
    opacity:0.7;
    cursor:pointer;
    margin:10px;
    letter-spacing:1px;
    overflow:hidden;

    &:hover{
        opacity:0.9;
        box-shadow:0 0 10px rgb(207, 28, 11),0 0 40px rgb(207, 28, 11);
    }

    &:active{
        box-shadow:0 0 10px rgb(207, 28, 11),0 0 40px rgb(207, 28, 11),0 0 80px rgb(207, 28, 11);

    }

`

const Signup=styled(Login)`

`