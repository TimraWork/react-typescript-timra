import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS} from './actions';
import {PostActionTypes} from '../../types';

const initialState = {
  data: [] as Array<Object> | [],
  isLoading: false as boolean,
  error: null as string | null
};

type InitialStateType = typeof initialState;

const posts = (state: InitialStateType = initialState, action: PostActionTypes): InitialStateType => {
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
