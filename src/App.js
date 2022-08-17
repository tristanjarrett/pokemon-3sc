import './App.scss';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Favourites from './pages/Favourites';
import Search from './pages/Search';
import Details from './pages/Details';

function App() {
  return (
    <Router>
    <div>
      <Navigation />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/:pokemon">
          <Details />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
