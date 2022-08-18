import './App.scss';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Favourites from './pages/Favourites';
import Details from './pages/Details';

function App() {
  return (
    <Router>
    <div>
      <Navigation />
      <Switch>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/details/:pokemon">
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
