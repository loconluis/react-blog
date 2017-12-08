import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import selectors

import selectPosts from '../selectors/posts';

const PostSummary = ({ postsCount }) => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="page-header__summary">
          <h1 className="page-header__title">Viewing <span>{postsCount}</span></h1>
          <div className="page-header__actions">
            <Link to="/create" className="btn btn--action">New post</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const visiblePost = selectPosts(state.blog, state.filters);
  return { postsCount: visiblePost.length }
}

export default connect(mapStateToProps)(PostSummary);