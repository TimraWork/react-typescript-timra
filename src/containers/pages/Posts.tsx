import React, {useEffect, useState} from 'react';

import {getPostsRequest} from '../../actions/actionCreator';
import {connect} from 'react-redux';
import {IPosts} from '../../types';
interface IProps {
  posts: {
    data: Array<IPosts>;
  };
  getPostsRequest: Function;
}

const PagePosts: React.FC<IProps> = ({posts, getPostsRequest}) => {
  const [postsList, setPostsList] = useState(posts.data);

  useEffect(() => {
    getPostsRequest();
  }, [getPostsRequest]);

  useEffect(() => {
    setPostsList(posts.data);
  }, [posts.data]);

  return (
    <>
      {postsList.map(({id, title}) => (
        <div key={id}>{title}</div>
      ))}
    </>
  );
};

export const Posts = connect((state) => state, {getPostsRequest})(PagePosts);
