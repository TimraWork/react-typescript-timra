import React, {useEffect, useState} from 'react';

import {getPostsThunk} from '../../redux/posts';
import {connect} from 'react-redux';
import {IPosts} from '../../types';
interface IProps {
  posts: {
    data: Array<IPosts>;
  };
  getPostsThunk: Function;
}

const PagePosts: React.FC<IProps> = ({posts, getPostsThunk}) => {
  const [postsList, setPostsList] = useState(posts.data);

  useEffect(() => {
    getPostsThunk();
  }, [getPostsThunk]);

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

export const Posts = connect((state) => state, {getPostsThunk})(PagePosts);
