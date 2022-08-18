import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { Row, Col } from 'react-bootstrap';

function PokemonDetail() {
  const { pokemon } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [pokemon])

  if (error) {
    return <div className="d-flex align-items-center justify-content-center">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="d-flex align-items-center justify-content-center">Loading...</div>;
  } else {
    return (
      <>
        {/* I know this technically isnt the correct use of a "hook" but im rushing */}
        <h3>Details</h3>
        <Row>
          <Col>
            <p>Height: {item.height}</p>
            <p>Weight: {item.weight}</p>
            <p>Base Experience: {item.base_experience}</p>
          </Col>
          <Col md="auto">
            <Image src={item.sprites.front_default} />
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Abilities</th>
            </tr>
          </thead>
          <tbody>
            {item.abilities.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.ability.name}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Moves</th>
            </tr>
          </thead>
          <tbody>
            {item.moves.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.move.name}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default PokemonDetail;