/* eslint-disable no-unused-vars */
import { Col, Container, Image, Row } from "react-bootstrap"
import AdminNav from "../../components/adminNav/AdminNav"
import cover from '../../assets/cover.jpg'
const Admin = () => {
  const name = sessionStorage.getItem("username"); 
  return (
   <>
   {
    ['lg'].map((expand)=>(
      <>
       <Container className=" m-0 p-0">
      <Row>
        <Col md ={1} className="p-0">
        <AdminNav expand={expand}/>
        </Col>
        <Col  className="p-4">
        <Row>
            <h2>Hello,Welcome Back {name} 👋 .....</h2>
        </Row>
        <Row className="mt-5">
          <Col md={9}>
         <Image src={cover} thumbnail/>
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