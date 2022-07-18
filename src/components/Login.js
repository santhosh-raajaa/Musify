import React from 'react'
import styled from "styled-components"

function Login() {
    return (
        <Div>
            <Image className='image' src='./images/musify.png' alt='' />
            <Header>
                Login
            </Header>
            <Div>
                <Input type='text' placeholder='enter name'/>
                <Input type='text' placeholder='enter email-Id'/>
            </Div>
        </Div>
    )
}

const Image = styled.img`

`

const Div = styled.div`
    margin-top:30px;
    display:flex;
    flex-direction:column;
    

`
const Header = styled.h1`
    display:flex;
    flex-direction:row;
    justify-content:center;
`
const Input = styled.input`

`

export default Login
