import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import show from './assets/show.png'
import Login from './components/Login';
import SignUp from './components/SignUP';
import Home from './components/Home';
import Movie from './components/Movie';
import Seats from './components/Seats';
import Success from './components/Success';

import { Routes,Route, useNavigate } from 'react-router-dom';


import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const[user,setUser]=useState('');
const navigate = useNavigate();

useEffect(()=>{
const userEmail=localStorage.getItem('userEmail');
if(userEmail){
  setUser(userEmail);
  }

},[user])
const handleLogout=()=>{
  localStorage.removeItem('userEmail');
  
  navigate('/Login');
  // window.location.href='/Login'
}
  return (
    <div>
      <Navbar className='nav'>
        <Container>
          <Navbar.Brand href="/Home">
            <img
              alt=""
              src={show}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ticket-Booking-For-Book My Show
          </Navbar.Brand>
          { user && <Button onClick={()=>handleLogout()} className='logout_btn'>Logout</Button>}
        </Container>
      </Navbar>
      
      <Routes>    
            <Route path='/Login'element={<Login setUser={setUser}/> }/> 
            <Route  path='SignUp' element={<SignUp setUser={setUser}   />}/>
            <Route path='/Home'element={<Home/> }/> 
            <Route path='/Movie/:id'  element={<Movie/>}/>
            <Route  path='/Seats' element={<Seats/> }/>
            <Route path='/Success'  element={<Success/>}/>
      </Routes>
      
    </div>
  )
}

export default App
