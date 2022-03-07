import React,{useState} from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Header from './Header';
import {useNavigate} from 'react-router-dom'

export default function Login() {
const [email,setEmail] = useState()
const [password,setPassword] = useState()
const navigate = useNavigate()
async function login(){
  const data = {email,password}
  let result = await fetch("http://localhost:8000/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
        })
        result = await result.json()

        if(result.message){
          alert(result.message)
        }else{
          localStorage.setItem("user-info",JSON.stringify(result))
          navigate('/add')
        }
        
        
}
  return (
    <> <Header />
    <Container>
            <h1>Login Here</h1>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}  style={{border:'1px solid #ADAFAF',padding:'20px', marginTop:'20px',borderRadius:'10px'}}>
                    <Form style={{textAlign:'left'}}>
                 
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Button onClick={login}>Login</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
  )
}
