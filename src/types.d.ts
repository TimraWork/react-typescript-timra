import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from './redux/posts';

export interface IPost {
  id: number;
  title: {rendered: string};
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}

// Actions
interface IGetPostsRequest {
  type: typeof GET_POSTS_REQUEST; // нельзя присвоить значение контанте, только типу
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
