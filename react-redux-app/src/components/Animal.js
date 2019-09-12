import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAnimal, saveImage } from "../actions";

const Animal = ({ animal, imageURL, error, isFetching, getAnimal, saveImage }) => {
  useEffect(() => {
    getAnimal(animal);
  }, [animal, getAnimal]);

  const addToSaved = currentImage => {
    saveImage(currentImage);
  }

  if (isFetching) return <h2>loading...</h2>;

  if (error) return <img src={`https://http.cat/${error}`} alt={error} />;

  return (
    <div>
      <img src={imageURL} alt={animal} />
      <button onClick={() => addToSaved(imageURL)}>add to saved</button>
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
  { getAnimal, saveImage }
)(Animal);
