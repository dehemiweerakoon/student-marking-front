import { Col, Container, Row } from "react-bootstrap"

function Footer() {
  return (
    <>
 <footer className="mt-1">
 <Container fluid className="p-3 " style={{backgroundColor:"#e1eaf9"}}>
 <Row>
<Col md={12} className="text-align-center d-flex justify-content-center">
<h6>© 2023 Machinize™. All Rights Reserved.</h6>
</Col>
 </Row>
</Container>
 </footer>
    </>
  )
}

export default Footer