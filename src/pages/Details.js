import './Details.scss';
import Container from 'react-bootstrap/Container';
import PokemonDetail from '../hooks/PokemonDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Details() {
  const { pokemon } = useParams();
  const [itemFav, setItemFav] = useState(false);
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

    setItemFav(!itemFav);
    setFavs(newFavs);
    localStorage.setItem('POKEMON_DATA', JSON.stringify(newFavs));
  }

  return (
    <Container className="detailsMain">
      <div className="detailsHead">
        <Row>
          <Col><h1>Details: <span className="detailsTitle">{pokemon}</span></h1></Col>
          <Col md="auto">
            {itemFav ? <AiFillStar onClick={() => updateFavs(pokemon)} /> : <AiOutlineStar onClick={() => updateFavs(pokemon)} />}
            </Col>
        </Row>
      </div>
      <PokemonDetail />
    </Container>
  );
}

export default Details;
