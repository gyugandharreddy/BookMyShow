import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loginpagimg from '../assets/film making png.jpeg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
export default function Login () {

const [email,setEmail]=useState('');
const navigate=useNavigate();
const handleLogin=()=>{
  localStorage.setItem('userEmail',email);
  // setUser(email)
  navigate('/Home')
}

return(
    <div className="auth-container">
<Container >
      <Row>
        <Col className="img-container">
        <img src={loginpagimg } width={300} height={350} style={{borderRadius:'30px'}} ></img>
        </Col>
        <Col>
        <Card style={{width:"100%",height:'95%',marginTop:'1rem'}}>
        <Card.Body className="card-body">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" style={{width:'100%'}} onClick={handleLogin}>
        Login
      </Button>
    </Form>
    <div style={{display:'flex',justifyContent:'center' ,marginTop:'20px'}} >New Hear? Pleas <a onClick={()=>navigate("/SignUp")}> SignUp</a> </div>
      </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>



    </div>
    
)

}