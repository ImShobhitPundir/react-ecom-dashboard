import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

function Update() {
    let params = useParams();
    //console.log(parseInt(params.id))
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [data, setData] = useState([])
    const navigate = useNavigate();
    const id = parseInt(params.id)

    useEffect(async () => {
        let result = await fetch(`http://localhost:8000/api/product_single/${id}`)
        result = await result.json()
        setData(result)
        setName(result.name)
        setPrice(result.price)
        setDescription(result.description)
        setImage(result.image)
    }, [])

    async function updateProduct() {
        //alert(id)


        console.log(name, price, description)
        
          const formData = new FormData()

          formData.append("image", image) 
          formData.append("name", name)
          formData.append("price", price)
          formData.append("description", description)
          let result = await fetch(`http://localhost:8000/api/update_product/${id}`, {
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
                <h1>Update Product</h1>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6} style={{ border: '1px solid #ADAFAF', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
                        <Form style={{ textAlign: 'left' }}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" defaultValue={data.name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="number" defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control type="text" defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Button onClick={updateProduct}>Update Product</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}





export default Update