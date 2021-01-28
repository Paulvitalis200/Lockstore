import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Dashboard from './Components/LandingPage/Dashboard/Dashboard';
import PrivateRoute from './Components/LandingPage/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import store from './store';
import { logoutUser, setCurrentUser } from './store/actions/loginUser';


if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token)

  const decoded = jwt_decode(token)

  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser);
    window.location.href = "/";
  }
}
function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={LandingPage} />
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
