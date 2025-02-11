/* eslint-disable no-unused-vars */
import {Button, Col, Container, FloatingLabel, Form, Image, Row} from 'react-bootstrap'
import login from '../assets/Login.png'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {

  const[username,setUserName] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState("");

  const navigate = useNavigate();

  const getLogInAction =async()=>{
    try{
      const data ={
        "username":username,
        "password":password
      }

    const response = await axios.post("http://localhost:9000/auth/login",data);

    if(response.status==401){
        setError(response.data)
    }
    //console.log(response.data.id);
    sessionStorage.setItem('token',response.data.token);
    sessionStorage.setItem('username',response.data.username);
    sessionStorage.setItem('user_id',response.data.id);
    axios.defaults.headers.common['Authorization'] =`Bearer ${response.data.token}`;
    if(response.data.role ==="ROLE_ADMIN"){
      navigate("/admin/home");
    }else if(response.data.role ==="ROLE_USER"){
       navigate("/user/home")
    } 

    }catch(ex){
      setError("Password or UserName is incorrect")
      sessionStorage.setItem('token',"");
      sessionStorage.setItem('username',"");
      sessionStorage.setItem('user_id',"");
      axios.defaults.headers.common['Authorization'] ="";
      setPassword("")
      setUserName("")
    }
  }

  const OnHandleUserName =(event)=>{
    setUserName(event.target.value)
  }
  const OnHandlePassword =(event)=>{
    setPassword(event.target.value)
  }

  return (
    <>
      <Container >
        <Row className='align-items-center vh-100'>
        <Col md={6}>
        <h3>Welcome Back</h3>

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
      <div className='d-grid mt-3'>
      <Button className='mt-5' style={{ backgroundColor: 'purple' }}onClick={getLogInAction}>Sign In</Button>
        </div>

        <p style={{color:"#820025"}} className='mt-2'>{error}</p>
         <h6><Link to={"/register/user"} style={{color:"black",textDecoration:"none"}}> Not a Student </Link> <Link to={"/register/admin"} style={{color:"purple",textDecoration:"none"}}>/  Teacher </Link></h6>
        </Col>
      <Col md={6}>
      <Image src={login} alt="login pic" thumbnail className='rounded-5 p-2'/>
      </Col>
        </Row>
  
      </Container>
    </>
  )
}

export default LogIn