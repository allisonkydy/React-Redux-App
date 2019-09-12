import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getAnimal = animal => {
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://shibe.online/api/${animal}?count=1&httpsUrls=true`
      )
      .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data[0] });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCH_ERROR, payload: err.response.status });
      });
  };
};

export const SET_ANIMAL = "SET_ANIMAL";

export const setAnimal = animal => {
  return { type: SET_ANIMAL, payload: animal };
}

export const SAVE_IMAGE = "SAVE_IMAGE";

export const saveImage = image => {
  return { type: SAVE_IMAGE, payload: image }
}