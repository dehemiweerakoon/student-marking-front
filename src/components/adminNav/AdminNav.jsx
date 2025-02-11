/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Image, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import degree from '../../assets/graduation-hat.png'
import home from '../../assets/home (1).png'
import axios from "axios";
import addStudent from '../../assets/add-user.png'
import logout from '../../assets/export.png'
import addMarks from '../../assets/plus-sign.png'
import addCourse from '../../assets/educational-video.png'

const AdminNav = ({expand}) => {
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
                  <Nav className="d-flex flex-column text-white " style={{height: "90vh"}}>
                    <Nav.Item className="p-2">
                      <Nav.Link><Image src={degree} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mt-3">
                      <Nav.Link href="/admin/home"><Image src={home} className="" /></Nav.Link>
                      <Nav.Link href="/admin/home" style={{color: "white"}}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mt-3">
                      <Nav.Link href="/admin/addStudent"><Image src={addStudent} className="" /></Nav.Link>
                      <Nav.Link href="/admin/addStudent" style={{color: "white"}}>Add Student</Nav.Link>
                    </Nav.Item> 
                    <Nav.Item className="mt-3">
                      <Nav.Link href="/admin/addMarks"><Image src={addMarks}/></Nav.Link>
                      <Nav.Link href="/admin/addMarks" style={{color:"white"}}>Add Marks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mt-3">
                      <Nav.Link href="/admin/course"><Image src={addMarks}/></Nav.Link>
                      <Nav.Link href="/admin/course" style={{color:"white"}}>Courses</Nav.Link>
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

export default AdminNav