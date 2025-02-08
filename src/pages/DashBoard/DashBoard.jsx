/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Col, Container, Row, Table } from "react-bootstrap"
import NavBar from "../Nav/NavBar"
import { getRequest } from "../../services/ApiServices"
import { useEffect, useState } from "react"

const DashBoard = () => {

  const [marks,setMarks] = useState([]);

    const getAllMarks =async()=>{
       const id = sessionStorage.getItem('user_id') || 0;
        console.log(id);
       const response = await getRequest(`/user/marks/${id}`);
       setMarks(response.data)
       console.log(response.data[0])
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
        <Container className="m-0 p-0">
             <Row>
            {/* Sidebar */}
            <Col md={1} className="p-0">
            <NavBar expand={expand}/>
            </Col>
    
            {/* Content */}
            <Col md={10} className="mt-5 p-4">
            <Table striped bordered hover responsive className="table-info">
                    <thead>
                      <tr>
                        <th>Index</th>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                  
                    {marks.length > 0 ? (
                  marks.map((mark, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{mark?.course?.id || "N/A"}</td>
                      <td>{mark?.course?.courseName || "N/A"}</td>
                      <td>{mark?.marking || "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No data available
                    </td>
                  </tr>
                )}
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