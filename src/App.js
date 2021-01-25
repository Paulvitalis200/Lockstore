import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Dashboard from './Components/LandingPage/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
