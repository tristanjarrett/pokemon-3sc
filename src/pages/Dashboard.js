import './Dashboard.scss';
import Container from 'react-bootstrap/Container';
import PokemonList from '../hooks/PokemonList';
import { Row, Col, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Dashboard() {
  const [searchFilter, setSearchFilter] = useState("");
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
                onChange={(e) => {
                  setSearchFilter(e.target.value);
                }}
              />
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
      <PokemonList filter={searchFilter} />
    </Container>
  );
}

export default Dashboard;
