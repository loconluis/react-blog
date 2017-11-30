import React from 'react';
import { Link } from 'react-router-dom'


const PostListItem = ({
  id,
  title,
  createdAt,
}) => {
  return (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
      <span>{createdAt}</span>
    </Link>
  </div>
)};

export default PostListItem;