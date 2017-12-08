import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';

const PostListItem = ({
  id,
  title,
  createdAt,
  isPublic
}) => {
  return (
    <div className="list-item">
      <Link to={`/edit/${id}`} className="list-item__link">
        <h3 className="list-item__title">{title}</h3>
        <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </Link>
      <div>
      {
        isPublic 
        ? (<Link to={`/luislocon/${id}`}>View post</Link>) 
        : (<Link to={`/me/${id}`}>View post</Link>)
      }
        
      </div>
    </div>
)};

export default PostListItem;