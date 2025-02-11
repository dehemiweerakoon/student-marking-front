/* eslint-disable no-unused-vars */
import { Card, Col, Container, Image, Row } from "react-bootstrap"
import AdminNav from "../../components/adminNav/AdminNav"
import cover from '../../assets/cover.jpg'
const Admin = () => {
  const name = sessionStorage.getItem("username"); 
  return (
   <>
   {
    ['lg'].map((expand)=>(
      <>
       <Container fluid  className=" m-0">
      <Row>
        <Col md ={1} className="p-0">
        <AdminNav expand={expand}/>
        </Col>
        <Col  className="p-4">
        <Row>
            <h2>Hello,Welcome Back {name} 👋 .....</h2>
        </Row>
        <Row className="mt-5">
          <Col md={7}>
         <Image src={cover} thumbnail/>
          </Col>
            <Col md={4}>
            <Card>
      <Card.Body>
        <Card.Title><h2>Hello Admin of the Student Marking System</h2></Card.Title>
        <Card.Text>
          <div className=" text-wrap p-2 rounded bg-opacity-75" >
          <p>Welcome to the Admin Dashboard of the Student Marking System! This platform allows administrators
           to efficiently manage student academic records, ensuring accuracy and transparency in grading. 
           From this dashboard, you can add, update, or remove student and faculty accounts, configure grading 
           criteria, and oversee exam results. Stay informed with real-time notifications about newly submitted 
           marks, pending evaluations, and important deadlines. </p>
           <p>
           Utilize built-in reporting tools to generate 
           performance reports and analyze student progress over time. Your role in maintaining academic 
           integrity and smooth system operations is 
           crucial—let&apos;s create a streamlined and effective evaluation process together!
           </p>
           </div>
        </Card.Text>
      </Card.Body>
    </Card>
          
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

export default Admin