import React from 'react';
import styled from 'styled-components';

function SignUp() {
  return( 
    <Div>
        <Image className='image' src='./images/musify.png' alt='' />
        <Header>
            Sign-Up
        </Header>
        <Div2>
            <Input type='text' placeholder='Enter Name'/>
            <Input type='text' placeholder='Enter Age'/>
            <Input type='text' placeholder='Enter Email-Id'/>
            <Input type='text' placeholder='Create Password'/>
            <Input type='text' placeholder='Confirm Password'/>
        </Div2>
    </Div>)
}


const Image = styled.img`
    max-width:400px;
    min-width:100px;

`
const Div = styled.div`
    margin-top:30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`
const Div2 = styled.div`
    margin-top:30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;

`
const Header = styled.h1`
    display:flex;
    flex-direction:row;
    justify-content:center;
`
const Input = styled.input`

`

export default SignUp;

