import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id }) => {
  return (
    <div>
      <Link to={`/me/${id}`} exact>View post</Link>
    </div>
  )
}
