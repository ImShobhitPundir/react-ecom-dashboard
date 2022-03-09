import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap'

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/product_list')
      .then(result => result.json())
      .then(res => setData(res))
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Row>
          {
            data.map((product, i) => 
              <Col lg={3} sm={6} style={{ padding: '25px' }} key={i}>
                <Card>
                  <Card.Img variant="top" src={`http://localhost:8000/storage/product/${product.image}`} style={{ width:'100%', height:'200px' }}/>
                  <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{product.name}</Card.Title>
                    <Card.Text style={{ color: 'red', fontSize: '12px' }}>
                      Rs. {product.price}
                    </Card.Text>
                    <Button variant="primary" size="sm">Buy</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    </>
  )
}