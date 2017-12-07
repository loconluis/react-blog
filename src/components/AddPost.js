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
        <div className="page-header">
          <div className="container">
            <h1>Add a new post of your blog</h1>
          </div>
        </div>
        {/*Render a Post form*/}
        <div className="container">
          <PostForm
            onSubmit={this.onSubmit}
            add={true}
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