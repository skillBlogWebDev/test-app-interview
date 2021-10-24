import { useSelector } from 'react-redux';
import LoginPage from './componets/LoginPage/LoginPage';
import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import './App.css';
import { ProfilePage } from './componets/ProfilePage/ProfilePage';

function App() {
  const state = useSelector(state => state.auth);

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/profile'>
          <ProfilePage login={state.login} />
        </Route>
        <Route path='/'>
          <h1>Вход</h1>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
