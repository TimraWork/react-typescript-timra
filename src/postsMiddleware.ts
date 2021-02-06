import {getPostsSuccess, GET_POSTS_REQUEST} from './actions/actionCreator';
import {http} from './api';
import {Middleware} from 'redux';
import {RootState} from './reducers/index';
import {PostActionTypes} from './types';

interface IPost {
  parsedBody?: any;
}

export const postsMiddleware: Middleware<{}, RootState> = (store) => (next) => async (action: PostActionTypes) => {
  if (action.type === GET_POSTS_REQUEST) {
    const success: IPost = await http<IPost>(`https://jsonplaceholder.typicode.com/posts`);
    if (success) {
      console.log(success);
      store.dispatch(getPostsSuccess(success.parsedBody));
    }
  } else {
    next(action);
  }
};
