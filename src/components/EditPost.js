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
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Edit Markdown Editor</h1>
          </div>
        </div>
        <div className="container">
          <PostForm
            isEdit
            post={this.props.post}
            onSubmit={this.onSubmit}
          />
          <button
            className="btn btn--warning"
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

const mapDispatchToProps = (dispatch, props) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: data => dispatch(startRemovePost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);