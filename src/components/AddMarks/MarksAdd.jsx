/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../../services/ApiServices";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import AdminNav from "../adminNav/AdminNav";

const MarksAdd = () => {
    const [validated, setValidated] = useState(false);
    const [courseId,setCourseId] = useState(0);
    const [student,setStudent] = useState([]);
    const [studentId,setStudentId] = useState(0);
    const [course,setCourse] = useState([]);
    const [mark,setMark] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getAllCourses =async()=>{
        const response = await getRequest("/admin/course");
        if(response.status==200){
            setCourse(response.data);
        }
    }

    const getAllStudents =async()=>{
        const response = await getRequest("/admin/students");
        if(response.status==200){
            setStudent(response.data);
        }
    }

    useEffect(()=>{
        getAllStudents();
        getAllCourses();
    },[])

    const handleSubmit =async(event)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("ji")
      setValidated(true);
      return;
    }

    setValidated(true);
        event.preventDefault();
        const data = {
            "courseId":parseInt(courseId),
            "studentId":parseInt(studentId),
            "marks":parseInt(mark)
        }
        const response = await postRequest("/admin/marks",data);
        if(response.status==201){
            //
            handleShow();
            window.location.reload();
        }
    }
    return (
        <>
        {
            ['lg'].map((extend)=>(
                <>
                <Container fluid className="m-0 ">
                <Row>
                    <Col md={1} xs={0} className="p-0">
                    <AdminNav expand={extend}/>
                    </Col>
                    <Col md={11} xs={12} className="p-5 mt-5">
                    <h3>ADD STUDENT MARKS</h3>
                        <Form onSubmit={handleSubmit} noValidate validated={validated}  className="mt-5">
                                
                                <Form.Group   controlId="studentIdControl">
                                    <Row>
                                        <Col md={3}>
                                        <Form.Label><h5>Student ID</h5></Form.Label>
                                        
                                    </Col>
                                    <Col md={6}>
                                        {/* <Form.S
                                            required
                                            type="text"
                                            placeholder="First Name"
                                            value={studentId}
                                            onChange={(e)=>{setStudentId(e.target.value)}}
                                        /> */}
                                        <Form.Select aria-label="Default select example" onClick={(e)=>setStudentId(e.target.value)}>
                                            {
                                                student && student.map((stu,index)=>(
                                                    <> 
                                                    <option value={stu.id}>{stu.id}</option>
                                                    </>
                                                ))
                                            }
                                        </Form.Select>
                                    </Col> 
                                    </Row>
                                
                                </Form.Group> 
                                
                                <Form.Group   controlId="studentIdControl" className="mt-4">
                                    <Row>
                                        <Col md={3}>
                                        <Form.Label><h5>Course Name</h5></Form.Label>
                                        
                                    </Col>
                                    <Col md={6}>
                                        {/* <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last Name"
                                            value={courseId}
                                            onChange={(e)=>setCourseId(e.target.value)}
                                        /> */}
                                        <Form.Select aria-label="Default select example" onClick={(e)=>setCourseId(e.target.value)}>
                                            {
                                                course && course.map((cour,index)=>(
                                                    <> 
                                                    <option value={cour.id}>{cour.courseName}</option>
                                                    </>
                                                ))
                                            }
                                        </Form.Select>
                                    </Col> 
                                    </Row>
                                
                                
                                </Form.Group> 
                                
                                <Form.Group   controlId="studentIdControl" className="mt-4">
                                    <Row>
                                        <Col md={3}>
                                        <Form.Label><h5>Mark/Grade</h5></Form.Label>
                                        
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control
                                        required
                                        type="number"
                                        placeholder="score"
                                        value={mark}
                                        max={100}
                                        min={0}
                                        onChange={(e)=>setMark(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Marks Should be value range between 0-100.
                                        </Form.Control.Feedback>
                                    </Col> 
                                    </Row>
                                
                                
                                </Form.Group>
                        <Col md={9}>
                        <div className="d-flex justify-content-end mt-4 ">
                                <Button type="submit" className="bg-primary-subtle text-primary-emphasis">Add Student</Button>
                                </div>
                        
                        </Col>
                        </Form>
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
                <Modal.Body>Student Mark Added Successfully.......</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
        )
}

export default MarksAdd