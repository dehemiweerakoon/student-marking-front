/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Col, Container, Image, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap"
import degree from '../../assets/graduation-hat.png'
import home from '../../assets/home (1).png'
import dashboard from '../../assets/dashboard.png'
import logout from '../../assets/export.png'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const NavBar = ({expand}) => {
        const [expanded, setExpanded] = useState(false);
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const navigate = useNavigate();

  const LogOut =()=>{
    sessionStorage.setItem('token',"");
    sessionStorage.setItem('username',"");
    sessionStorage.setItem('user_id',"");
    axios.defaults.headers.common['Authorization'] ="";
    navigate("/login")
    console.clear();
  }
  return (
  <>
 
            <Navbar key={expand} expand={expand} className="p-3 align-text-left navbar-dark" style={{backgroundColor: "#002147"}}>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                                className="navbar-dark"
                                style={{backgroundColor: "#002147"}}
                                onHide={handleClose}>
                <Offcanvas.Header closeButton className="btn-close-white" style={{color: "white"}}></Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="d-flex flex-column text-white " style={{height: "100vh"}}>
                    <Nav.Item className="p-2">
                      <Nav.Link><Image src={degree} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mt-5">
                      <Nav.Link href="/user/home"><Image src={home} className="" /></Nav.Link>
                      <Nav.Link href="/user/home" style={{color: "white"}}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mt-5 mb-5">
                      <Nav.Link href="/user/dashboard"><Image src={dashboard} className="" /></Nav.Link>
                      <Nav.Link href="/user/dashboard" style={{color: "white"}}>Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mt-5">
                      <Nav.Link><Image src={logout} className="" onClick={LogOut}/></Nav.Link>
                      <Nav.Link style={{color: "white"}} onClick={LogOut}>LogOut</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
       
            </Navbar>
  </>
  )
}

export default NavBar