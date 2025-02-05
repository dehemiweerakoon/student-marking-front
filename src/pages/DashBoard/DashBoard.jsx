/* eslint-disable no-unused-vars */
import { Col, Container, Row, Table } from "react-bootstrap"
import NavBar from "../Nav/NavBar"
import { getRequest } from "../../services/ApiServices"
import { useEffect, useState } from "react"

const DashBoard = () => {

  const [marks,setMarks] = useState([]);

    const getAllMarks =async()=>{
       const id = sessionStorage.getItem('user_id')
       console.log(id);
       const response = await getRequest(`/user/marks/${id}`);
       setMarks(response.data)
       console.log(response.data);
    }

    useEffect(()=>{
        getAllMarks()
    },[])

  return (
    <>
    {
      ['lg'].map((expand) => (
        <>
        <Container fluid className="m-0 p-0">
             <Row>
            {/* Sidebar */}
            <Col md={1} className="p-0">
            <NavBar expand={expand}/>
            </Col>
    
            {/* Content */}
            <Col md={10} className="p-4">
            <Table striped bordered hover className="m-5">
                    <thead>
                      <tr>
                        <th>Index</th>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                  
                      {
              marks && marks.map((mark,index)=>{
                return(
                  <>
                    <tr>
                        <td>{index}</td>
                        <td>{mark.course.id}</td>
                        <td>{mark.course.courseName}</td>
                        <td>{mark.marking}</td>
                      </tr>
                  </>
                )
              })
            }
                    </tbody>
                  </Table>
            </Col>
          </Row>
        </Container>
       
        </>
      ))
    }
    
    </>
  )
}

export default DashBoard