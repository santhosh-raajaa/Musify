import React from 'react'
import HomeScreen from './components/HomeScreen';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  
  return (
      <div>
        {/* <Home/>
        
        <SignUp/>
        <Login/> */}
        
        <div className='app'>
            <HomeScreen/> 
        </div>
      </div>
      
    )
}

export default App;
