import { Col, Container, Row } from "react-bootstrap"

function Footer() {
  return (
    <>
 <Container fluid className="p-3 " style={{backgroundColor:"#e1eaf9"}}>
 <Row>
<Col md={12} className="text-align-center d-flex justify-content-center">
<h6>© 2023 Machinize™. All Rights Reserved.</h6>
</Col>
 </Row>
</Container>
    </>
  )
}

export default Footer