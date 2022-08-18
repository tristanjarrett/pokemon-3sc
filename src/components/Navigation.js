import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';
import './Navigation.scss';
// import { FaSearch } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="PokeAPI" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="/">Dashboard</Nav.Link> */}
            <Button href="/favourites" variant="warning" size="lg" className="d-flex align-items-center justify-content-center">Favourites <AiFillStar className="d-inline-block ms-2" /></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;