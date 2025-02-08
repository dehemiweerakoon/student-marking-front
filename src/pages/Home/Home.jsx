/* eslint-disable no-unused-vars */
import { Col, Container, Image, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap"
import './Home.css'
import cover from '../../assets/cover.jpg'
import { useEffect, useState } from "react"
import NavBar from "../Nav/NavBar"
import { getRequest } from "../../services/ApiServices"
import Footer from "../../components/Footer/Footer"
const Home = () => {
    const [expanded, setExpanded] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [student,setStudent] = useState("");
    const name = sessionStorage.getItem("username");    
    const id = sessionStorage.getItem('user_id');
    const getStudentDetails = async()=>{

    const response = await getRequest(`/user/student/${id}`)
    console.log(response.data)
    setStudent(response.data)
  }
 useEffect(()=>{
 getStudentDetails()
 },[])
return (
<>
{
  ['lg'].map((expand) => (
    <>
    <Container className="m-0 p-0">
         <Row>
        {/* Sidebar */}
        <Col md={1} className="p-0">
        <NavBar expand={expand}/>
        </Col>

        {/* Content */}
        <Col md={11} className="p-4">
        <Row>
            <h2>Hello,Welcome Back {name} 👋 .....</h2>
        </Row>
        <Row className="mt-5">
          <Col md={7}>
         <Image src={cover} thumbnail/>
          </Col>
          <Col md={4}>
          <h2>Student Details </h2>
          <h5><i>Student Name :</i> {student.firstName} {student.lastName}</h5>
          <h5><i>Student Id :</i> {student.id} </h5>
          <h5><i>Student Year : </i> level  {student.year}</h5>
          </Col>
        </Row>
        </Col>
      </Row>
    </Container>

    </>
  ))
}

</>
)
}

export default Home