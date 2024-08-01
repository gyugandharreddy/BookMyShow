import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loginpagimg from '../assets/film making png.jpeg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
export default function SignUp () {
const [email, setEmail]=useState('')
const navigate=useNavigate();
const handleSubmit=()=>{
  localStorage.setItem('userEmail',email)
  // navigate user to home
  // setUser(email);
  navigate('/Home')
}



return(
    <div className="auth-container" style={{padding:100 ,display:'flex',justifyContent:'center',alignItems:'center'}}>
<Container >
      <Row>
        <Col className="img-container">
        <img src={loginpagimg } width={300} height={350} style={{borderRadius:'30px'}} ></img>
        </Col>
        <Col>
        <Card style={{width:"100%",height:'100%'}}>
        <Card.Body className="card-body" style={{height:40}}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control type="password" placeholder=" Confirm Password" />
      </Form.Group>

      
      <Button variant="primary" type="submit" style={{width:'100%'}} onClick={handleSubmit}>
        SignUp
      </Button>
    </Form>
    <div style={{display:'flex',justifyContent:'center' ,marginTop:'20px'}}><h6 style={{fontSize:"13px"}}>Allready Have Account? Pleas  <a onClick={()=>navigate("/Login")}> Login</a> </h6></div>
      </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>



    </div>
    
)

}