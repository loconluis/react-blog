import React from 'react';
import { Link } from 'react-router-dom'

const PostListItem = ({
  id,
  title,
  createdAt,
}) => {
  return (
  <Link to={`/edit/${id}`} className="list-item">
    <h3 className="list-item__title">{title}</h3>
    <span className="list-item__sub-title">{createdAt}</span>
    <div>
      <Link to={`/me/${id}`}>View post</Link>
    </div>
  </Link>
)};

export default PostListItem;