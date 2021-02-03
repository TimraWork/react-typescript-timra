import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS} from '../actions/actionCreator';
import {PostActionTypes} from '../types';

const initialState = {
  data: [],
  isLoading: false,
  error: null
};

type InitialStateType = typeof initialState;

const posts = (state: InitialStateType = initialState, action: PostActionTypes): Object => {
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
};

export default posts;
