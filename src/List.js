import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Header from './Header';
import { Container, Table, Row, Col, Button } from 'react-bootstrap'

export default function List() {
  const [data, setData] = useState([])
  useEffect(() => {
    getProducts()

  }, [])
  function productDelete(id){
    fetch(`http://localhost:8000/api/product_delete/${id}`, {   
            method:'DELETE',
            
        })
        .then((result) => {
            result.json().then((resp) => {
              console.warn(resp)
              getProducts()
            })
          })
  }
  function getProducts(){
    fetch('http://localhost:8000/api/product_list')
      .then(result => result.json())
      .then(res => setData(res))

      return data
  }
  return (
    <div>
      {console.log(data)}
      <Header />
      <Container>
        <h1>Product List</h1>
        <Row>
          <Col lg={1}></Col>
          <Col lg={9} style={{ marginTop: '20px' }}>
            <Table striped bordered hover>

              <tbody>
                <tr key="">
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
                {
                  data.map((product, i) => 
                    <tr key="{i}">
                      <td>{i+1}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td><img src={`http://localhost:8000/storage/product/${product.image}`} style={{width:'50px'}}/></td>
                      <td><Button variant="danger" size="sm" onClick={()=>productDelete(product.id)}>Delete</Button> 
                      <Link to={`/update/${product.id}`}><Button variant="primary"  size="sm" style={{marginLeft:'10px'}}>Update</Button></Link>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
