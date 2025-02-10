/* eslint-disable no-unused-vars */

import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap"
import AdminNav from "../../components/adminNav/AdminNav"
import { useState } from "react";
import { postRequest } from "../../services/ApiServices";

const AddStudent = () => {
    const [validated, setValidated] = useState(false);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("")
    const [selectedOption, setSelectedOption] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit =async(event)=>{
        event.preventDefault();
        const data = {
            "firstName":firstName,
            "lastName":lastName,
            "year":selectedOption
        }
       // const response = await postRequest("/admin/students",data);
        
    }

return (
<>
{
    ['lg'].map((extend)=>(
        <>
        <Container className="m-0 p-0">
        <Row>
            <Col md={1} xs={0} className="p-0">
            <AdminNav expand={extend}/>
            </Col>
            <Col md={10} xs={10} className="p-0 m-5">
            <h3>ADD NEW STUDENT ACCOUNT</h3>
                <Form onSubmit={handleSubmit} className="mt-5">
                        
                        <Form.Group   controlId="firstNameControl">
                            <Row>
                                <Col md={2}>
                                <Form.Label><h5>First name</h5></Form.Label>
                                
                            </Col>
                            <Col md={5}>
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
                                <Col md={2}>
                                <Form.Label><h5>Last name</h5></Form.Label>
                                
                            </Col>
                            <Col md={5}>
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
                                <Col md={2}>
                                <Form.Label><h5>Year/Level</h5></Form.Label>
                                
                            </Col>
                            <Col md={5}>
                            <Form.Check type="radio" aria-label="option 1" label="level 01" checked={selectedOption === 1} value={1} onChange={(e) => setSelectedOption(Number(e.target.value))}/>
                            <Form.Check type="radio" aria-label="option 2" label="level 02" checked={selectedOption === 2} value={2} onChange={(e) => setSelectedOption(Number(e.target.value))}/>
                            <Form.Check type="radio" aria-label="option 3" label="level 03" checked={selectedOption === 3} value={3} onChange={(e) => setSelectedOption(Number(e.target.value))}/>
                            <Form.Check type="radio" aria-label="option 4" label="level 04" checked={selectedOption === 4} value={4} onChange={(e) => setSelectedOption(Number(e.target.value))}/>
                            </Col> 
                            </Row>
                        
                        
                        </Form.Group>
                <Col md={7}>
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default AddStudent