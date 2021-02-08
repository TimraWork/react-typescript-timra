import {getPostsSuccess} from './actions';
import {getPosts} from '../api';

export const getPostsThunk = () => async (dispatch) => {
  const postsList = await getPosts();
  dispatch(getPostsSuccess(postsList));
};
