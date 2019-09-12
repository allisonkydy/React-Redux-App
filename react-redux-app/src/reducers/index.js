import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
  animal: 'shibes',
  imageURL: '',
  error: '',
  isFetching: false,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload
      }
    default:
      return state;
  }
}