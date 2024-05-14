import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../../style/General.css'
import '../../style/MediaQuery/Header.css'

//CSS

import './Header.css'
import NavbarBottom from './NavbarBottom';
function NavbarBootstrap() {
  return <>
    <Navbar expand="lg" className="bgColorHeader d-flex flex-column ">
        <Container fluid>

            <Navbar.Brand >

                <Link to="/">
                    LOGO
                </Link>

            </Navbar.Brand>

            <Navbar.Toggle className='' aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="me-auto">
                    <Nav.Link ><Link to="/hotels">
                        HOTEL
                    </Link></Nav.Link>
                </Nav>
                <div className='loginRegister d-flex flex-row justify-content-end px-5 '>
                    <Nav.Link className='px-2'>
                        <Link to="/register" className='px-3 rounded-5 btn btn-primary'>
                        <p className='px-2 m-0'>Register</p>
                        </Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to="/login" className='rounded-5  btn btn-primary'>
                           <p className='px-2 m-0'>Login</p>
                        </Link>
                    </Nav.Link>

                </div>
            </Navbar.Collapse>

        </Container>
        
    </Navbar>
    <NavbarBottom />
  </>;
}

export default NavbarBootstrap;