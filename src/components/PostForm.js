import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
  // states of class
  state = {
    title: '',
    body: '',
    error: '',
  }

  onBodyChange = (e) => {
    // take the value of Body input
  }

  onTitleChange = (e) => {
    // take the value of Title input
  }

  onSubmit = (e) => {
    // Handle and validate the data send it 
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Set a title for this post"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea
          type="text"
          placeholder="Write something cool, people will love it!"
          value={this.state.body}
          onChange={this.onBodyChange}
        />
        <button>Add Post</button>
      </form>
    );
  }
}