import './App.scss';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Home from './Pages/home/Home';
import Watch from './Pages/watch/Watch';
// import { Route, Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user? <Home />: <Redirect to = "/register"/>}
        </Route>
        <Route path="/register">
        {!user? <Register />: <Redirect to = "/"/>}
        </Route>
        <Route path="/login">
        {!user? <Login />: <Redirect to = "/"/>}
        </Route>
        {user &&
        <>
        <Route path="/movies">
          <Home type="movies" />
        </Route>
        <Route path="/tv shows">
          <Home type="tv shows" />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
        </>
        }
       </Switch>
    </Router>
  );
}

export default App;
