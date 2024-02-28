import React from 'react';
import './Post.css';

function Post({ post }) {
  return (
    <div className="post">
      <h4>{post.author}</h4>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;


