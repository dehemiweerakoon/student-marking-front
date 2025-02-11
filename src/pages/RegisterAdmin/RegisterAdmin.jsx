/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Image, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import login from '../../assets/register.jpg'

const RegisterAdmin = () => {
  const[email,setEmail] = useState("");
  const[username,setUserName] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState("");

  const navigate = useNavigate();

  const RegisterAdmin =async()=>{
    try{
      const data ={
        "username":username,
        "password":password,
        "email":email
      }

    const response = await axios.post("http://localhost:9000/auth/register/admin",data);

    if(response.status==401){
        setError(response.data)
    }
    
    navigate("/login");
    }catch(ex){
      //
      console.error(ex);
    }
  }

  const OnHandleUserName =(event)=>{
    setUserName(event.target.value)
  }
  const OnHandlePassword =(event)=>{
    setPassword(event.target.value)
  }

  return (
    <Container >
    <Row className='align-items-center vh-100'>
    <Col md={6}>
    <h3>Register Admin</h3>

    <p className='text-secondary'>Please enter your details</p>


    <FloatingLabel
    controlId="floatingInput"
    label="UserName"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="name@example.com" value={username} onChange={OnHandleUserName} />
  </FloatingLabel>

  <FloatingLabel controlId="floatingPassword" label="Password" className='mt-5'>
    <Form.Control type="password" placeholder="Password" value={password} onChange={OnHandlePassword} />
  </FloatingLabel>
  <FloatingLabel controlId="floatingEmail" label="Email" className="mt-5">
    <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
  </FloatingLabel>  
  <div className='d-grid mt-3'>
  <Button className='mt-5' style={{ backgroundColor: '' }}onClick={RegisterAdmin}>Register</Button>
    </div>

    <p style={{color:"#820025"}} className='mt-2'>{error}</p>
    </Col>
  <Col md={6}>
  <Image src={login} alt="login pic" thumbnail className='rounded-5 p-2'/>
  </Col>
    </Row>

  </Container>
  )
}

export default RegisterAdmin