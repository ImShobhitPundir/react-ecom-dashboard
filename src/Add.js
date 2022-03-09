import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

export default function Add() {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()
  const navigate = useNavigate();

  async function addProduct() {
    console.log(name,price,image)
    const formData = new FormData()
    formData.append("image", image)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("description", description)
    let result = await fetch("http://localhost:8000/api/add_product", {
      method: 'POST',    
      body: formData
    })
    result = await result.json()
    navigate('/list')
    
  }
  return (
    <div>
      <Header />

      <Container>
        <h1>Add Product</h1>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6} style={{ border: '1px solid #ADAFAF', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
            <Form style={{ textAlign: 'left' }}>

              <Form.Group className="mb-3" >
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file"  onChange={(e) => setImage(e.target.files[0])} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Button onClick={addProduct}>Add Product</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
