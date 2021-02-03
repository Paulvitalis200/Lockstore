import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Dashboard from './Components/Dashboard/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute'
import setAuthToken from './utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import store from './store'
import { setCurrentUser } from './store/actions/loginUser';

// Check foor token to keep user logged in  
if (localStorage.jwtToken) {
  // Set auth token headeer auth
  console.log(localStorage.jwtToken)
  
  const token = localStorage.jwtToken

  setAuthToken(token)
  const decoded = jwtDecode(token)
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    // store.dispatch()
    window.location.href = "/"
  }
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={LandingPage} />
          {/* <ProtectedRoute exact path='/dashboard' component={Dashboard} /> */}
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
