import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound/NotFound';
import SerItem from './Components/SerItem/SerItem';
import Login from './Components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>

        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path = '/home'>
            <Home></Home>
          </Route>
          <Route path = '/login'>
            <Login></Login>
          </Route>
          <Route path = '/seritem/:seritemId'>
            <SerItem></SerItem>
          </Route>
          <Route path = '*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
