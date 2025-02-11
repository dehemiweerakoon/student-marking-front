/* eslint-disable no-unused-vars */

import { Alert, Button, Col, Container, Form, Image, Modal, Row } from "react-bootstrap"
import AdminNav from "../../components/adminNav/AdminNav"
import { useState } from "react";
import { postRequest } from "../../services/ApiServices";
import user from '../../assets/user.png'

const AddStudent = () => {
    const [validated, setValidated] = useState(false);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("")
    const [selectedOption, setSelectedOption] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            "firstName":firstName,
            "lastName":lastName,
            "year":selectedOption
        }
    const response = await postRequest("/admin/students",data);
    if(response.status===201){
        handleShow();
        setFirstName("")
        selectedOption(0)
        setLastName("")
    }else{
        Alert("rhere")
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
            <h3>ADD NEW STUDENT ACCOUNT</h3>
                <Form onSubmit={handleSubmit} noValidate validated={validated}  className="mt-5">
                        
                        <Form.Group   controlId="firstNameControl">
                            <Row>
                                <Col md={3}>
                                <Form.Label><h5>First name</h5></Form.Label>
                                
                            </Col>
                            <Col md={6}>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e)=>{setFirstName(e.target.value)}}
                                />
                            </Col> 
                            </Row>
                        
                        </Form.Group> 
                        
                        <Form.Group   controlId="firstNameControl" className="mt-4">
                            <Row>
                                <Col md={3}>
                                <Form.Label><h5>Last name</h5></Form.Label>
                                
                            </Col>
                            <Col md={6}>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)}
                                />
                            </Col> 
                            </Row>
                        
                        
                        </Form.Group> 
                        
                        <Form.Group   controlId="firstNameControl" className="mt-4">
                            <Row>
                                <Col md={3}>
                                <Form.Label><h5>Year/Level</h5></Form.Label>
                                
                            </Col>
                            <Col md={6}>
                            <Form.Check type="radio" aria-label="option 1" label="level 01" checked={selectedOption === 1} value={1} onChange={(e) => setSelectedOption(Number(e.target.value))}/>
                            <Form.Check type="radio" aria-label="option 2" label="level 02" checked={selectedOption === 2} value={2} onChange={(e) => setSelectedOption(Number(e.target.value))}/>
                            <Form.Check type="radio" aria-label="option 3" label="level 03" checked={selectedOption === 3} value={3} onChange={(e) => setSelectedOption(Number(e.target.value))}/>
                            <Form.Check type="radio" aria-label="option 4" label="level 04" checked={selectedOption === 4} value={4} onChange={(e) => setSelectedOption(Number(e.target.value))}/>
                            </Col> 
                            </Row>
                        
                        
                        </Form.Group>
                <Col md={9}>
                <div className="d-flex justify-content-end mt-4 ">
                        <Button type="submit" className="bg-primary-subtle text-primary-emphasis" onClick={handleSubmit}>Add Student</Button>
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
        <Modal.Body>Student Added Successfully.......</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
    </Modal>
</>
)
}

export default AddStudent