import Container from 'react-bootstrap/Container';
import './Dashboard.scss';
import PokemonList from '../components/PokemonList';

function Dashboard() {
  return (
    <Container>
      <h2>Dashboard</h2>
      <PokemonList />
    </Container>
  );
}

export default Dashboard;
