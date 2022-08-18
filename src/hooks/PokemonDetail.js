import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      JSON.stringify(item)
    );
  }
}

export default PokemonDetail;