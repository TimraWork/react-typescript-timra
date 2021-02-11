import {PostsAction} from './actions';
import {getPostsRequest} from '../api';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../rootReducer';
import {Action} from 'redux';

export const getPostsThunk = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  dispatch(PostsAction.Request());
  const postsList = await getPostsRequest();
  dispatch(PostsAction.Success(postsList));
};
