import {getPostsSuccess} from './actions';
import {getPosts} from '../api';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../rootReducer';
import {Action} from 'redux';

export const getPostsThunk = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  const postsList = await getPosts();
  dispatch(getPostsSuccess(postsList));
};
