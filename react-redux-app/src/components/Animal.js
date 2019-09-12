import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAnimal, saveImage } from "../actions";

const Animal = () => {
  const state = useSelector(state => {
    return {
      animal: state.animal,
      imageURL: state.imageURL,
      error: state.error,
      isFetching: state.isFetching
    };
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimal(state.animal));
  }, [state.animal, getAnimal]);

  const addToSaved = currentImage => {
    dispatch(saveImage(currentImage));
  };

  if (state.isFetching) return <h2>loading...</h2>;

  if (state.error) return <img src={`https://http.cat/${state.error}`} alt={state.error} />;

  return (
    <div>
      <button className="save-btn" onClick={() => addToSaved(state.imageURL)}>
        add to saved
      </button>
      <img src={state.imageURL} alt={state.animal} />
    </div>
  );
};

export default Animal;
