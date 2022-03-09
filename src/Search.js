import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import { Container, Table, Row, Col, Button } from 'react-bootstrap'

export default function SearchProuduct() {
    const [data, setData] = useState([])
    useEffect(() => {
        search("%")
      }, [])
    async function search(key) {
        if(key<1){
            key = "%"
        }
        let result = await fetch("http://localhost:8000/api/search/" + key)
        result = await result.json()
        setData(result)
    }
    return (
        <div>
            {console.log(data)}
            <Header />
            <Container>
                <h1>Product Search</h1>
                <input type="text" placeholder='Search Product...' onChange={(e) => search(e.target.value)} />
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
                                </tr>
                                {
                                    data.map((product, i) =>
                                        <tr key="{i}">
                                            <td>{i + 1}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.description}</td>
                                            <td><img src={`http://localhost:8000/storage/product/${product.image}`} style={{ width: '50px' }} /></td>

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
