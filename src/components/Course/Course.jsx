/* eslint-disable no-unused-vars */
import { Alert, Button, Col, Container, Form, Image, Modal, Nav, Navbar, Offcanvas, Row, Table } from "react-bootstrap"
import AdminNav from "../../components/adminNav/AdminNav"
import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../../services/ApiServices";
import degree from '../../assets/graduation-hat.png'
import home from '../../assets/home (1).png'
import axios from "axios";
import addStudent from '../../assets/add-user.png'
import logout from '../../assets/export.png'
import addMarks from '../../assets/plus-sign.png'
import addCourse from '../../assets/educational-video.png'
import { useNavigate } from "react-router-dom";
const Course = () => {
    const [validated, setValidated] = useState(false);
    const [courseName,setCourseName] = useState("");
    const [courses,setCourse] = useState([]);
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
    const getAllCourses = async()=>{
        const response = await getRequest("/admin/course");
        setCourse(response.data);
    }

    useEffect(()=>{
        getAllCourses()
    },[])

    const handleSubmit =async(event)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        return
    }


    setValidated(true);
        event.preventDefault();
        const data = {
            courseName:courseName
        }
    const response = await postRequest("/admin/course",data);
    if(response.status===201){
        handleShow();
        setCourseName("")
    }else{
        Alert("rhere")
    }
    }
return (
    <>
    {
        ['lg'].map((expand)=>(
            <>
            <Container fluid className="m-0 ">
            <Row>
                <Col md={1} xs={0} className="p-0">
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
                    <Nav className="d-flex flex-column text-white " style={{height: "140vh"}}>
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
                        <Nav.Link href="/admin/course"><Image src={addCourse}/></Nav.Link>
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
                </Col>
                <Col md={11} xs={12} className="p-5 mt-3">
                <Row>
                    <h5>Course List</h5>
                <Table striped bordered hover className="table-primary">
                <thead>
                    <tr>
                    <th>Course Id</th>
                    <th>Course Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses && courses.map((course,index)=>(
                            <>
                                <tr>
                                <td>{course.id}</td>
                                <td>{course.courseName}</td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
                </Table>
                </Row>
                <Row>
                <h3>ADD NEW COURSE</h3>
                    <Form onSubmit={handleSubmit} noValidate validated={validated}  className="mt-5">
                            
                            <Form.Group   controlId="courseNameControl">
                                <Row>
                                    <Col md={3}>
                                    <Form.Label><h5>Course Name</h5></Form.Label>
                                    
                                </Col>
                                <Col md={6}>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First Name"
                                        value={courseName}
                                        onChange={(e)=>{setCourseName(e.target.value)}}
                                    />
                                </Col> 
                                </Row>
                            </Form.Group> 
                    <Col md={9}>
                    <div className="d-flex justify-content-end mt-4 ">
                            <Button type="submit" className="bg-primary-subtle text-primary-emphasis" onClick={handleSubmit}>Add Student</Button>
                            </div>
                    
                    </Col>
                    </Form>
                </Row>
                </Col>
            </Row>
            </Container>
            </>
        ))
    }
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>Course Added Successfully.......</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default Course