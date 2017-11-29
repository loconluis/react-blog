import React from 'react'
import { connect } from 'react-redux';
// component
import PostListItem from './PostListItem';
// selector
import selectPosts from '../selectors/posts';

const PostList =  (props) => {
  return (
    <div>
      {
        props.posts.length === 0 ? (
          <div>
            <span>No Posts</span>
          </div>) 
        : (
          props.posts.map(post => <PostListItem key={post.id} {...post}/>)
        )
      }
    </div>
  );
}

const mapStateToProps = state => (
  {
    posts: selectPosts(state.blog, state.filters),
  }
);

export default connect(mapStateToProps)(PostList);
