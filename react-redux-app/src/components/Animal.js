import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAnimal } from '../actions';

const Animal = ({ animal, imageURL, error, isFetching, getAnimal }) => {
  useEffect(() => {
    getAnimal(animal)
  }, [animal])
  return (
    <div>
      <h1></h1>
      <img src="" />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    animal: state.animal,
    imageURL: state.imageURL,
    error: state.error,
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps, { getAnimal })(Animal);
