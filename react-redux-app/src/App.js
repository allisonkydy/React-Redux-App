import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

import AnimalView from './components/AnimalView';
import Saved from './components/Saved';

function App() {
  return (
    <div className="App">
      <h1>random shibes (and birds and cats)</h1>
      <div className="navlinks">
        <NavLink exact to="/" className="navlink" activeClassName="selected">home</NavLink>
        <NavLink to="/saved" className="navlink" activeClassName="selected">saved</NavLink>
      </div>
      <Route exact path="/" component={AnimalView} />
      <Route path="/saved" component={Saved} />
    </div>
  );
}

export default App;
