import './Details.scss';
import Container from 'react-bootstrap/Container';
import PokemonDetail from '../hooks/PokemonDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

function Details() {
  const { pokemon } = useParams();

  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('POKEMON_DATA')) {
      setFavs(JSON.parse(localStorage.getItem("POKEMON_DATA")));
    }
  }, []);

  const updateFavs = (name) => {
    const newFavs = favs.map((item) => {
      if (item.name === name) {
        const updatedFav = {
          ...item,
          isFav: !item.isFav,
        };
        return updatedFav;
      }
      return item;
    });

    setFavs(newFavs);
    localStorage.setItem('POKEMON_DATA', JSON.stringify(newFavs));
  }

  return (
    <Container className="detailsMain">
      <Row>
        <Col><h1>Details: <span className="detailsTitle">{pokemon}</span></h1></Col>
        <Col md="auto"><FaHeart onClick={() => updateFavs(pokemon)} /></Col>
      </Row>
      <PokemonDetail />
    </Container>
  );
}

export default Details;
