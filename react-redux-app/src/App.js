import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import Animal from './components/Animal';
import { getAnimal, setAnimal } from './actions';

function App({ animal, getAnimal, setAnimal }) {
  const changeAnimal = (newAnimal) => {
    animal === newAnimal ? getAnimal(animal) : setAnimal(newAnimal);
  }

  return (
    <div className="App">
      <h1>random shibes (and birds and cats)</h1>
      <div className="buttons">
        <button onClick={() => changeAnimal("shibes")}>new shibe</button>
        <button onClick={() => changeAnimal("birds")}>new bird</button>
        <button onClick={() => changeAnimal("cats")}>new cat</button>
      </div>
      <Animal />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    animal: state.animal,
  };
};

export default connect(
  mapStateToProps,
  { getAnimal, setAnimal }
)(App);
