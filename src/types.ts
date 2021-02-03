import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from './actions/actionCreator';

// export const getPostsRequest = () => ({type: GET_POSTS_REQUEST});
// export const getPostsSuccess = (data) => ({type: GET_POSTS_SUCCESS, payload: {data}});
// export const getPostsFailure = () => ({type: GET_POSTS_FAILURE});

// Store
export interface IPosts {
  id: number;
  title: string;
}

// Actions
interface IGetPostsRequest {
  type: typeof GET_POSTS_REQUEST;
}

interface IGetPostsSuccess {
  type: typeof GET_POSTS_SUCCESS;
  payload: {
    data: Array<Object>;
  };
}

interface IGetPostsFailure {
  type: typeof GET_POSTS_FAILURE;
}

export type PostActionTypes = IGetPostsRequest | IGetPostsSuccess | IGetPostsFailure;
