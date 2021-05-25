import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.scss'
// import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantCreate from './components/RestaurantCreate';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <div className="d-flex align-items-center justify-content-between site-header">
          <div className="logo">Restaurant App</div>
          <ul className="d-flex align-items-center nav-bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/detail">Details</Link></li>
            <li><Link to="/update">Update</Link></li>
          </ul> 
        </div>
        
        <Route path="/list">
          <RestaurantList/>
        </Route>
        <Route path="/detail">
          <RestaurantDetail/>
        </Route>
        <Route path="/search">
          <RestaurantSearch/>
        </Route>
        <Route path="/update/:id"
          render={props=>(
            <RestaurantUpdate {...props}/>
          )}
        >  
        </Route>
        <Route path="/create">
          <RestaurantCreate/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Router>

    </div>
  );
}

export default App;
