import {useEffect, useState} from 'react';

import {getPostsRequest} from '../../actions/actionCreator';
import {connect} from 'react-redux';

const PagePosts = ({posts, getPostsRequest}) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPostsRequest();
  }, [getPostsRequest]);

  useEffect(() => {
    setPostList(posts.data);
  }, [posts]);

  const elements = postList.map((item) => {
    const {id, title} = item;
    return (
      <div key={id}>
        {id} - {title}
      </div>
    );
  });
  return <>Посты {elements}</>;
};

export const Posts = connect((state) => state, {getPostsRequest})(PagePosts);
