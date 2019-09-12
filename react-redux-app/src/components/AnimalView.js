import React from 'react';
import { connect } from 'react-redux';

import Animal from './Animal';
import { getAnimal, setAnimal } from '../actions';

const AnimalView = ({ animal, getAnimal, setAnimal }) => {
  const changeAnimal = (newAnimal) => {
    animal === newAnimal ? getAnimal(animal) : setAnimal(newAnimal);
  }

  return (
    <>
      <div className="buttons">
        <button onClick={() => changeAnimal("shibes")}>new shibe</button>
        <button onClick={() => changeAnimal("birds")}>new bird</button>
        <button onClick={() => changeAnimal("cats")}>new cat</button>
      </div>
      <Animal />
    </>
  )
}

const mapStateToProps = state => {
  return {
    animal: state.animal,
  };
};

export default connect(
  mapStateToProps,
  { getAnimal, setAnimal }
)(AnimalView);
