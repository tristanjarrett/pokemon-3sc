import Container from 'react-bootstrap/Container';
import './Details.scss';
import PokemonDetail from '../components/PokemonDetail';

function Details() {
  return (
    <Container>
      <h2>Details</h2>
      <PokemonDetail />
    </Container>
  );
}

export default Details;
