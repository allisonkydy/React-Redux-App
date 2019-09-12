import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import AnimalView from './components/AnimalView';
import Saved from './components/Saved';

function App() {
  return (
    <div className="App">
      <h1>random shibes (and birds and cats)</h1>
      <Link to="/">home</Link>
      <Link to="/saved">saved</Link>
      <Route exact path="/" component={AnimalView} />
      <Route path="/saved" component={Saved} />
    </div>
  );
}

export default App;
