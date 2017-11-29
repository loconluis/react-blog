import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import selectors

import selectPosts from '../selectors/posts';

const PostSummary = ({ postsCount }) => {
  return (
    <div>
      <h1>Viewing <span>{postsCount}</span></h1>
      <div>
        <Link to="/create">New post</Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const visiblePost = selectPosts(state.blog, state.filters);
  return { postsCount: visiblePost.length }
}

export default connect(mapStateToProps)(PostSummary);