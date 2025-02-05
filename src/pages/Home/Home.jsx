/* eslint-disable no-unused-vars */
import { Col, Container, Image, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap"
import './Home.css'
import degree from '../../assets/graduation-hat.png'
import home from '../../assets/home (1).png'
import dashboard from '../../assets/dashboard.png'
import logout from '../../assets/export.png'
import { useState } from "react"
import NavBar from "../Nav/NavBar"
const Home = () => {
    const [expanded, setExpanded] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   const name = sessionStorage.getItem("username")
return (
<>
{
  ['lg'].map((expand) => (
    <>
    <Container fluid className="m-0 p-0">
         <Row>
        {/* Sidebar */}
        <Col md={1} className="p-0">
        <NavBar expand={expand}/>
        </Col>

        {/* Content */}
        <Col md={10} className="p-4">
          <h2>Hello,Welcome Back {name} 👋 .....</h2>
         
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