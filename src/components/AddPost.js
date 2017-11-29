import React from 'react';
import { connect } from 'react-redux';

// components
import PostForm from './PostForm';
// action
import { startAddPost } from '../actions/blog'

export class AddPost extends React.Component {
  
  onSubmit = (post) => {
    // redux dispatch action AddPost
    this.props.startAddPost(post);
    this.props.history.push('/');

  }

  render() {
    return (
      <div>
        <h2>Add a new post of your blog</h2>
        {/*Render a Post form*/}
        <div>
          <PostForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  startAddPost: post => dispatch(startAddPost(post)),
});

export default connect(undefined, mapDispatchToProps)(AddPost);