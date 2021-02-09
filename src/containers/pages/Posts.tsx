import React, {useEffect, useState} from 'react';

import {getPostsThunk} from '../../redux/posts';
import {connect} from 'react-redux';
import {IPost} from '../../types';
interface IProps {
  posts: {
    data: Array<IPost>;
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
      {postsList.map(({id, title}, idx) => (
        <div key={id}>
          <strong>{idx}.__ </strong> {title}
        </div>
      ))}
    </>
  );
};

export const Posts = connect((state) => state, {getPostsThunk})(PagePosts);
