import React, {useEffect, useState} from 'react';

import {getPostsThunk} from '../../redux/posts';
import {connect} from 'react-redux';
import {IPost} from '../../types';
import {Loader} from '../../components/Loader';
interface IProps {
  posts: {
    data: Array<IPost>;
    isLoading?: boolean;
  };
  getPostsThunk: Function;
}

const PagePosts: React.FC<IProps> = ({posts, getPostsThunk}) => {
  const [postsList, setPostsList] = useState(posts.data);
  const [isLoading, setIsLoading] = useState(posts.isLoading);

  useEffect(() => {
    getPostsThunk();
  }, [getPostsThunk]);

  useEffect(() => {
    setPostsList(posts.data);
  }, [posts.data]);

  useEffect(() => {
    setIsLoading(posts.isLoading);
  }, [posts.isLoading]);

  return (
    <>
      {isLoading && <Loader />}
      {postsList.map(({id, title}, idx) => (
        <div key={id}>
          <strong>{idx}.__ </strong> {title}
        </div>
      ))}
    </>
  );
};

export const Posts = connect((state) => state, {getPostsThunk})(PagePosts);
