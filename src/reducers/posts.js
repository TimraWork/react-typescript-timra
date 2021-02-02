import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS} from '../actions/actionCreator';

const initialState = {
  data: [],
  isLoading: false,
  error: null
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    }
    default:
      return state;
  }
}
