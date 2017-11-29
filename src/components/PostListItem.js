import React from 'react';
import { Link } from 'react-router-dom'


const PostListItem = (props) => {
  console.log(props);
  return (
  <div>
    <Link to="">
      <h3>titulo</h3>
      <span>fecha</span>
    </Link>
  </div>
)};

export default PostListItem;