import {PostActionTypes} from '../types';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getPostsRequest = (): PostActionTypes => ({type: GET_POSTS_REQUEST});
export const getPostsSuccess = (data: Array<Object>): PostActionTypes => ({type: GET_POSTS_SUCCESS, payload: {data}});
export const getPostsFailure = (): PostActionTypes => ({type: GET_POSTS_FAILURE});
