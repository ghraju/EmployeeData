import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Nav_bar() {
    return (
        
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='fw-bold ps-3' href="#" style={{fontSize:"25px"}}>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto  my-lg-0 "
                        style={{ maxHeight: '100px',marginLeft:"510px"  }}
                        navbarScroll
                    >
                        <Nav.Link  className='mx-3' href="/admin">Home</Nav.Link>
                        <Nav.Link className='mx-3' href="/admin/employee">Employee</Nav.Link>

                        <Nav.Link className='mx-3' href="/admin/create" >
                            Create Employee
                        </Nav.Link>
                    </Nav>

                    <Link to="/" className=' btn btn-outline-success me-5' variant="outline-success">Logout</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
}

export default Nav_bar;