import {getPostsSuccess, GET_POSTS_REQUEST} from './actions/actionCreator';
import {http} from './api';

export const postsMiddleware = (store) => (next) => async (action) => {
  if (action.type === GET_POSTS_REQUEST) {
    const success = await http(`https://jsonplaceholder.typicode.com/posts`);
    if (success) {
      console.log(success.parsedBody);
      store.dispatch(getPostsSuccess(success.parsedBody));
    }
  } else {
    next(action);
  }
};
