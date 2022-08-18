import './Dashboard.scss';
import Container from 'react-bootstrap/Container';
import PokemonList from '../hooks/PokemonList';
import { Row, Col, Dropdown, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';

function Dashboard() {
  return (
    <Container className="dashMain">
      <div className="dashHead">
        <Row>
          <Col lg="5">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Find a Pokemon"
                aria-label="Search"
                size="lg"
              />
              <Button variant="primary" size="lg" className="d-flex align-items-center">Search <FaSearch className="ms-2 d-inline-block" /></Button>
            </Form>
          </Col>
          <Col className="ms-auto" xs="auto">
            <Dropdown>
              <Dropdown.Toggle variant="primary" size="lg" id="dropdown-basic">
                Generation
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" size="lg">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
      <PokemonList />
    </Container>
  );
}

export default Dashboard;
