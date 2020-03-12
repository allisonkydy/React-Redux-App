import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Animal from './Animal';
import { getAnimal, setAnimal } from '../actions';

const AnimalView = () => {
  const animal = useSelector(state => state.animal);
  const dispatch = useDispatch();

  const changeAnimal = (newAnimal) => {
    animal === newAnimal ? dispatch(getAnimal(animal)) : dispatch(setAnimal(newAnimal));
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


export default AnimalView;
