import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getAnimal = (animal) => {
  return (dispatch) => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/${animal}?count=1&httpsUrls=true`)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }
}