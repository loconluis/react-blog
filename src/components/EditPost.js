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
    console.log(this.props.post)
    return (
      <div>
        <h2>Edit post</h2>
        <div>
          <PostForm
            isEdit
            post={this.props.post}
            onSubmit={this.onSubmit}
          />
        </div>
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

const mapDispatchToProps = (dispatch, props) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: data => dispatch(startRemovePost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);