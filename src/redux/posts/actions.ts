import {ActionTypes} from '../../types';

export const PostsAction = {
  Request: (): ActionTypes => ({type: 'timra/posts/GET_REQUEST'} as const),
  Success: (data: Array<Object>): ActionTypes => ({type: 'timra/posts/SET_SUCCESS', payload: {data}} as const),
  Failure: (): ActionTypes => ({type: 'timra/posts/SET_FAILURE'} as const)
};
