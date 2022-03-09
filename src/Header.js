import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link,useNavigate } from "react-router-dom";


export default function Header() {
    //get logged user name from local storage
    const user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate()
    function logout(){
        localStorage.clear();
        navigate('/login')
    }
    //console.log(user)
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/RPC-JP_Logo.png/900px-RPC-JP_Logo.png?20190310180203"} width={"50px"} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                localStorage.getItem('user-info') ?
                                    <>
                                        <Link to="/">Home</Link>
                                        <Link to="/add">Add Product</Link>
                                        <Link to="/list">Veiw Product</Link>
                                        <Link to="/search">Search Product</Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/login">Login</Link>
                                        <Link to="/register">Register</Link>
                                    </>
                            }



                        </Nav>

                    </Navbar.Collapse>
                    {
                        localStorage.getItem('user-info') ?
                            <Nav>
                                <NavDropdown title={user.name} id="basic-nav-dropdown" >
                                    <NavDropdown.Item style={{ color: '#000' }} >Profile</NavDropdown.Item>
                                    <NavDropdown.Item style={{ color: '#000' }} onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            : null
                    }

                </Container>
            </Navbar >
        </div >
    )
}
