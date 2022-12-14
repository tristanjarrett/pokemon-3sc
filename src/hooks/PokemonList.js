import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import PokemonSprite from '../hooks/PokemonSprite';

function PokemonList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {

    if (!localStorage.getItem("POKEMON_DATA")) {
      // console.log("USING API");
      fetch("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.results);
            localStorage.setItem("POKEMON_DATA", JSON.stringify(result.results));
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    } else {
      // console.log("USING CACHE");
      setIsLoaded(true);
      setError(null);
      setItems(JSON.parse(localStorage.getItem("POKEMON_DATA")));
    }

  }, [])

  if (error) {
    return <div className="d-flex align-items-center justify-content-center">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="d-flex align-items-center justify-content-center">Loading...</div>;
  } else {
    return (
      <Row>
        {items.filter((value) => {
          if (props.filter === "") {
            return value;
          } else if (value.name.toLowerCase().includes(props.filter.toLowerCase())) {
            return value;
          } else {
            return null;
          }
        }).map(item => (
          <Col xs="6" md="4" lg="3" key={item.name}>
            <Link to={`/details/${item.name}`} className="dashItem">
              {item.name}
              <PokemonSprite pokemon={item.name} />
            </Link>
          </Col>
        ))}
      </Row>
    );
  }
}

export default PokemonList;