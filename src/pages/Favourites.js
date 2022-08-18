import './Favourites.scss';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Favourites() {
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
    <Container className="favMain">
      <h1>Favourites</h1>
      <ul className="favList">
        {favs.map((item) => {
          if (item.isFav) {
            return <li key={item.name}><Link to={`/details/${item.name}`}>{item.name}</Link><AiFillStar onClick={() => updateFavs(item.name)} className="d-inline-block ms-auto" /></li>
          } else {
            return null;
          }
        })}
      </ul>
    </Container>
  );
}

export default Favourites;
