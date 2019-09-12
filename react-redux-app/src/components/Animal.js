import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAnimal, setAnimal } from "../actions";

const Animal = ({ animal, imageURL, error, isFetching, getAnimal, setAnimal }) => {
  useEffect(() => {
    getAnimal(animal);
  }, [animal, getAnimal]);

  const changeAnimal = (newAnimal) => {
    setAnimal(newAnimal);
    if (animal === newAnimal) getAnimal(animal);
  }

  if (isFetching) return <h2>loading...</h2>;

  if (error) return <img src={`https://http.cat/${error}`} alt={error} />;

  return (
    <div>
      <div>
        <button onClick={() => changeAnimal("shibes")}>shibe plz</button>
        <button onClick={() => changeAnimal("birds")}>bird plz</button>
        <button onClick={() => changeAnimal("cats")}>cat plz</button>
      </div>
      <img src={imageURL} alt={animal} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    animal: state.animal,
    imageURL: state.imageURL,
    error: state.error,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getAnimal, setAnimal }
)(Animal);
