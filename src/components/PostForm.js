import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    // states of class
    this.state = {
      title: props.post ? props.post.title : '',
      body: props.post ? props.post.body : '',
      error: '',
    };
  }

  onBodyChange = (e) => {
    // take the value of Body input
    const body = e.target.value;
    this.setState(() => ({ body }));
  }

  onTitleChange = (e) => {
    // take the value of Title input
    const title = e.target.value;
    this.setState(() => ({ title }));
  }

  onSubmit = (e) => {
    // Handle and validate the data send it
    e.preventDefault();

    if (!this.state.title || !this.state.body) {
      this.setState(() => ({ error: 'Please provide a title, or write something in the body of the post.' }))
    } else {
      this.setState(() => ({ error: '' }))
      if(this.props.add) {
        const time = Date.now();
        this.props.onSubmit({
          title: this.state.title,
          body: this.state.body,
          createdAt: time,
        });
      } else {
        this.props.onSubmit({
          title: this.state.title,
          body: this.state.body,
        });
      }
    }
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