import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { AiOutlineLoading } from 'react-icons/ai';

function PokemonSprite(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
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
  }, [props.pokemon])

  if (error) {
    return <div>{error.message}</div>;
  } else if (!isLoaded) {
    return <AiOutlineLoading className="isLoading" />;
  } else {
    return (
      <Image src={item.sprites.front_default} />
    );
  }
}

export default PokemonSprite;