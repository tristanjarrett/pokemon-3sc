import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';
import './Navigation.scss';
import { FaSearch } from 'react-icons/fa';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="PokeAPI" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/favourites">Favourites</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Find a Pokemon"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary" className="d-flex align-items-center">Search <FaSearch className="ms-2 d-inline-block" /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;