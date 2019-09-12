import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
  animal: "shibes",
  imageURL: "",
  error: null,
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
