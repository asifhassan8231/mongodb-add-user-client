import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/users">
            <Users></Users>
          </Route>
          <Route path="/users/:id">
            <User></User>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
