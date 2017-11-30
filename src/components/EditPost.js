import React from 'react';
import { connect } from 'react-redux';
// components
import PostForm from './PostForm';
// action
import { startEditPost, startRemovePost } from '../actions/blog';


export class EditPost extends React.Component {
  onSubmit = (post) => {
    // redux dispatch action EditPost
    this.props.startEditPost(this.props.post.id, post);
    this.props.history.push('/');
  }

  onRemove = () => {
    // redux dispatch action removePost
    this.props.startRemovePost({ id: this.props.post.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2>Edit post of your blog</h2>
        {/*Render a Post form*/}
        <div>
          <PostForm
            post={this.props.post}
            onSubmit={this.onSubmit}
          />
        </div>
        {/*Render a delete button*/}
        <div>
          <button
            onClick={this.onRemove}
          >
            Remove Post
          </button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => ({
  post: state.blog.find(post => post.id === props.match.params.id),
})

const mapDispatchToProps = dispatch => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: data => dispatch(startRemovePost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)