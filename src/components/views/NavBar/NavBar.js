import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' className='rounded mt-3 mb-4'>
      <Container>
        <Navbar.Brand href='/'>waiter.app</Navbar.Brand>
        <Nav className='justify-content-end'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
